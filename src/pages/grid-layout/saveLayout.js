/**
 * Created by Joker on 19/7/29.
 */
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'
import _ from "lodash";

import BarComponent from '../../components/chart/bar'
import { genBarChartData } from './genChart'

const ReactGridLayout = WidthProvider(RGL)
const originalLayout = getFromLS("layout") || []


function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
        } catch (e) {
            /*Ignore*/
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            "rgl-7",
            JSON.stringify({
                [key]: value
            })
        );
    }
}

class SaveLayout extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            chartComponents: [],
            layout: JSON.parse(JSON.stringify(originalLayout)),
            width: 300,
            height: 500
        };

        this.onLayoutChange = this.onLayoutChange.bind(this)
        this.resetLayout = this.resetLayout.bind(this)
    }

    static defaultProps = {
        className: "layout",
        cols: 12,
        rowHeight: 20,
        onLayoutChange: function() {}
    }



    resetLayout() {
        this.setState({
            layout: []
        })
    }

    addBarChart = () => {
        let id = this.state.id + 1
        let barChart = genBarChartData(`key-${id}`, `bar-${id}`)
        let cs = this.state.chartComponents
        cs.push(barChart)
        this.setState({
            chartComponents: cs,
            id: id
        }, ()=> {console.log(id)})
    }


    onLayoutChange(layout) {
        /*eslint no-console: 0*/
        saveToLS("layout", layout);
        this.setState({ layout });
        this.props.onLayoutChange(layout); // updates status display
    }

    handleResizeStop = (layout, oldItem, newItem, placeholder, e, element) => {
        let id = newItem.i
        let refs = {...this.refs}
        console.log("refs ", refs[id].clientWidth, " id ", newItem)
        this.setState({
            width: refs[id].clientWidth,
            height: refs[id].clientHeight
        }, () => {console.log("ww: ", this.state.width, " hh: ", this.state.height)})
    }

    getComponents = (item, index) => {
        let keyId = `key-${this.state.id}`
        let barId = `bar-${this.state.id}`
        console.log("{item}", {item})
        return (

            <div className="r-grid7" key={keyId} ref={keyId} data-grid={{ w: 1, h: 4, x: {index}, y: 0}}>
                <BarComponent containKey={barId}  width={this.state.width} height={this.state.height} />
            </div>

        )
    }



    render() {





        return (
            <div>
                <button onClick={this.resetLayout}>Reset Layout</button>
                <button onClick={this.addBarChart}>add Bar</button>
                <ReactGridLayout
                    {...this.props}
                    layout={this.state.layout}
                    // draggableCancel=".r-grid7" 不能拖放，个人不建议这样使用
                    onLayoutChange={this.onLayoutChange}
                    onResizeStop={this.handleResizeStop}
                >



                    {/*<div className="r-grid7" key="bar" ref="bar" data-grid={{ w: 1, h: 4, x: 0, y: 0}}>*/}
                        {/*<BarComponent containKey={`key-${this.state.id}`}  width={this.state.width} height={this.state.height} />*/}
                    {/*</div>*/}



                    {
                        this.state.chartComponents.map((item, index) => (
                            this.getComponents(item, index)
                        ))
                    }

                </ReactGridLayout>
            </div>
        )
    }
}


export default SaveLayout