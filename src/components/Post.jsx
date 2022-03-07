import Card from './shared/Card'
import {useParams} from 'react-router-dom'

function Post() {
    const params=useParams()

  return (
    <Card>
        <h1>Post: {params.id}</h1>
        <h2>Name: {params.name}</h2>
    </Card>
  )
}

export default Post