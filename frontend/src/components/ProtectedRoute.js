import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({Component}) => {
  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    if(!user){
      Navigate('/');
    }

  }, []);
  

  return user ? (
    <Component />
  ) : <Navigate to={"/login"} />
}

export default ProtectedRoute;