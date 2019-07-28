/**
 * Created by Joker on 19/7/28.
 */
import React from 'react'
import './index.css'

class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="header">
                <a href="#" className="user-info">小墨鱼1</a>
                <a href="#" className="user-info">小墨鱼2</a>
                <a href="#" className="user-info">小墨鱼3</a>
            </div>
        )
    }
}

export default Header