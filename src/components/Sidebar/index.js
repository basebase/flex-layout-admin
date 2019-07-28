/**
 * Created by Joker on 19/7/28.
 */
import React from 'react'
import './index.css'

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar-wrapper">
                <div className="logo">
                    <h1>Admin</h1>
                </div>

                <div className="sidebar-menu">
                    <div>
                        <a href="#">G1</a>
                        <a href="#">G2</a>
                        <a href="#">G3</a>
                        <a href="#">G4</a>
                        <a href="#">G5</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar