/**
 * Created by Joker on 19/7/31.
 */
import React from 'react'

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
class BarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }



    resizeWorldMapContainer1 = () => {
        let myChart = document.getElementById('bar-content')
        myChart.style.width = window.innerWidth
    }

    componentDidMount() {
        let myChart = echarts.init(document.getElementById('bar-content'))




        // 绘制图表
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        })


        window.onresize = function () {
            //重置容器高宽
            this.resizeWorldMapContainer1();
            myChart.resize();
        }
    }

    render() {
        return (
            <div id="bar-content"  style={{ width: 500, height: 600 }} className="bar-dg">

            </div>
        )
    }
}

export default BarComponent