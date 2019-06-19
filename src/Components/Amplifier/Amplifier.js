import React, { Component } from 'react'
import axios from 'axios'
import './Amplifier.css'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'
import {updateProduct} from '../redux/userReducer'

// images
import OrangeAmp from '../../Assets/Orange.png';
import FenderAmp from '../../Assets/Fender.png';
import MarshallAmp from '../../Assets/Marshall.png';
import SoldanoAmp from '../../Assets/Soldano.png'

//songs
import PsychSurf from '../../Songs/PsychSurf.m4a'
import Ender from '../../Songs/Enderfender.wav'
import Thrash from '../../Songs/Thrash.wav'
import ThrashMix from '../../Songs/ThrashMix.wav'
import Chugga from '../../Songs/Chugga.wav'
import ChuggaMix from '../../Songs/ChuggaMix.wav'
import Bitchin from '../../Songs/Bitchin.wav'
import BitchinMix from '../../Songs/BitchinMix.wav'
import BitchinSolo from '../../Songs/BitchinSolo.wav'
import BitchinMixSolo from '../../Songs/BitchinMixSolo.wav'
import Jazzy from '../../Songs/Jazzy.wav'
import JazzyMix from '../../Songs/JazzyMix.wav'
import PELDis from '../../Songs/PELDis.wav'
import PELMix from '../../Songs/PELMix.wav'




class Amplifier extends Component {
    constructor() {
        super()
        this.state = {
            main: false,
            orangeMenu: false,
            fenderMenu: false,
            hiwattMenu: false,
            marshallMenu: false
        }
    }

    showMain = () => {
        this.setState({
            main: !this.state.main,
            orangeMenu: false,
            fenderMenu: false,
            hiwattMenu: false,
            marshallMenu: false,
        })
    }

    showOrange = () => {
        this.setState({
            main: false,
            orangeMenu: !this.state.orangeMenu,
            fenderMenu: false,
            hiwattMenu: false,
            marshallMenu: false,
        })
    }

    showFender = () => {
        this.setState({
            main: false,
            fenderMenu: !this.state.fenderMenu,
            hiwattMenu: false,
            marshallMenu: false,
            orangeMenu: false,
        })
    }

    showHiwatt = () => {
        this.setState({
            main: false,
            hiwattMenu: !this.state.hiwattMenu,
            marshallMenu: false,
            orangeMenu: false,
            fenderMenu: false,
        })
    }

    showMarshall = () => {
        this.setState({
            main: false,
            marshallMenu: !this.state.marshallMenu,
            orangeMenu: false,
            fenderMenu: false,
            hiwattMenu: false,
        })
    }

    addToStudio = async (ampName, ampImage) => {
        console.log('htot')
        const body = {
            ampImage,
            ampName
        };
        await axios.post(`/api/studio/${this.props.id}`, body)
            .then(res => {
                console.log(res.data)
                axios.get('/auth/studio').then((res) => {
                    console.log(res.data.studio)
                    this.props.updateProduct({studio: res.data.studio})
                })
            })
    }

