import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        }
    }

    // handleUserLogin = (e) => {
    //     e.preventDefault()
    //     const {email, password} = this.state
    //     axios.post('/auth/login', {email, password}).then((res) => {

    //     })
    // }

    render() {
        return (
            <div>Login
                
            </div>
        )
    }
}

export default Login
