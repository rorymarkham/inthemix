import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import { login } from '../redux/userReducer';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        axios.post('/auth/login', { email, password }).then((res) => {
            const {id, email, firstname, lastname} = res.data;
            this.props.login({id, email, firstname, lastname});
            this.props.history.push('/studio')
        }).catch((err) => {
            console.log(err)
        })
        e.target.email.value = ''
        e.target.password.value = ''
    }
    render() {
        console.log(this.props);
        return (
            <>
                <form className='login_fields' onSubmit={this.handleUserLogin}>
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={this.handleLoginInfoUpdate}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={this.handleLoginInfoUpdate}
                    />
                    <button>Submit</button>


                </form>
            </>
        )
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, {login})(LoginForm));