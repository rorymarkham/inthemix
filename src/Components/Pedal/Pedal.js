import React, { Component } from 'react'
import axios from 'axios'
import './Pedal.css'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player'
import {updateProduct} from '../redux/userReducer'

//images
import AcaPedal from '../../Assets/AcapulcoGold.png'
import AroPedal from '../../Assets/Arrows.png'
import NepPedal from '../../Assets/Nepenthes.png'
import DisPedal from '../../Assets/DispatchMaster.png'
import PyramidPedal from '../../Assets/Pyramids.png'

//songs
import PsychSurf from '../../Songs/PsychSurf.m4a'
import Ender from '../../Songs/Enderfender.wav'
import ACADoom from '../../Songs/ACADoom.wav'
import NEPDoom from '../../Songs/NEPDoom.wav'
import NEPRock from '../../Songs/NEPRock.wav'
import NoUse from '../../Songs/NoUseDoom.wav'
import ARORock from '../../Songs/ARORock.wav'
import AROMix from '../../Songs/AROMix.wav'
import RATRock from '../../Songs/RATRock.wav'
import Sleeping from '../../Songs/SleepingDMix.wav'
import PELDis from '../../Songs/PELDis.wav'
import PELMix from '../../Songs/PELMix.wav'
import PELBoth from '../../Songs/PELBoth.wav'
import PELMixSolo from '../../Songs/PELMixSolo.wav'
import BitchinSolo from '../../Songs/BitchinSolo.wav'
import BitchinMixSolo from '../../Songs/BitchinMixSolo.wav'


class Pedal extends Component {
    constructor(){
        super()
        this.state = {
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        }
    }

    showAcapulco = () => {
        this.setState({
            acapulcoMenu: !this.state.acapulcoMenu,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showArrows = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: !this.state.arrowsMenu,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showNepenthes = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: !this.state.nepenthesMenu,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showRat = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: !this.state.ratMenu,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showDispatch = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: !this.state.dispatchMenu,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showSuper = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: !this.state.superMenu,
            phaseMenu: false,
            pyramidMenu: false
        })
    }

