import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Amplifier from './Components/Amplifier/Amplifier'
import Pedal from './Components/Pedal/Pedal'
import Studio from './Components/Studio/Studio'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/navbar' component={Navbar} />
        <Route path='/amplifier' component={Amplifier} />
        <Route path='/pedal' component={Pedal} />
        <Route path='/studio' component={Studio} />
    </Switch>
)