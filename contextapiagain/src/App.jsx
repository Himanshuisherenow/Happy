import UserContextProvider from './UserContextProvider'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'

import './App.css'


function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App