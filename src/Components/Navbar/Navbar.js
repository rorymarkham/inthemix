import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Amplifier from '../Amplifier/Amplifier';
import Pedal from '../Pedal/Pedal'

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            pedMenu: false,
            ampMenu: false
        }
    }

    showPedMenu = () => {
        this.setState({
            pedMenu: !this.state.pedMenu,
            ampMenu: false
        })
    }

    showAmpMenu = () => {
        this.setState({
            ampMenu: !this.state.ampMenu,
            pedMenu: false
        })
    }

    render() {
        return (
            <div>
                <div className='nav_container'>
                    <div>
                    <button className='pedal_list' 
                    onClick={this.showPedMenu}>Pedals</button>
                    <button className='amp_list' 
                    onClick={this.showAmpMenu}>Amps</button>

                    <Link className="link" to='/studio'>Studio </Link>
                    </div>
                    
                    <div>
                    {this.state.pedMenu ? <Pedal/> : null}
                    {this.state.ampMenu ? <Amplifier/> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

