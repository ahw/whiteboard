import { combineReducers } from 'redux'
import * as actions from '../actions/actions.js'

const initialstate = {
    canvas: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    }
}

function canvas(state = {}, action) {
    if (action.type === actions.UPDATE_CANVAS_SIZE) {
        return Object.assign({}, state.canvas, {
            width: action.width || state.width,
            height: action.height || state.height
        })
    }

    return state
}

// function app(state, action) {
//     if (typeof state === 'undefined') {
//         return initialstate
//     }

//     return {
//         canvas: canvas(state, action)
//     }
// }

const appReducer = combineReducers({
    canvas
})

export default appReducer
