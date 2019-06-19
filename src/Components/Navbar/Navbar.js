import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Amplifier from '../Amplifier/Amplifier';
import Pedal from '../Pedal/Pedal'
import Home from '../Home/Home'
// import Carousel from "../../Carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            pedMenu: false,
            ampMenu: false,
            // homeMenu: false
        }
    }

    showPedMenu = () => {
        this.setState({
            pedMenu: !this.state.pedMenu,
            ampMenu: false,
            // homeMenu: false
        })
    }

    showAmpMenu = () => {
        this.setState({
            ampMenu: !this.state.ampMenu,
            pedMenu: false,
            // homeMenu: false
        })
    }

    // showHomeMenu = () => {
    //     this.setState({
    //         ampMenu: false,
    //         pedMenu: false,
    //         homeMenu: !this.state.homeMenu
    //     })
    // }

    render() {
        return (
            <div>
                <div className='nav_container'>
                    <div>

                    <Link className="home_link" to='/'>Home</Link>
                    {/* <button className='home_link' 
                    onClick={this.showHomeMenu}>Home</button> */}
                    <button className='pedal_list' 
                    onClick={this.showPedMenu}>Pedals</button>
                    <button className='amp_list' 
                    onClick={this.showAmpMenu}>Amps</button>

                    <Link className="studio_link" to='/studio'>Studio </Link>
                    </div>
                    
                    <div>
                    {/* {this.state.homeMenu ? <Home/> : null}     */}
                    {this.state.pedMenu ? <Pedal/> : null}
                    {this.state.ampMenu ? <Amplifier/> : null}
                    </div>
                </div>
                {/* <div className='caro_container'>
                    <Carousel/>
                </div> */}
            </div>
        )
    }
}

export default Navbar

