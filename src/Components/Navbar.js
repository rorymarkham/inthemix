import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>In The Mix</Link>
            <Link to='/login'>Login</Link>
            <Link to='/pedal'>Pedals</Link>
            <Link to='/amplifier'>Amplifier</Link>
            <Link to='/studio'>Studio</Link>
        </nav>
    )
}

export default Navbar
