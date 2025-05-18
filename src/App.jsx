
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/Homepage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Logout from "./pages/LogOut";
import Navbar from './components/nav';
import Dashboard from './pages/Dashboard';

export default function App(){
  return (
    <>
         <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
