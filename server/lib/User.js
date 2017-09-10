/**
 * Created by wangpei on 2017/9/7 0007.
 */

var redis = require('redis');
var bcrypt = require('bcrypt');
var db = redis.createClient();

function User(obj) {
    for (var key in obj) {
        this[key] = obj[key];
        console.log(obj[key]);
    }
}

User.prototype.save = function (fn) {
    if (this.id) {
        this.update(fn);
    } else {
        var user = this;
        debugger
        db.incr("user:ids", function (err, id) {
            if (err) {
                return fn(err);
            }
            debugger

            user.id = id;
            user.hashPassword(function (err) {
                if (err) {
                    return fn(err);
                }
                debugger
                user.update(fn);
            })
        })
    }
}


User.prototype.update = function (fn) {
    var user = this;
    var id = user.id;

    db.set('user:id:' + user.name, id, function (err) {
        if (err) {
            fn(err);
            return;
        }

        db.hmset('user:' + id, user, function (err) {
            fn(err);
        })
    })
}


User.prototype.hashPassword = function (fn) {
    var user = this;
    bcrypt.genSalt(12, function (err, salt) {
        if (err) {
            fn(err);
            return;
        }

        user.pass = salt;
        fn();
    })
}

User.getByName = function (name, fn) {
    User.getId(name, function (err, id) {
        if (err) {
            fn(err);
            return;
        }
        User.get(id, fn);
    })
}


User.getId = function (name, fn) {
    db.get('user:id:' + name, fn);
}

User.get = function (id, fn) {
    db.hgetall('user:' + id, function (err, user) {
        if (err) {
            fn(err);
            return;
        }

        fn(null, new User(user));
    })
}


User.authenticate = function (pass, name, fn) {
    User.getByName(name, function (err, user) {
        if (err) {
            return fn(err);
        }
        if (!user.id) {
            return fn();
        }
        bcrypt.hash(pass, user.salt, function (err, salt) {
            if (err) {
                return fn(err);
            }

            if (salt == user.pass) {
                return fn(null, user);
            }

            fn();
        })
    })
}

module.exports = User;
