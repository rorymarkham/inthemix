import React, { Component } from 'react'
import axios from 'axios'
import './Amplifier.css'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'

// images
import OrangeAmp from '../../Assets/Orange.png';
import HiwattAmp from '../../Assets/Hiwatt.png';
import FenderAmp from '../../Assets/Fender.png';
import MarshallAmp from '../../Assets/Marshall.png';

//songs
import PsychSurf from '../../Songs/PsychSurf.m4a'
import Ender from '../../Songs/Enderfender.wav'

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
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={PsychSurf}
                        controls/>
                    </div>
                    <div className='ender_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={Ender}
                        controls/>
                    </div>
                        <button onClick={() => this.addToStudio('orange rockerverb', OrangeAmp)}>Add to Studio</button>
                </div> : null}

                {this.state.fenderMenu ? <div className='fen_card'>
                    <div className='fender_logo'></div>
                    <div className="amp-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis, ante lectus egestas dolor, et congue tellus nunc semper quam. In sagittis ut diam a fermentum. Vestibulum pharetra dolor eget nunc egestas, eu pharetra felis luctus. Nunc ut ligula vel justo pellentesque ultricies. Quisque accumsan varius odio a iaculis. Vestibulum congue augue dolor, vel dapibus sapien dapibus venenatis. Duis mauris nisi, porttitor congue nisi et, tempus varius ante. Fusce sit amet pretium elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis, ante lectus egestas dolor, et congue tellus nunc semper quam. In sagittis ut diam a fermentum. Vestibulum pharetra dolor eget nunc egestas, eu pharetra felis luctus. Nunc ut ligula vel justo pellentesque ultricies. Quisque accumsan varius odio a iaculis. Vestibulum congue augue dolor, vel dapibus sapien dapibus venenatis. Duis mauris nisi, porttitor congue nisi et, tempus varius ante. Fusce sit amet pretium elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis, ante lectus egestas dolor, et congue tellus nunc semper quam. In sagittis ut diam a fermentum. Vestibulum pharetra dolor eget nunc egestas, eu pharetra felis luctus. Nunc ut ligula vel justo pellentesque ultricies. Quisque accumsan varius odio a iaculis. Vestibulum congue augue dolor, vel dapibus sapien dapibus venenatis. Duis mauris nisi, porttitor congue nisi et, tempus varius ante. Fusce sit amet pretium elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis, ante lectus egestas dolor, et congue tellus nunc semper quam. In sagittis ut diam a fermentum. Vestibulum pharetra dolor eget nunc egestas, eu pharetra felis luctus. Nunc ut ligula vel justo pellentesque ultricies. Quisque accumsan varius odio a iaculis. Vestibulum congue augue dolor, vel dapibus sapien dapibus venenatis. Duis mauris nisi, porttitor congue nisi et, tempus varius ante. Fusce sit amet pretium elit.</p>
                    </div>
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={PsychSurf}
                        controls/>
                    </div>
                    <div className='ender_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={Ender}
                        controls/>
                    </div>
                    
                        <button onClick={() => this.addToStudio('fender bassman', FenderAmp)}>Add to Studio</button>
                </div> : null}

                {this.state.hiwattMenu ? <div className='hi_card'>
                    <div className='hiwatt_logo'></div>
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={PsychSurf}
                        controls/>
                    </div>
                    <div className='ender_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={Ender}
                        controls/>
                    </div>
                        <button onClick={() => this.addToStudio('hiwatt dr103', HiwattAmp)}>Add to Studio</button>
                </div> : null}
                {this.state.marshallMenu ? <div className='mar_card'>
                    <div className='marshall_logo'></div>
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={PsychSurf}
                        controls/>
                    </div>
                    <div className='ender_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={Ender}
                        controls/>
                    </div>
                        <button onClick={() => this.addToStudio('marshall plexi', MarshallAmp)}>Add to Studio</button>
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps)(Amplifier));
