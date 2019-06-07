import React, { Component } from 'react'
import './Pedal.css'

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

    render() {
        return (
            <div className='pedal_dropdown'>  
                <div className='pedal_card1' >
                    <div className='acapulco' onClick={this.showAcapulco}></div>
                    <div className='arrows' onClick={this.showArrows}></div>
                    <div className='nepenthes' onClick={this.showNepenthes}></div>
                    <div className='rat' onClick={this.showRat}></div>        
                 </div>
                    {this.state.acapulcoMenu ? <div className='aca_card'></div> : null}
                    {this.state.arrowsMenu ? <div className='aro_card'></div> : null}
                    {this.state.nepenthesMenu ? <div className='nep_card'></div> : null}
                    {this.state.ratMenu ? <div className='rat_card'></div> : null}

                    <div className='pedal_card2' >
                    <div className='dispatch' onClick={this.showDispatch}></div>
                    <div className='supermoon' onClick={this.showSuper}></div>
                    <div className='phase' onClick={this.showPhase}></div>
                    <div className='pyramid' onClick={this.showPyramid}></div>        
                 </div>
                    {this.state.dispatchMenu ? <div className='dis_card'></div> : null}
                    {this.state.superMenu ? <div className='sup_card'></div> : null}
                    {this.state.phaseMenu ? <div className='pha_card'></div> : null}
                    {this.state.pyramidMenu ? <div className='pyr_card'></div> : null}
            </div>
        )
    }
}

export default Pedal
