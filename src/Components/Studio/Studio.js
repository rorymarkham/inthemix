import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, clearUser} from '../redux/userReducer'
import {Link} from 'react-router-dom'

class Studio extends Component {
    constructor(){
        super()

        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('/auth/studio').then((res) => {
            this.props.updateUser(res.data)
            this.setState({
                products: res.data.studio
            });
        }).catch((err) => {
            this.props.history.push('/login')
        })
    }

    handleUserLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearUser()
            this.props.history.push('/')
        })
    }

    render() {

        const mappedProducts = this.state.products.map(product => {
            return (
                <div>
                    <h1>{product.product_name}</h1>
                    <img src={product.product_img} alt="products yo"/>
                </div>
            )
        })

        console.log(this.state.products)
        return (
            <div>
                <h1>Studio</h1>
                <Link to='/'>Home</Link>
                <button onClick={this.handleUserLogout}>Logout</button>
                {mappedProducts}
                
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}

const mapDispatchToProps = {
    updateUser,
    clearUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Studio)