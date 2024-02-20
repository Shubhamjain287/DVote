import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CheckUser } from "../../store/features/auth/authServices";
import { STATUSES } from "../../store/features/auth/authSlice";

const Voting = () => {
  const [voting, setVotings] = useState([]);
  const user = useSelector((store) => store.auth.user);

  const handleVote = (id) => {
    (async () => {
        try {
            const data = await axios.post(`/voting/vote/${id}`, {user: user.id});
        CheckUser(STATUSES.SUCCESS, "User Vote had been Counted !!");
        getAllVotings();
        } catch (error) {
            console.log(error);
        }
    })();
  }

  const getAllVotings = async () => {
    try {
        const data = await axios.get("/voting/all");
        setVotings(data.data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getAllVotings();
  }, []);

  return (
    <>
      <div className="m-5 flex">
        {voting?.map((v) => {
          let voted = v?.votes?.includes(user.id);
          return (
            <div class="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {v.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                {v.description}
              </p>
              {voted ? <button
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Voted
              </button> : <button
                onClick={() => handleVote(v._id)}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Vote Now
              </button>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Voting;
