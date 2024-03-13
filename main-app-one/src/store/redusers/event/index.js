export const InitialState = {
    events: [],
    guests: []
}

export const Set_Guests = "Set_Guests"
export const Set_Events = "Set_Events"

export function EventReducer(state = InitialState, action) {
    switch(action.type) {
        case Set_Guests:
            return{...state, guests: action.payload}
        case Set_Events:
            return{...state, events: action.payload}
        default:
            return state
    }
}