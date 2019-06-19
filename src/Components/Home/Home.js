import React, { Component } from 'react'
import './Home.css'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import Carousel from "../../Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//images


class Home extends Component {
    render() {
        return (
           <div className='logo_container'>
                <div className='header'>
                        <div className='logo'></div>
                        <div className='img1'></div>
                        <div className='img2'></div>
                        <div className='img3'></div>
                        <div className='img4'></div>
                        <div className='img5'></div>
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
