import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser, clearUser, updateProduct, getProduct, editUser} from '../redux/userReducer'
import {Link} from 'react-router-dom'
import Home from '../Home/Home'
import './Studio.css'
import Login from '../Login/Login'

class Studio extends Component {
    constructor(){
        super()
        this.state = {
            edit: false
        }
    }

    componentDidMount(){
        axios.get('/auth/studio').then((res) => {
            console.log(res.data.studio)
            this.props.updateProduct({studio: res.data.studio})
        }).catch((err) => {
            this.props.history.push('/login')
        })
        this.props.getProduct()
    }

    toggleEdit = () => {
        let newEdit = !this.state.edit
        this.setState({edit: newEdit})
    }

    saveChanges = () => {
        axios.post('/auth/update', {firstname: this.props.firstname})
        .then(res => {
            this.toggleEdit()
        })
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
            console.log(this.props)
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
                {!this.state.edit?
                <div className='welcome'>
                    <h1>{this.props.firstname}'s Studio
                    <button className='edit_btn' onClick={this.toggleEdit}>Edit</button>
                    </h1>
                </div>
                :
                <form onSubmit={e => e.preventDefault()}>
                    <input type='text' value={this.props.firstname} onChange={e => this.props.editUser(e.target.value)} />
                    <button onClick={this.saveChanges}>Save Changes</button>
                </form>
                }
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
    getProduct,
    editUser
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