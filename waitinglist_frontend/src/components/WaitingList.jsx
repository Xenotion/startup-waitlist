import { useState, useEffect } from 'react';
import axios from 'axios';

const [isLoading, setIsLoading] = useState(true);

const fetchEmailList = async () => {
  setIsLoading(true);
  try {
    const response = await axios.get('https://waitinglist-backend.vercel.app/emails');
    setEmailList(response.data.length);
  } catch (err) {
    console.error('Error fetching the email list:', err);
    if (err.response) {
      setError(`Server Error: ${err.response.status} ${err.response.data}`);
    } else if (err.request) {
      setError('Network Error: Failed to fetch the email list. Please check your internet connection.');
    } else {
      setError(`Error: ${err.message}`);
    }
  } finally {
    setIsLoading(false);
  }
};

useEffect(() => {
  fetchEmailList();
}, []);

return (
  <div className="flex flex-col items-center gap-2.5 mt-14">
    <div className="text-lg text-center md:text-2xl">Number of innovators waiting for you:</div>
    {isLoading ? (
      <div>Loading...</div>
    ) : error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <div className="text-5xl">{emailList}</div>
    )}
  </div>
);

export default WaitingList;
