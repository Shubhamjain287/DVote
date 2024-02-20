import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

  const {token} = useSelector((state) => state.auth.user);
  const authorization = `Bearer ${token}`;

  const Navigate = useNavigate();
  const [user , setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const res = await axios.get(`/user/user`, { headers : {authorization} });
            setUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    }
    fetchUser();
  }, []);

  return (
    <div className='flex flex-col items-center m-5 px-6 py-8 mx-auto md:h-screen lg:py-0'>
      <h1 className="mb-4 m-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Profile</h1>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mt-5 mb-5 rounded-full shadow-lg" src={user?.profile?.url ? user?.profile?.url : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt="Bonnie image"/>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
            {
              user?.description && 
              <p className="font-normal text-gray-700 text-center m-3 dark:text-gray-400">
                  {user.description}
              </p>
            }
            <div className="flex mt-4 space-x-3 md:mt-6">
                <Link to="/edit-profile" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile