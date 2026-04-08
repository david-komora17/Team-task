import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import { AuthProvider } from "./components/AuthContext";
import Authform from "./pages/Authform";
import ProtectedRoute from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";

function App () {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace/>}/>
            <Route path="/login" element={<Authform/>}/>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }/>
          </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App;