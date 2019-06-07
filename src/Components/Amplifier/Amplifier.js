import React, { Component } from 'react'
import axios from 'axios'
import './Amplifier.css'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// images
import OrangeAmp from '../../Assets/Orange.png';
import HiwattAmp from '../../Assets/Hiwatt.png';
import FenderAmp from '../../Assets/Fender.png';
import MarshallAmp from '../../Assets/Marshall.png';

class Amplifier extends Component {
    constructor() {
        super()
        this.state = {
            orangeMenu: false,
            fenderMenu: false,
            hiwattMenu: false,
            marshallMenu: false
        }
    }

    showOrange = () => {
        this.setState({
            orangeMenu: !this.state.orangeMenu,
            fenderMenu: false,
            hiwattMenu: false,
            marshallMenu: false
        })
    }

    showFender = () => {
        this.setState({
            fenderMenu: !this.state.fenderMenu,
            hiwattMenu: false,
            marshallMenu: false,
            orangeMenu: false,
        })
    }

    showHiwatt = () => {
        this.setState({
            hiwattMenu: !this.state.hiwattMenu,
            marshallMenu: false,
            orangeMenu: false,
            fenderMenu: false
        })
    }

    showMarshall = () => {
        this.setState({
            marshallMenu: !this.state.marshallMenu,
            orangeMenu: false,
            fenderMenu: false,
            hiwattMenu: false
        })
    }

    addToStudio = (ampName, ampImage) => {
        const body = {
            ampImage,
            ampName
        };
        axios.post(`/api/studio/${this.props.id}`, body)
            .then(res => {
                this.props.history.push('/studio')
            })
    }

    render() {
        return (
            <div className='amp_dropdown'>
                <div className='amp_card' >
                    <div className='orange_rockerverb' onClick={this.showOrange}></div>
                    <div className='fender_bassman' onClick={this.showFender}></div>
                    <div className='hiwatt' onClick={this.showHiwatt}></div>
                    <div className='marshall_plexi' onClick={this.showMarshall}></div>
                </div>
                {this.state.orangeMenu ? <div className='ora_card'>
                    <div className='orange_logo'></div>
                        <button onClick={() => this.addToStudio('orange rockerverb', OrangeAmp)}>Add to Studio</button>
                </div> : null}

                {this.state.fenderMenu ? <div className='fen_card'>
                    <div className='fender_logo'></div>
                        <button onClick={() => this.addToStudio('fender bassman', FenderAmp)}>Add to Studio</button>
                </div> : null}
                {this.state.hiwattMenu ? <div className='hi_card'>
                    <div className='hiwatt_logo'></div>
                        <button onClick={() => this.addToStudio('hiwatt dr103', HiwattAmp)}>Add to Studio</button>
                </div> : null}
                {this.state.marshallMenu ? <div className='mar_card'>
                    <div className='marshall_logo'></div>
                        <button onClick={() => this.addToStudio('marshall plexi', MarshallAmp)}>Add to Studio</button>
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Amplifier));
