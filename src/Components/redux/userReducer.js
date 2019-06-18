import axios from 'axios'

const initialState = {
    firstname: '',
    lastname: '',
    product_name: '',
    id: null,
    studio: []
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const LOGIN_USER = 'LOGIN_USER'
const UPDATE_PRODUCT = 'UPDATE_PROCUCT'
const GET_PRODUCT = 'GET_PRODUCT'
const EDIT_USER='EDIT_USER'

export function login(user){
    console.log(user)
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function getProduct(){
    const getAmp = axios.get('/auth/studio').then(res => res.data.studio)
    return {
        type: GET_PRODUCT,
        payload: getAmp
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser(){
    return {
        type: CLEAR_USER
    }
}

export function updateProduct(studio){
    return {
        type: UPDATE_PRODUCT,
        payload: studio
    }
}

export function editUser(firstname) {
    return {
        type: EDIT_USER,
        payload: firstname
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case EDIT_USER:
            return {
                ...state,
                firstname: action.payload
            }
        case LOGIN_USER:
        return {...state, ...action.payload};

        case UPDATE_USER:
        const {user_id: id, firstname, product_name} = action.payload
        return {id, firstname, product_name}

        case CLEAR_USER:
        return {...initialState}

        case UPDATE_PRODUCT:
        console.log(action.payload)
        const {studio} = action.payload
        return {...state, studio}
        
        case GET_PRODUCT + '_FULFILLED':
        console.log(action.payload)
        return {...state, studio: action.payload}

        default:
        return state
    }
}

export default reducer