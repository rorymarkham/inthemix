import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, clearUser, updateProduct, getProduct} from '../redux/userReducer'
import {Link} from 'react-router-dom'
import Home from '../Home/Home'
import './Studio.css'

class Studio extends Component {
    componentDidMount(){
        axios.get('/auth/studio').then((res) => {
            console.log(res.data.studio)
            this.props.updateProduct({studio: res.data.studio})
        }).catch((err) => {
            this.props.history.push('/login')
        })
        this.props.getProduct()
    }



    removeItem = (studio_id) => {
        axios.delete(`/api/studio/${studio_id}`).then((res) => {
            this.props.getProduct()
        })
    }

    handleUserLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearUser()
            this.props.history.push('/')
        })
    }

    render() {
            console.log(this.props.studio)
        const mappedProducts = this.props.studio.map((product, i)=> {
            return (
                <div key={i} >
                    <div className='product_container'>
                        <h4>{product.product_name}</h4>
                        <img src={product.product_img} height="70%" width="" alt="products yo"/>
                        <button className='remove_btn' onClick={() => this.removeItem(product.studio_id)}>Remove</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <Home/>
                {mappedProducts}
                <div>
                <button  className='logout_btn' onClick={this.handleUserLogout}>Logout</button>
                </div>               
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
    getProduct
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