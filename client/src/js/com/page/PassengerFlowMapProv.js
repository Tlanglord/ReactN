/**
 *
 * title: PassengerFlowMapProv.js
 *
 * author: WangPei.
 *
 * date: 2017/9/7.
 *
 */
import React, {Component} from "react"
import echarts from 'echarts';
import "echarts/map/js/china"
import "./passengerFlowMapProv.css"
export default class PassengerFlowMapProv extends Component {

    constructor(props) {
        super(props);
        // Set up initial state
        // this.state = {
        //     text: props.initialValue || 'placeholder'
        // };

        this.state = {
            data: {
                "min": 0,
                "max": 1500,
                datas: [
                    {
                        "id": "prov001",
                        "name": "北京",
                        "value": 1500
                    },
                    {
                        "id": "prov001",
                        "name": "天津",
                        "value": 20
                    },
                    {
                        "id": "prov001",
                        "name": "上海",
                        "value": 300
                    },
                    {
                        "id": "prov001",
                        "name": "重庆",
                        "value": 500
                    },
                    {
                        "id": "prov001",
                        "name": "河北",
                        "value": 40
                    },
                    {
                        "id": "prov001",
                        "name": "河南",
                        "value": 6
                    },
                    {
                        "id": "prov001",
                        "name": "云南",
                        "value": 22
                    },
                    {
                        "id": "prov001",
                        "name": "辽宁",
                        "value": 33
                    },
                    {
                        "id": "prov001",
                        "name": "黑龙江",
                        "value": 77
                    },
                    {
                        "id": "prov001",
                        "name": "湖南",
                        "value": 88
                    },
                    {
                        "id": "prov001",
                        "name": "安徽",
                        "value": 99
                    },
                    {
                        "id": "prov001",
                        "name": "山东",
                        "value": 32
                    },
                    {
                        "id": "prov001",
                        "name": "新疆",
                        "value": 0
                    },
                    {
                        "id": "prov001",
                        "name": "江苏",
                        "value": 1
                    },
                    {
                        "id": "prov001",
                        "name": "浙江",
                        "value": 4
                    },
                    {
                        "id": "prov001",
                        "name": "江西",
                        "value": 98
                    },
                    {
                        "id": "prov001",
                        "name": "湖北",
                        "value": 123
                    },
                    {
                        "id": "prov001",
                        "name": "广西",
                        "value": 1234
                    },
                    {
                        "id": "prov001",
                        "name": "甘肃",
                        "value": 213
                    },
                    {
                        "id": "prov001",
                        "name": "山西",
                        "value": 321
                    },
                    {
                        "id": "prov001",
                        "name": "内蒙古",
                        "value": 445
                    },
                    {
                        "id": "prov001",
                        "name": "陕西",
                        "value": 1457
                    },
                    {
                        "id": "prov001",
                        "name": "吉林",
                        "value": 988
                    },
                    {
                        "id": "prov001",
                        "name": "福建",
                        "value": 567
                    },
                    {
                        "id": "prov001",
                        "name": "贵州",
                        "value": 678
                    },
                    {
                        "id": "prov001",
                        "name": "广东",
                        "value": 876
                    },
                    {
                        "id": "prov001",
                        "name": "青海",
                        "value": 777
                    },
                    {
                        "id": "prov001",
                        "name": "西藏",
                        "value": 978
                    },
                    {
                        "id": "prov001",
                        "name": "四川",
                        "value": 789
                    },
                    {
                        "id": "prov001",
                        "name": "宁夏",
                        "value": 908
                    },
                    {
                        "id": "prov001",
                        "name": "海南",
                        "value": 1350
                    },
                    {
                        "id": "prov001",
                        "name": "台湾",
                        "value": 965
                    },
                    {
                        "id": "prov001",
                        "name": "香港",
                        "value": 1243
                    },
                    {
                        "id": "prov001",
                        "name": "澳门",
                        "value": 1250
                    }
                ]
            }
        };
    }


    componentDidMount() {
        this.renderMap();
    }

    componentWillReceiveProps(nexProps) {
        if (nexProps && nexProps.data !== null) {
            this.setState({data: nexProps.data});
        }
    }

    componentDidUpdate() {
        this.renderMap();
    }

    renderMap() {
        let _this = this;
        let name = this.props.name;
        let min = 0;
        let max = 1500;
        let data = [];
        if (this.state.data !== {}) {
            min = this.state.data.min;
            max = this.state.data.max;
            data = this.state.data.datas;
        }
        let option = {
            title: {
                text: name,
                x: 'center',
                y: 'top',
                textStyle: {
                    color: "#ffffff",
                    fontSize: 32,
                    fontWeight: 700
                }
            },
            tooltip: {},
            visualMap: {
                min: min,
                max: max,
                left: 'left',
                top: 'bottom',
                text: [],
                seriesIndex: [1],
                inRange: {
                    color: ['#2CFEFA', '#2AFD95', '#29FD32', '#D6FD35', '#FEE834', '#FDA128', '#FC5730', '#FC3C39']
                    // color: ['#2CFEFA','#FC3C39']
                },
                textStyle: {
                    color: '#fff'
                },
                calculable: true
            },
            geo: {
                map: 'china',
                roam: false,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#000000'
                        }
                    }
                },
                left: 5,
                right: 5,
                bottom: 5,
                top: 5,
                itemStyle: {
                    normal: {
                        areaColor: '#000020',
                        borderColor: '#00B4FF'
                    },
                    emphasis: {
                        areaColor: '',//鼠标悬浮时区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 1,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                },
                {
                    name: 'categoryA',
                    type: 'map',
                    geoIndex: 0,
                    tooltip: {show: false},
                    data: data
                }
            ]
        };
        let flowMapDiv = this.refs.pasFlowMapProv;
        let flowMap = echarts.init(flowMapDiv);
        flowMap.on('click', function (param) {
            // window.event.cancelBubble = true
            // param.event.cancelBubble = true;
            /*param.event.event.preventDefault();
             param.event.event.stopPropagation();*/
            if (param.componentType === 'series' && param.seriesType === 'map') {
                let name = param.data.name;
                let id = param.data.id;
                let value = param.data.value;
                // _this.props.onClickInFlowProvince(param.color,id);
                console.log("省份ID----" + id + "----省份名称----" + name + "----value值----" + value);
            }
        });
        flowMap.setOption(option);
        // window.onresize = flowMap.resize;
    }

    render() {
        return (
            <div className="pas-flow-map-prov" ref="pasFlowMapProv"></div>
        );
    }
}