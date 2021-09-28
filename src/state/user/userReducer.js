import {
    GET_USER_INFO,
    SIGN_OUT_USER,
    GET_FAVORITES,
    GET_FAV_INFO,
    CLEAR_FAV_INFO
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                username: action.payload.username,
                userId: action.payload.attributes.sub,
                authenticated: true
            };
        case GET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            };
        case GET_FAV_INFO:
            return {
                ...state,
                favInfo: action.payload
            };
        case CLEAR_FAV_INFO:
            return {
                ...state,
                favInfo: null
            };
        case SIGN_OUT_USER:
            return {
                ...state,
                username: null,
                userId: null,
                favorites: null,
                favInfo: null,
                errorStatus: null,
                authenticated: false
            }
        default:
            return state
    }
}