import './App.css'

import {HashRouter as Router , Route,Routes} from 'react-router-dom'
import { Home } from './features/Home'
import { Invite } from './features/Invite'
function App() {
  return (
   
    <Router>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/invite' element={<Invite/>} />
    </Routes>
    </Router>
   
  )
}

export default App
