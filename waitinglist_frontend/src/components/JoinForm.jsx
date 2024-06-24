import { useState } from 'react';

const JoinForm = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <form className="flex flex-col items-center gap-2.5 w-full">
      <div className="w-1/3 mb-5">
        <div className="relative group w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative px-10 py-5 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full">
            <input className="pr-7 text-gray-100 bg-black w-full" placeholder="Enter your email"></input>
          </div>
        </div>
      </div>

      <div
        className={`px-5 py-2.5 text-black border-none rounded cursor-pointer transition duration-500 ease-in-out transform ${
          isClicked
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-white hover:bg-gray-700 hover:scale-105 hover:text-white active:scale-100"
        }`}
        onClick={handleClick}
      >
        {isClicked ? 'Joined' : 'Join'}
      </div>
    </form>
  );
};

export default JoinForm;
