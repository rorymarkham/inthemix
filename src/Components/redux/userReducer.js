const initialState = {
    firstname: '',
    lastname: '',
    product_name: '',
    id: null
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'
const LOGIN_USER = 'LOGIN_USER'

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

function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, ...action.payload};
        case UPDATE_USER:
        const {user_id: id, firstname, product_name} = action.payload
        return {id, firstname, product_name}
        case CLEAR_USER:
        return {...initialState}
        default:
        return state
    }
}

export default reducer