import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({items}) {  //functional component
  const {deleteFeedback,editFeedback}=useContext(FeedbackContext)

  return (
    <Card reverse={false}>
        <div className="num-display">{items.rating}</div>

        <button onClick={()=>deleteFeedback(items.id)} className='close'>
            <FaTimes color='purple' />
        </button>

        <button onClick={()=>editFeedback(items)} className='edit'>
          <FaEdit color='purple'/>
        </button>


        
        <div className="text-display">{items.text}</div>

    </Card>
  )
}

FeedbackItem.propTypes={
    items:PropTypes.object.isRequired,
}

export default FeedbackItem



// import {useState} from 'react'
//   const [rating, setRating]= useState(7)
//   const [text,setText]= useState('This is an example of a feedback item')

//   const handleClick=() =>{
//       setRating((prev)=>{
//           console.log(prev);
//           return prev+1;
//       })
//   }