    showPhase = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: !this.state.phaseMenu,
            pyramidMenu: false
        })
    }

    showPyramid = () => {
        this.setState({
            acapulcoMenu: false,
            arrowsMenu: false,
            nepenthesMenu: false,
            ratMenu: false,
            dispatchMenu: false,
            superMenu: false,
            phaseMenu: false,
            pyramidMenu: !this.state.pyramidMenu
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
        return (
            <div className='pedal_dropdown'>  
                <div className='pedal_card1' > 
                    <div className='acapulco' onClick={this.showAcapulco}></div>
                    <div className='arrows' onClick={this.showArrows}></div>
                    <div className='nepenthes' onClick={this.showNepenthes}></div>
                    <div className='rat' onClick={this.showRat}></div>        
                 </div>
                    {this.state.acapulcoMenu ? <div className='aca_card'>
                    <div className="amp-text">
                    <div className='eqd_logo'>
                    <div className='aca_big'>
                    <button onClick={() => this.addToStudio('Acapulco Gold', AcaPedal)}>Add to Studio</button>
                    </div>
                    </div>
                    <h1>Acapulco Gold</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='aca_doom'></div>
                    <div className='psych_container'>
                        <h4>Doom</h4>
                        <ReactAudioPlayer 
                        src={ACADoom}
                        controls/>
                        <h4>Doom Mix</h4>
                        <ReactAudioPlayer 
                        src={NoUse}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='aca_rock'></div>
                    <div className='ender_container'>
                    <h4>Doom N Roll</h4>
                        <ReactAudioPlayer 
                        src={NEPRock}
                        controls/>
                        <h4>Doom N Roll Mix</h4>
                        <ReactAudioPlayer 
                        src={Sleeping}
                        controls/>
                    </div>
                    </div>
                    </div> : null}
                    {this.state.arrowsMenu ? <div className='aro_card'>
                    <div className="amp-text">
                    <div className='eqd_logo'>
                    <div className='aro_big'>
                    <button onClick={() => this.addToStudio('Arrows', AroPedal)}>Add to Studio</button>
                    </div>
                    </div>
                    <h1>Arrows</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='aro_rock'></div>
                    <div className='psych_container'>
                        <h4>Rocker</h4>
                        <ReactAudioPlayer 
                        src={ARORock}
                        controls/>
                        <h4>Rocker Mix</h4>
                        <ReactAudioPlayer 
                        src={AROMix}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='aro_solo'></div>
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
                    {this.state.nepenthesMenu ? <div className='nep_card'>
                    <div className="amp-text">
                    <div className='electro_logo'>
                    <div className='nep_big'>
                    <button onClick={() => this.addToStudio('Nepenthes', NepPedal)}>Add to Studio</button>
                    </div>
                    </div>
                    <h1>Nepenthes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='nep_doom'></div>
                    <div className='psych_container'>
                        <h4>Doom</h4>
                        <ReactAudioPlayer 
                        src={NEPDoom}
                        controls/>
                        <h4>Doom Mix</h4>
                        <ReactAudioPlayer 
                        src={NoUse}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='nep_rock'></div>
                    <div className='ender_container'>
                    <h4>Doom N Roll</h4>
                        <ReactAudioPlayer 
                        src={RATRock}
                        controls/>
                        <h4>Doom N Roll Mix</h4>
                        <ReactAudioPlayer 
                        src={Sleeping}
                        controls/>
                    </div>
                    </div>
                    </div> : null}
                    {this.state.ratMenu ? <div className='rat_card'>
                    <div className='proco_logo'></div>
                    <div className='psych_container'>
                        <h4>Iso Track</h4>
                        <ReactAudioPlayer 
                        // src={RATRock}
                        controls/>
                        <h4>In the mix</h4>
                        <ReactAudioPlayer 
                        // src={Sleeping}
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
                    </div> : null}

                    <div className='pedal_card2' > 
                    <div className='dispatch' onClick={this.showDispatch}></div>
                    <div className='supermoon' onClick={this.showSuper}></div>
                    <div className='phase' onClick={this.showPhase}></div>
                    <div className='pyramid' onClick={this.showPyramid}></div>        
                 </div>
                    {this.state.dispatchMenu ? <div className='dis_card'>
                    <div className="amp-text">
                    <div className='eqd_logo'>
                    <div className='dis_big'>
                    <button onClick={() => this.addToStudio('Dispatch Master', DisPedal)}>Add to Studio</button>
                    </div>
                    </div>
                    <h1>Dispatch Master</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='dis_clean'></div>
                    <div className='psych_container'>
                    <h4>Clean</h4>
                        <ReactAudioPlayer 
                        src={PELDis}
                        controls/>
                        <h4>Clean Mix</h4>
                        <ReactAudioPlayer 
                        src={PELMix}
                        controls/>
                    </div>
                    <div className='dis_verb'></div>
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
                    {this.state.superMenu ? <div className='sup_card'>
                    <div className='mrblack_logo'></div>
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
                    </div> : null}
                    {this.state.phaseMenu ? <div className='pha_card'>
                    <div className='mxr_logo'></div>
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
                    </div> : null}
                    {this.state.pyramidMenu ? <div className='pyr_card'>
                    <div className="amp-text">
                    <div className='eqd_logo'>
                    <div className='pyr_big'>
                    <button onClick={() => this.addToStudio('pyramid', PyramidPedal)}>Add to Studio</button>
                    </div>
                    </div>
                    <h1>Pyramids</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='pyr_chime'></div>
                    <div className='psych_container'>
                        <h4>Chimey Cleans</h4>
                        <ReactAudioPlayer 
                        src={PELBoth}
                        controls/>
                        <h4>Chimey Solo Mix</h4>
                        <ReactAudioPlayer 
                        src={PELMixSolo}
                        controls/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate vel nisi in eleifend. Etiam lorem libero, blandit in magna eget, hendrerit suscipit erat.</p>
                    <div className='pyr_echo'></div>
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
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {updateProduct})(Pedal));
