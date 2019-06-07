import React, { Component } from 'react'
import './Home.css'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import {Link} from 'react-router-dom'
import Amplifier from '../Amplifier/Amplifier';

class Home extends Component {
    render() {
        return (
           <div className='logo_container'>
                <div className='header'>
                    <div className='logo'></div>
                    <div className='logo_font'>In The Mix</div>
                    <Link to='/'>home</Link>
                    <Login/>
            </div>
            <div className='gear_container'>
            <Navbar/>
            </div>
           
            {/* <Amplifier/> */}

           </div>
        )
    }
}

export default Home
