import React from 'react'
//rfce is the short cut to create a functional component

import Proptypes from 'prop-types' //this is the import to define the data type of your props, this is not needed but it helps keep your code bug free 

function Header({text}) /*destructuring props and passing it in from the app component */
 {
    return (
        <header>
            <div className='container'>
            <h1>{text}</h1>
            </div>
            
        </header>
    )

    
}

Header.defaultProps = {
    text: "Feed Back UI",
}
// if you dont want to pass a prop from the App component down to the component you want to use it in you can do it this way, this way there is no prop passed from the app component it is all done here, this is a default prop, if you pass a prop into the app component it will use that one instead of this

Header.propTypes = {
    text: Proptypes.string
    //now if you pass in anything else to the text prop you will get a error
}

export default Header
