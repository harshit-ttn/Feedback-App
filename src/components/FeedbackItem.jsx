import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({items,handleDelete}) {  //functional component
  

  return (
    <Card reverse={false}>
        <div className="num-display">{items.rating}</div>

        <button onClick={()=>handleDelete(items.id)} className='close'>
            <FaTimes color='purple' />
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