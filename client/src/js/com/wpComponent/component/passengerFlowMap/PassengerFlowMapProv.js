/**
 *
 * title: PassengerFlowMapProv.js
 *
 * author: WangPei.
 *
 * date: 2017/9/7.
 *
 */
import React ,{Component} from "react"
import echarts from 'echarts';
import "echarts/map/js/china"
import "./passengerFlowMapProv.less"
export default class PassengerFlowMapProv extends Component{
   /* state={
        data:{
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
    };*/
    componentDidMount(){
        this.renderMap();
    }
    renderMap(){
        let option = {
            title: {
                text: "主要旅游目的地",
                x: 'center',
                y: 'top',
                textStyle:{
                    color:"#ffffff",
                    fontSize:32,
                    fontWeight:700
                }
            },
            tooltip: {},
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
                text: [],
                seriesIndex: [1],
                inRange: {
                    color: ['#2CFEFA','#2AFD95','#29FD32','#D6FD35','#FEE834','#FDA128','#FC5730','#FC3C39']
                    // color: ['#2CFEFA','#FC3C39']
                },
                textStyle: {
                    color: '#fff'
                },
                calculable : true
            },
            geo: {
                map: 'china',
                roam: true,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#000020',
                        borderColor: '#00B4FF'
                    },
                    emphasis:{
                        areaColor: '',//鼠标悬浮时区域颜色
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series : [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                },
                {
                    name: 'categoryA',
                    type: 'map',
                    geoIndex: 0,
                    tooltip: {show: false},
                    data:[
                        {name: '北京', value: 1500},
                        {name: '天津', value: 20},
                        {name: '上海', value: 300},
                        {name: '重庆', value: 500},
                        {name: '河北', value: 40},
                        {name: '河南', value: 6},
                        {name: '云南', value: 22},
                        {name: '辽宁', value: 33},
                        {name: '黑龙江', value:77},
                        {name: '湖南', value: 88},
                        {name: '安徽', value: 99},
                        {name: '山东', value: 32},
                        {name: '新疆', value: 0},
                        {name: '江苏', value: 1},
                        {name: '浙江', value: 4},
                        {name: '江西', value: 98},
                        {name: '湖北', value: 123},
                        {name: '广西', value: 1234},
                        {name: '甘肃', value: 213},
                        {name: '山西', value: 321},
                        {name: '内蒙古', value:445},
                        {name: '陕西', value: 1457},
                        {name: '吉林', value: 988},
                        {name: '福建', value: 567},
                        {name: '贵州', value: 678},
                        {name: '广东', value: 876},
                        {name: '青海', value: 777},
                        {name: '西藏', value: 978},
                        {name: '四川', value: 789},
                        {name: '宁夏', value: 908},
                        {name: '海南', value: 1350},
                        {name: '台湾', value: 965},
                        {name: '香港', value: 1243},
                        {name: '澳门', value: 1250}
                    ]
                }
            ]
        };
        let flowMapDiv=this.refs.pasFlowMapProv;
        let flowMap = echarts.init(flowMapDiv);
        flowMap.setOption(option);
        // window.onresize = flowMap.resize;
    }
    render(){
        return(
            <div className="pas-flow-map-prov" ref="pasFlowMapProv"></div>
        );
    }
}