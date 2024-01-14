import { AuthProvider } from "../contexts/AuthContext";
import { Home } from "../Imports/imports";
import { Signup } from "../Imports/imports";
import "../styles/index.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Home />

        {/* <Signup /> */}
      </AuthProvider>
    </>
  );
}

export default App;
