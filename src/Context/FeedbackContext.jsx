import {createContext, useState, useEffect} from 'react'
// import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider =({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [feedbackEdit,setFeedbackEdit] = useState( {
        item: {},
        edit:false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsloading(false)
    }

    //delete feedback
const deleteFeedback = async (id) => {
    if(window.confirm('are you sure you want to delete?')) {
        await fetch(`/feedback/${id}`, {method: 'DELETE'})

        setFeedback(feedback.filter((item)=> item.id !== id))
    }
}

//add feedback
const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    // newFeedback.id = uuidv4()
    setFeedback([data,...feedback])
}

//set item to be updated
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
}

//update feedback item
const updateFeedback = async (id,updItem) => {
    const response = await fetch(`/feedback/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setFeedback(feedback.map((item) => 
        item.id === id ? {...item, ...data} : item
    ))
}

//context provider, all context has to go here to be exported out to other components
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext