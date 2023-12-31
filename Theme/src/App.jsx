import Card from './Card.jsx'
import Theme from './Theme.jsx'
import './App.css'

function App() {

  return (
    <>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Card/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Theme/>
                    </div>
                </div>
            </div>

    </>
  )
}

export default App
