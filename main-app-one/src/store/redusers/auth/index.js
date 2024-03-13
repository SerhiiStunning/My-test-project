// State
export const initialState = {
    isAuth: false,
    error: '',
    isLoading: false,
    user: {}
}

export const Set_Auth = 'Set_Auth'
export const Set_User = 'Set_User'
export const Set_Error = 'Set_Error'
export const Set_Is_Loading = 'Set_Is_Loading'

// Reducer
export function authReducer(state = initialState, action) {
    switch(action.type) {
        case Set_Auth:
            return {...state, isAuth: action.payload, isLoading: false}
        case Set_User:
            return {...state, user: action.payload}
        case Set_Error:
            return {...state, error: action.payload, isLoading: false}
        case Set_Is_Loading:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}