import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/404ErrorPage/ErrorPage";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Home from "./components/Home/Home";
import CreateVoting from "./components/Voting/CreateVoting";
import Voting from "./components/Voting/Voting";
import HOC from "./utils/HOC";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HOC Children={Home} />} />
          <Route path="/login" element={<HOC Children={Login} />} />
          <Route path="/about" element={<HOC Children={About} />} />
          <Route path="/contact" element={<HOC Children={Contact} />} />
          <Route path="/forgot-password" element={<HOC Children={ForgotPassword} />} />
          <Route path="/reset-password" element={<HOC Children={ResetPassword} />} />
          <Route
            path="/profile"
            element={<ProtectedRoute Component={Profile} />}
          />
          <Route
            path="/voting"
            element={<ProtectedRoute Component={Voting} />}
          />
          <Route
            path="/edit-profile"
            element={<ProtectedRoute Component={EditProfile} />}
          />
          <Route
            path="/create-voting"
            element={<ProtectedRoute Component={CreateVoting} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
