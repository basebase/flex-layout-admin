/**
 * Created by Joker on 19/7/29.
 */
import React from 'react'
import RGL, { WidthProvider } from 'react-grid-layout'

import BarComponent from '../../components/chart/bar'

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

    render() {
        return (
            <div>
                <button onClick={this.resetLayout}>Reset Layout</button>
                <ReactGridLayout
                    {...this.props}
                    layout={this.state.layout}
                    // draggableCancel=".r-grid7" 不能拖放，个人不建议这样使用
                    onLayoutChange={this.onLayoutChange}
                    onResizeStop={this.handleResizeStop}
                >
                    <div className="r-grid7" key="bar" ref="bar" data-grid={{ w: 1, h: 4, x: 0, y: 0}}>
                        <BarComponent    width={this.state.width} height={this.state.height} />
                    </div>



                    <div className="r-grid7" key="2" data-grid={{ w: 1, h: 3, x: 1, y: 0 }}>
                        <span className="text">2</span>
                    </div>
                    <div className="r-grid" key="3" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>
                        <span className="text">3</span>
                    </div>
                    <div className="r-grid" key="4" data-grid={{ w: 2, h: 3, x: 3, y: 0 }}>
                        <span className="text">4</span>
                    </div>
                    <div className="r-grid" key="5" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>
                        <span className="text">5</span>
                    </div>
                </ReactGridLayout>
            </div>
        )
    }
}


export default SaveLayout