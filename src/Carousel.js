import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ACG from './Assets/AGCaro.png'
import ARO from './Assets/AROCaro.png'
import DM from './Assets/DMCaro.png'
import PYR from './Assets/PYRCaro.png'
import OR from './Assets/ORACaro.png'
import NEP from './Assets/NEPCaro.png'
import SOL from './Assets/SOLCaro.png'
import './Carousel.css'
 
export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop> 
               <div>
              <img src={ACG} alt='yo' />
              <p className="legend">Acapulco Gold</p>
            </div>
            <div className='size'>
              <img src={OR} alt='yo' />
              <p className="legend">Rockerverb</p>
            </div>
            <div>
              <img src={DM} alt='ya'/>
              <p className="legend">Dispatch</p>
            </div>
            <div>
              <img src={PYR} alt='ya'/>
              <p className="legend">Pyramid</p>
            </div>
            <div className='size'>
              <img src={SOL} alt='ya'/>
              <p className="legend">Soldano</p>
            </div>
            <div>
              <img src={ARO} alt='ya' />
              <p className="legend">Arrows</p>
            </div>
            <div className='size'>
              <img src={NEP} alt='ya' />
              <p className="legend">Nepenthes</p>
            </div>
            
            </Carousel>
        );
    }
};