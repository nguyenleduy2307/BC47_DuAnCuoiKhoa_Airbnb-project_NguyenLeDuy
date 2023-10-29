import { router } from "./router"
import {useRoutes} from 'react-router-dom'
import 'assets/style.css'

function App() {


  return (

    <div>
      {
        useRoutes(router)
      }
    </div>


  )
}

export default App
