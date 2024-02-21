import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent bg-opacity-50 z-50">
      <div className="flex flex-col items-center bg-transparent">
        <div className="animate-spin rounded-full h-12 w-12 border-solid border-4 border-gray-500"></div>
        <div className="mt-4 text-gray-600 font-bold italic text-[1.5rem] lg:text-[1.8rem] bg-transparent">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;
