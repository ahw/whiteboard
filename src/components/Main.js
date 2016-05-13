require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'

// let yeomanImage = require('../images/yeoman.png')
// let [a, b] = [1, 2]

class AppComponent extends React.Component {

    render() {
        let {clientWidth, clientHeight} = document.documentElement
        let viewBox = `-${clientWidth/2} -${clientHeight/2} ${clientWidth} ${clientHeight}`

        return (
            <svg width={clientWidth} height={clientHeight} viewBox={viewBox}>
                <circle cx="0" cy="0" r="200" fill="black"/>
            </svg>
        )
    }
}

AppComponent.defaultProps = {
}

export default AppComponent
