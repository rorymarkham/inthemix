import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Amplifier from './Components/Amplifier'
import Pedal from './Components/Pedal'
import Studio from './Components/Studio'

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