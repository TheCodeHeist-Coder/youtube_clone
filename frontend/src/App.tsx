
import {BrowserRouter, Routes, Route} from 'react-router'
import { Signin } from './screens/Signin';
import { VideoPage } from './screens/VideoPage';
import { SignUp } from './screens/Signup';
import { LandingPage } from './screens/Landing';


export function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
         <Route path='/watch' element={<VideoPage />} />
        <Route path='/signin' element={<Signin />} />
         <Route path='/signup' element={<SignUp />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )



  
}

export default App;
