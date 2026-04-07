import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { AuthProvider } from "./components/AuthContext";
import {Authform} from "./pages/Authform";
import ProtectedRoute from "./components/ProtectedRoutes";
import Routes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import About from "./pages/about";

function App () {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<Authform/>}/>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }/>
            <Route path="/About" element={<About/>}/>
          </Routes>
      </Router>
    </AuthProvider>
  )
}