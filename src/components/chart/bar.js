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
        this.state = {
            containKey: this.props.containKey,
            width: this.props.width,
            height: this.props.height
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            width: nextProps.width,
            height: nextProps.height
        }, () => {console.log("bar width: ", this.state.width, " bar height: ", this.state.height)});
    }

    componentDidMount() {
        let myChart = echarts.init(document.getElementById(this.state.containKey))




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

        // 最新版本的echart可以这样写，可以跟随div大小变大变小
        myChart.on("finished", function () {
            myChart.resize()
        })

    }

    render() {
        return (
            <div id={this.state.containKey}  style={{ ...this.state }} className="bar-dg">
                {console.log("w: ", this.state.width, " h: ", this.state.height)}
            </div>
        )
    }
}

export default BarComponent