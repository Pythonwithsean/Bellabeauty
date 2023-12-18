import { AuthProvider } from "../contexts/AuthContext"
import Signup from "./auth/signup"

function App() {
   return (
    <>
    <AuthProvider>
     <Signup />
    </AuthProvider>
   
    </>
  )
}

export default App
