import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class RegisterForm extends Component {
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
        }
    }

    handleUserRegister = (e) => {
        e.preventDefault()
        const {firstname, lastname, email, password} = this.state
        axios.post('/auth/register', {firstname, lastname, email, password})
        .then((res) => {
            this.props.history.push('/home')
        }).catch((err) => {
            console.log(err)
        })
        e.target.firstname.value = ''
		e.target.lastname.value = ''
		e.target.email.value = ''
		e.target.password.value = ''
    }

    handleUserInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                 <form className='register_fields' 
                    onSubmit={this.handleUserRegister}>
                    <input 
                    type='text' 
                    placeholder='first name' 
                    name='firstname' 
                    onChange={this.handleLoginInfoUpdate}
                    />
                    <input 
                    type='text' 
                    placeholder='last name' 
                    name='lastname' 
                    onChange={this.handleLoginInfoUpdate}
                    />
                    <input 
                    type='text' 
                    placeholder='email' 
                    name='email' 
                    onChange={this.handleLoginInfoUpdate}
                    />
                    <input 
                    type='text' 
                    placeholder='password' 
                    name='password' 
                    onChange={this.handleLoginInfoUpdate}
                    />
                <button>Register</button>
                </form>
                
            </div>
        )
    }
}
export default withRouter(RegisterForm)
