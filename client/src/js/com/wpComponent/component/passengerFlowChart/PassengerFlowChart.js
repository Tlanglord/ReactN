/**
 * Created by wangpei on 2017/9/6 0006.
 */
import React, {Component} from "react"
import echarts from 'echarts';
import "./passengerFlowChart.less"
export default class PassengerFlowChart extends Component {
    state = {
        data: {
            "period": [
                "10月1日",
                "10月2日",
                "10月3日",
                "10月4日",
                "10月5日",
                "10月6日",
                "10月7日",
                "10月8日"
            ],
            "data": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
            ],
            "unit": "万人"
        }
    };

    componentDidMount() {
        this.renderTrendChart();
    }

    renderTrendChart() {
        let option = {
            title: {
                text: "流入用户日趋势图",
                x: 'center',
                y: 'top',
                textStyle:{
                    color:"#ffffff",
                    fontSize:32,
                    fontWeight:700
                }
            },
            color: ['#3398DB'],

            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.state.data.period,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine:{
                        lineStyle:{
                            type:"dashed",
                            color:"#ffffff",
                            width:0.5
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine:{
                        lineStyle:{
                            type:"dashed",
                            color:"#ffffff",
                            width:0.5
                        }
                    }
                }
            ],
            series: [
                {
                    name: '',
                    type: 'bar',
                    barWidth: '40%',
                    data: this.state.data.data,
                    itemStyle:{
                        normal:{
                            color:"#FF58F9"
                        }
                    }
                }
            ]
        };

        let flowChartDiv = this.refs.pasFlowChart;
        let pasFlowChart = echarts.init(flowChartDiv);
        pasFlowChart.setOption(option);
        window.onresize = pasFlowChart.resize;

    }

    render() {
        return (
            <div>
                <div className="pas-flow-chart-unit-box"><span>单位 : 万人</span></div>
                <div className="pas-flow-chart" ref="pasFlowChart"></div>
            </div>
        );
    }
}