import UserContextProvider from './UserContextProvider.jsx'
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'

function App() {
  

  return (
    
<UserContextProvider>
<h1>Himanshu</h1>
<Login/>

<Profile/>

</UserContextProvider>
    
  )
}

export default App
