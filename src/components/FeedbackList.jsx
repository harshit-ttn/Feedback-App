import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'
import {motion,AnimatePresence} from 'framer-motion'

function FeedbackList({feedback,handleDelete}) {  //functional component

  if(!feedback || feedback.length===0){
    return <p>No Feedback Yet</p>
  }


//with animation effect
  return (
    
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
            <FeedbackItem key={item.id} items={item} handleDelete={handleDelete} />
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

FeedbackList.propTypes={
    // feedback:PropTypes.array.isRequired,
    feedback:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        text:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,
    }
    ))
}

export default FeedbackList