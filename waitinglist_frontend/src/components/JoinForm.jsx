import { useState } from "react";
import axios from "axios";

const JoinForm = () => {
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsValid(/\S+@\S+\.\S+/.test(email));
  };

  const handleClick = async () => {
    if (isValid) {
      try {
        await axios.post("https://waitinglist-backend.vercel.app/submit", {
          email: email,
        });
        setIsClicked(true);
      } catch (error) {
        console.error("Error submitting email:", error);
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-2.5 w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="w-full sm:w-1/2 md:w-1/3 mb-5">
        <div className="relative group w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative p-5 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <input
              type="email"
              className="pl-3 pr-7 text-gray-100 bg-black w-full focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            ></input>
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`px-5 py-2.5 text-black border-none rounded cursor-pointer transition duration-500 ease-in-out transform ${
          isClicked
            ? "bg-green-500 text-white cursor-not-allowed"
            : isValid
            ? "bg-white hover:bg-gray-700 hover:scale-105 hover:text-white active:scale-100"
            : "bg-white cursor-not-allowed opacity-50"
        }`}
        onClick={handleClick}
        disabled={!isValid || isClicked}
      >
        {isClicked ? "Joined" : "Join"}
      </button>
    </form>
  );
};

export default JoinForm;
