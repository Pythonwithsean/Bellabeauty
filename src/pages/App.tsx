import { Home } from "../Imports/imports";
import { Signup } from "../Imports/imports";
import "../styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFound } from "../Imports/imports";
import { AuthProvider } from "../Imports/imports";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route
              path="/"
              element={
                <AuthProvider>
                  <Home />
                </AuthProvider>
              }
            ></Route>

            <Route path="/sign-up" element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
