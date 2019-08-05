/**
 * Created by Joker on 19/8/4.
 */
/***
 * 动态生成图表方法
 * */
import React from 'react'
import BarComponent from '../../components/chart/bar'

var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')


function genBarChartData(componentId) {


    return (
        <BarComponent containKey={componentId}  width={300} height={400} />
    )
}


export {
    genBarChartData
}