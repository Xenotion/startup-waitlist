import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsClicked(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col justify-center gap-14 w-2/3">

        <div className="flex flex-col items-center gap-2.5 mb-14">
          <div className="text-7xl">___ until the grand opening</div>
          <div className="text-4xl">
            Join the waiting list and embrace the revolution
          </div>
        </div>

        <form className="flex flex-col items-center gap-2.5 w-full">
          <div className="w-1/3 mb-5">
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative px-10 py-5 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full">
                <input className="pr-7 text-gray-100 bg-black w-full" placeholder="Enter your email"></input>
              </div>
            </div>
          </div>

          <button
            className={`px-5 py-2.5 bg-white text-black border-none rounded cursor-pointer transition duration-400 ease-in-out transform custom-transition ${isClicked ? 'bg-green-500 rounded-full text-transparent w-12 h-12 cursor-not-allowed' : 'hover:bg-gray-400 hover:scale-105 hover:text-white active:scale-100'}`}
            onClick={handleClick}
            disabled={isClicked}
          >
            {isClicked ? '' : 'Join'}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2.5 mt-14">
          <div className="text-2xl">Number of innovators waiting for you:</div>
          <div className="text-5xl">0</div>
        </div>

      </div>
    </div>
  );
}

export default App;
