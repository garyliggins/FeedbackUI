import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' //importing global style sheet
import App from './App' //you have to import every component you use

// ReactDOM.render(<h1>My App</h1>,document.getElementById('root'))
// this is a example of rendering React, the H1 tag is what you want displayed, the "root" is where you want it displayed, and "root" is in the public index.html file which renders the whole app, so now whatever is in the h1 tag will be displayed on the browser

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    ,document.getElementById('root')

)
//this is taking the app component and placing it in the root div to be displayed in the browser, now every component displayed in the app component will be displayed in the browser