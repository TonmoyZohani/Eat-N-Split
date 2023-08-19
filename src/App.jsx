import { useState } from 'react'
import FriendList from './components/FriendList';
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList/>
      </div>
    </div>
  )
}

export default App
