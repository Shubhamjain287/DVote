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

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
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
