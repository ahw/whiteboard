require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'
import { createStore } from 'redux'
import * as actions from '../actions/actions.js'
import appReducer from '../reducers/reducer'
let store = createStore(appReducer)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(actions.updateCanvasSize(100, 100))
store.dispatch(actions.updateCanvasSize(200, 200))

class AppComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        // The viewbox string. Format: "x_origin, y_origin, width, height"
        let viewBox = `-${this.props.clientWidth/2} -${this.props.clientHeight/2} ${this.props.clientWidth} ${this.props.clientHeight}`

        return (
            <svg width={this.props.clientWidth} height={this.props.clientHeight} viewBox={viewBox}>
                <circle cx="0" cy="0" r="200" fill="black"/>
            </svg>
        )
    }
}

// TODO: Remove this when redux store set up
AppComponent.defaultProps = {
    clientWidth: document.documentElement.clientWidth,
    clientHeight: document.documentElement.clientHeight
}

export default AppComponent
