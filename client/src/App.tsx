import {BrowserRouter, Routes, Route} from 'react-router'
import { LandingPage } from './screens/LandingPage'
import { VideoPage } from './screens/VideoPage'
import { Signin } from './screens/LoginPage'
import { Signup } from './screens/SignupPage'

function App() {
  

  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
         <Route path='/watch' element={<VideoPage />} />
        <Route path='/signin' element={<Signin />} />
         <Route path='/signup' element={<Signup />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )



}

export default App
