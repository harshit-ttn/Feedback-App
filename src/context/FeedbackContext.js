 import {createContext,useState,useEffect} from 'react'

 const FeedbackContext=createContext()

 export const FeedbackProvider=({children})=>{

    const[isloading,setIsLoading]=useState(true)
    // eslint-disable-next-line
    const [feedback,setFeedback]=useState([])         // global state


    const[feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false 
    })

    useEffect(()=>{
        fetchFeedback()
    },[])

    // Fetch feedback
    const fetchFeedback= async()=>{
        const response= await fetch(`/feedback?_sort=id&_order=desc`)

        const data=await response.json()

        setFeedback(data)

    }

    // Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },

            body: JSON.stringify(newFeedback),
        })

        const data = await response.json()


        // newFeedback.id = uuidv4()
        setFeedback([data, ...feedback])
    }

    //  Delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?')) {

            await fetch(`/feedback/${id}`,{method : 'DELETE'})

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update feedback item
    const updateFeedback= async (id,updItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers : {
                'Content-Type':'application/json'
            },

            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item)=> item.id===id ? {...item,...data} : item))
    }

    // set item to be updated
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item:item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,  //shorthand of using feedback:feedback (key:value)
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isloading,
    }}>
        {children}
    </FeedbackContext.Provider>
 }


 export default FeedbackContext