/**
 * Created by Joker on 19/7/29.
 */
import React from 'react'
import _ from "lodash"
import { Responsive, WidthProvider } from "react-grid-layout"
import 'react-grid-layout/css/styles.css'
import './index.css'

const ResponsiveReactGridLayout = WidthProvider(Responsive);


function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: (_.random(0, 5) * 2) % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}


class LayoutGridPage extends React.Component {

    static defaultProps = {
        className: "layout",
        rowHeight: 30,
        onLayoutChange: function() {},
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        initialLayout: generateLayout()
    }

    constructor(props) {
        super(props)
        this.state = {
            currentBreakpoint: "lg",
            compactType: "vertical",
            mounted: false,
            layouts: { lg: this.props.initialLayout }
        }
    }

    componentDidMount() {
        this.setState({ mounted: true });
    }

    generateDOM() {
        return _.map(this.state.layouts.lg, function(l, i) {
            return (
                <div key={i} className="r-grid">
                    {l.static ? (
                        <span
                            className="text"
                            title="This item is static and cannot be removed or resized."
                        >
              Static - {i}
            </span>
                    ) : (
                        <span className="text">{i}</span>
                    )}
                </div>
            );
        });
    }

    onBreakpointChange = breakpoint => {
        this.setState({
            currentBreakpoint: breakpoint
        });
    };



    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
    };



    render() {
        return (
            <div className="layout-pages">
                <div className="component">

                </div>
                <div className="layout-canvas">

                    <ResponsiveReactGridLayout
                        {...this.props}
                        layouts={this.state.layouts}
                        onBreakpointChange={this.onBreakpointChange}
                        onLayoutChange={this.onLayoutChange}
                        // WidthProvider option
                        measureBeforeMount={false}
                        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
                        // and set `measureBeforeMount={true}`.
                        useCSSTransforms={this.state.mounted}
                        compactType={this.state.compactType}
                        preventCollision={!this.state.compactType}
                    >
                        {this.generateDOM()}
                    </ResponsiveReactGridLayout>
                </div>
            </div>
        )
    }
}

export default LayoutGridPage