    render() {
        console.log(this.props)
        return (
            <div className='amp_dropdown'>
                <div className='amp_card' >
                    <div className='orange_rockerverb' onClick={this.showOrange}></div>
                    <div className='fender_bassman' onClick={this.showFender}></div>
                    <div className='hiwatt' onClick={this.showHiwatt}></div>
                    <div className='marshall_plexi' onClick={this.showMarshall}></div>
                </div>
                    <div className='main' onClick={this.main}>
                    </div>
                {this.state.orangeMenu ? <div className='ora_card'>
                    <div className="amp-text">
                    <div className='orange_logo'>
                    <div className='ora_big'></div>
                    <button className='ora_add_button' onClick={() => this.addToStudio('Orange Rockerverb', OrangeAmp)}>Add to Studio</button>
                    </div>
                    <h1>Orange Rockerverb MKIII</h1>
                    <p>TWIN CHANNEL CLASS A/B GUITAR AMP HEAD, FOOTSWITCHABLE VALVE DRIVEN REVERB, VALVE BUFFERED EFFECTS LOOP, FOOTSWITCHABLE ATTENUATOR & SELECTABLE OUTPUT WATTAGE.</p>
                    <div className='ora_dirt'>
                        <div className='ora_dirt_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">Gibson Les Paul Traditional</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">None</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Ludwig</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ora_dirt_container'>
                        <h4>Bitchin</h4>
                        <ReactAudioPlayer 
                        src={Bitchin}
                        controls/>
                        <h4>Bitchin Mix</h4>
                        <ReactAudioPlayer 
                        src={BitchinMix}
                        controls/>
                    </div>
                    <p>The Clean Channel delivers a super rich clean tone with beautiful harmonic overtones. It is a non-master channel, much like vintage Orange amps, and when cranked the power section breaks up faster, delivering the most classic British crunch imaginable. </p>
                    <div className='ora_clean'>
                    <div className='ora_clean_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">Fender Stratocaster</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">EQD Dispatch Master</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Ludwig</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ora_dirt_container'>
                        <h4>Clean</h4>
                        <ReactAudioPlayer 
                        src={PELDis}
                        controls/>
                        <h4>Clean Mix</h4>
                        <ReactAudioPlayer 
                        src={PELMix}
                        controls/>
                    </div>
                        </div>
                        
                </div> : null}

                {this.state.fenderMenu ? <div className='fen_card'>
                    <div className="amp-text">
                    <div className='fender_logo'>
                    <div className='fen_big'>
                    </div>
                    <button className='fen_add_button' onClick={() => this.addToStudio('fender bassman', FenderAmp)}>Add to Studio</button>
                    </div>
                    <h1>Fender Super Bassman</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis, ante lectus egestas dolor, et congue tellus nunc semper quam. In sagittis ut diam a fermentum. </p>
                    <div className='fen_jazz'>
                    <div className='fen_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">Fender Stratocaster</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">EQD Dispatch Master</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Ludwig</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='psych_container'>
                        <h4>Jazzy</h4>
                        <ReactAudioPlayer 
                        src={Jazzy}
                        controls/>
                        <h4>JazzyMix</h4>
                        <ReactAudioPlayer 
                        src={JazzyMix}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat. Sed vulputate nulla non dolor gravida eleifend. Aliquam congue, sem a pretium lobortis.</p>
                    <div className='fen_jazz'></div>
                    <div className='ender_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={Ender}
                        controls/>
                    </div>
                        </div>
                    
                        
                </div> : null}

                {this.state.hiwattMenu ? <div className='hi_card'>
                    <div className="amp-text">
                    <div className='hiwatt_logo'>
                    <div className='sol_big'>
                    </div>
                    <button className='sol_add_button' onClick={() => this.addToStudio('soldano SLO 100', SoldanoAmp)}>Add to Studio</button>
                    </div>
                    <h1>Soldano SLO 100</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='sold_crunch'>
                    <div className='sol_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">Peavey Rotor EXP</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">None</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Mapex</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='psych_container'>
                        <h4>Chugga</h4>
                        <ReactAudioPlayer 
                        src={Chugga}
                        controls/>
                        <h4>Chugga Mix</h4>
                        <ReactAudioPlayer 
                        src={ChuggaMix}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='sold_crunch'>
                    <div className='sol_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">Peavey Rotor EXP</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">None</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Mapex</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ender_container'>
                        <h4>Thrasher</h4>
                        <ReactAudioPlayer 
                        src={Thrash}
                        controls/>
                        <h4>Thrasher Mix</h4>
                        <ReactAudioPlayer 
                        src={ThrashMix}
                        controls/>
                    </div>
                    </div>
                </div> : null}
                {this.state.marshallMenu ? <div className='mar_card'>
                <div className="amp-text">
                    <div className='marshall_logo'>
                    <div className='mar_big'></div>
                    <button className='mar_add_button' onClick={() => this.addToStudio('marshall plexi', MarshallAmp)}>Add to Studio</button>
                    </div>
                    <h1>Marshall Plexi 100</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='mar_solo'></div>
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer 
                        // src={}
                        controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        src={PsychSurf}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='mar_solo'>
                    <div className='mar_gear'><h5>GEAR USED:</h5>
                            <div className='ora_dirt_guitar'>
                                <div class="dirt_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_dropdown-content">
                                        <a href="#">PureSalem Bruiser</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_pedal'>
                            <div class="dirt_pedal_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_pedal_dropdown-content">
                                        <a href="#">Cry Baby Mini Wah</a>
                                    </div>
                                </div>
                            </div>
                            <div className='ora_dirt_drum'>
                            <div class="dirt_drum_dropdown">
                                    <button class="dropbtn"></button>
                                        <div class="dirt_drum_dropdown-content">
                                        <a href="#">Mapex</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ender_container'>
                        <h4>Solo</h4>
                        <ReactAudioPlayer 
                        src={BitchinSolo}
                        controls/>
                        <h4>Solo Mix</h4>
                        <ReactAudioPlayer 
                        src={BitchinMixSolo}
                        controls/>
                    </div>
                    </div>
                </div> : null}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {updateProduct})(Amplifier));
