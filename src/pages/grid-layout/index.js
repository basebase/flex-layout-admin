/**
 * Created by Joker on 19/7/29.
 */
import React from 'react'
import SaveLayout from './saveLayout'
import 'react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'
import './index.css'

class LayoutGridPage extends React.Component {

    render() {
        return (
            <div className="layout-pages">
                <div className="component">
                    <a href="#">折线图</a>
                    <a href="#">柱状图</a>
                    <a href="#">雷达图</a>
                    <a href="#">地图</a>
                    <a href="#">气泡</a>
                    <a href="#">面板</a>
                </div>
                <div className="layout-canvas">
                    <SaveLayout />
                </div>
            </div>
        )
    }
}

export default LayoutGridPage