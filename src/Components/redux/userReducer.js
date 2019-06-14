
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
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export function login(user){
    console.log(user)
    return {
        type: LOGIN_USER,
        payload: user
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

export function deleteProduct(id){
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}

function reducer(state = initialState, action){
    switch(action.type){
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

        case REMOVE_PRODUCT:
        return state.filter(({ id }) => id !== action.data)
        
        default:
        return state
    }
}

export default reducer