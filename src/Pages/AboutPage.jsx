import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
    return <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>this is a react app to leave feedback on a product or service</p>
            <p>Version 1</p>

            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
        </Card>
}

export default AboutPage
