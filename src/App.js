import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./Data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import Card from './components/shared/Card'
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes ,NavLink} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import Post2 from './components/Post2'


function App() {   //functional component
    const [feedback, setFeedback] = useState(FeedbackData)  // global or app level state

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    return (
        // BrowserRouter
        <Router>
            <Header />
            <div className="container">

                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />

                            {/*here this handleDelete Props access by FeedbackList */}
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>

                    </Route>

                    <Route exact path='/about' element={<AboutPage />} />

                    <Route path='/post/:id/:name' element={<Post />} />

                    <Route path='/post2' element={<Post2 />} />

                    </Routes>

                    <Card>
                        <NavLink to='/' activeClassName='active'>Home</NavLink>

                        <NavLink to='/about' activeClassName='active'>About</NavLink>
                    </Card>

                    <AboutIconLink/>
            </div>

        </Router >
    )
}


export default App