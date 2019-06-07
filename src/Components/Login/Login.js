import React, { Component } from 'react'
import axios from 'axios'
import {updateUser} from '../redux/userReducer'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import './Login.css'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            regMenu: false,
            menu: false,
        }
    }

    showLogin = () => {
        this.setState({
          menu: !this.state.menu
        })
      }

    showRegMenu = () => {
        this.setState({
            regMenu: !this.state.regMenu
        })
    }

    // componentDidMount(){
    //     axios.get('/auth/user').then((res) => {
    //         this.props.updateUser(res.data)
    //         this.props.history.push('/studio')
    //     })
    //     this.props.id && this.props.history.push('/studio')
    // }

    render() {
        return (
            <div className='login_container'>
                    <button className='log_btn' 
                    onClick={this.showLogin}>Login</button>
                    {this.state.menu ? <LoginForm/> 
                    : null}
                
                    
                <button className='register_container' 
                   onClick={this.showRegMenu}>Sign Up</button>
                   {this.state.regMenu ?  <RegisterForm/>
                   : null}

            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(
    mapStateToProps, 
    {updateUser}
    )(Login)
