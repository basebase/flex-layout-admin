/**
 * Created by Joker on 19/7/28.
 */

import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/home/'
import LayoutGridPage from './pages/grid-layout'
import './layout.css'

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
                <div>
                    <Sidebar/>
                </div>
                <div className="main">
                    <Header/>
                    <div className="content">
                        <LayoutGridPage />
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Layout