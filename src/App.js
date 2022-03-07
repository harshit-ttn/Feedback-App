import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Card from './components/shared/Card'
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes ,NavLink} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import Post2 from './components/Post2'
 import { FeedbackProvider } from './context/FeedbackContext'


function App() {   //functional component

    // const [feedback, setFeedback] = useState(FeedbackData)  // global or app level state

    
    
    return (
        <FeedbackProvider>       

        {/* // BrowserRouter */}
        <Router>
            <Header />
            <div className="container">

                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />

                            {/*here this handleDelete Props access by FeedbackList */}
                            <FeedbackList />
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

        </FeedbackProvider>
    )
}


export default App