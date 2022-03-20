import FeedbackItem from "./FeedbackItem"
import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList() {  //functional component
  const {feedback,isLoading}= useContext(FeedbackContext)

  if(!isLoading && (!feedback || feedback.length===0)){
    return <p>No Feedback Yet</p>
  }

  //with animation effect
  return isLoading ? <Spinner/> : (
    
    <div className="feedback-list">

     <AnimatePresence>
        {feedback.map((item)=>(
          <motion.div 
          key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >

            {/* here this handleDelete Props access by FeedbackItem */}
            <FeedbackItem key={item.id} items={item} />
            </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )



//without animation effect
  // return (
    
  //   <div className="feedback-list">

  //     {/* here this handleDelete Props access by FeedbackItem */}

  //       {feedback.map((item)=>(
  //           <FeedbackItem key={item.id} items={item}
  //           handleDelete={handleDelete} />
  //       ))}
  //   </div>
  // )

}



export default FeedbackList