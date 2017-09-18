/**
 * Created by wangpei on 2017/9/7 0007.
 */

var redis = require('redis');
var bcrypt = require('bcrypt');
var db = redis.createClient();
var Util = require('../lib/Util');

function User(obj) {
    for (var key in obj) {
        this[key] = obj[key];
        console.log(obj[key]);
    }

    this.save = function (fn) {
        if (this.id) {
            this.update(fn);
        } else {
            var user = this;
            debugger
            db.incr("user:ids", function (err, id) {
                if (err) {
                    return fn(err);
                }
                user.id = id;
                user.hashPassword(function (err) {
                    if (err) {
                        return fn(err);
                    }
                    user.update(fn);
                })
            })
        }
    }

    this.hashPassword = function (fn) {
        var user = this;
        bcrypt.genSalt(12, function (err, salt) {
            if (err) {
                return fn(err);
            }
            user.salt = salt;
            bcrypt.hash(user.pass, salt, function (err, hash) {
                if (err) {
                    return fn(err);
                }
                user.pass = hash;
                fn();
            })
        })
    }

    this.update = function (fn) {
        var user = this;
        var id = user.id;

        db.set('user:id:' + user.name, id, function (err) {
            if (err) {
                return fn(err);
            }

            db.hmset('user:' + id, user, function (err) {
                fn(err);
            })
        })
    }

    Object.defineProperty(this, "save", {
        enumerable: false
    })
    Object.defineProperty(this, "update", {
        enumerable: false
    })
    Object.defineProperty(this, "hashPassword", {
        enumerable: false
    })
}

// User.prototype.save = function (fn) {
//     if (this.id) {
//         this.update(fn);
//     } else {
//         var user = this;
//         debugger
//         db.incr("user:ids", function (err, id) {
//             if (err) {
//                 return fn(err);
//             }
//             debugger
//             user.id = id;
//             user.hashPassword(function (err) {
//                 if (err) {
//                     return fn(err);
//                 }
//                 debugger
//                 user.update(fn);
//             })
//         })
//     }
// }

// User.prototype.update = function (fn) {
//     var user = this;
//     var id = user.id;
//
//     db.set('user:id:' + user.name, id, function (err) {
//         if (err) {
//             return fn(err);
//         }
//
//         db.hmset('user:' + id, user, function (err) {
//             fn(err);
//         })
//     })
// }

// User.prototype.hashPassword = function (fn) {
//     var user = this;
//     bcrypt.genSalt(12, function (err, salt) {
//         if (err) {
//             return fn(err);
//         }
//         user.pass = salt;
//         fn();
//     })
// }

User.getByName = function (name, fn) {
    User.getId(name, function (err, id) {
        debugger
        if (err) {
            return fn(err);
        }
        debugger
        User.get(id, fn);
    })
}


User.getId = function (name, fn) {
    db.get('user:id:' + name, fn);
}

User.get = function (id, fn) {
    db.hgetall('user:' + id, function (err, user) {
        if (err) {
            return fn(err);
        }

        debugger
        fn(null, new User(user));
    })
}

User.authenticate = function (pass, name, fn) {
    User.getByName(name, function (err, user) {
        debugger

        if (err) {
            return fn(err);
        }
        debugger
        console.log("id:" + user.id);
        if (!user.id) {
            return fn();
        }

        debugger
        bcrypt.hash(pass, user.salt, function (err, hash) {
            debugger
            if (err) {
                debugger
                return fn(err);
            }
            debugger
            if (hash == user.pass) {
                debugger
                user.token = Util.genToken(user.name, "123456", new Date());
                db.set("user:token:" + user.id, user.token);
                debugger
                return fn(null, user);
            }
            fn();
        })
    })
}

User.logout = function (id, fn) {
    db.del("user:token:" + id, function (err) {
        if (err) {
            return fn(err);
        }
        fn();
    })
}

module.exports = User;
