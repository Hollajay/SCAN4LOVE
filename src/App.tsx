import './App.css'

import {BrowserRouter, Route,Routes} from 'react-router-dom'
import { Home } from './features/Home'
import { Invite } from './features/Invite'
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/invite' element={<Invite/>} />
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
