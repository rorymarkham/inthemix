import React, { Component } from 'react'
import './Home.css'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'

class Home extends Component {
    render() {
        return (
           <div className='logo_container'>
                <div className='header'>
                        <div className='logo'></div>
                        <Login/>
                </div>
                    <div className='gear_container'>
                        <Navbar/>
                    </div>
           </div>
        )
    }
}

export default Home
