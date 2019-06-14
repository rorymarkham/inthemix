import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, clearUser, updateProduct, removeProduct} from '../redux/userReducer'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

class Studio extends Component {
    componentDidMount(){
        axios.get('/auth/studio').then((res) => {
            console.log(res.data.studio)
            this.props.updateProduct({studio: res.data.studio})
        }).catch((err) => {
            this.props.history.push('/login')
        })
    }

    // removeItem = () => {
    //     axios.
    // }

    handleUserLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearUser()
            this.props.history.push('/')
        })
    }

    render() {
            console.log(this.props)
        const mappedProducts = this.props.studio.map(product => {
            return (
                <div>
                    <div className='product_container'>
                        <h4>{product.product_name}</h4>
                        <img src={product.product_img} height="100%" width="235" alt="products yo"/>
                        <button onClick={() => this.removeItem}>Remove From Studio</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <h1>Studio</h1>
                <Navbar/>
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
    clearUser,
    updateProduct, 
    removeProduct
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Studio)



// removeGuitar(id){
//     axios
//     .delete(`/api/deleteGuitar/${id}`).then((res) => {
//       this.setState({products: res.data})
//       toast.error('☠️Scrap Wood☠️')
//     })
//     .catch(error => {toast.error ('You Suck')})
//   }

{/* <button className='btn_remove' 
onClick={ () => this.removeGuitar(event.id)}>Remove</button> */}