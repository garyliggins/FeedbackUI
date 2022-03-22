import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/Card'
const FeedbackItem = ({item, handleDelete}) => {

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
            
        </Card>
    )
}
Card.defaultProps ={
    reverse: false,
}

export default FeedbackItem