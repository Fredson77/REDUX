import { ADD_USER_LIKE, GET_USER } from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
    //SWITCH
    switch( action.type ) {
        case GET_USER:
            return action.payload;
        // case ADD_USER_LIKE:
        //     return state.map((user) => {
        //         if (user.id === action.payload.id) {
        //             return {
        //                 ...user,
        //                 likes: action.payload.likes,
        //             }
        //         } else return user;
        //     })
        case ADD_USER_LIKE:
            return {
                ...state,
                likes: action.payload.likes,
            }
        default:
            return state;
    }
}