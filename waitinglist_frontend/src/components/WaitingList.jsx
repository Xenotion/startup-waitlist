import { useState, useEffect } from 'react';
import axios from 'axios';

const WaitingList = () => {
  const [emailList, setEmailList] = useState(0);
  const [error, setError] = useState(null);
  
  const fetchEmailList = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3003/emails');
      console.log(response.data);
      setEmailList(response.data.length);
    } catch (error) {
      console.error('Error fetching the email list:', error);
      setError('Failed to fetch the email list. Please try again later.');
    }
  };

  useEffect(() => {
    fetchEmailList();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2.5 mt-14">
      <div className="text-2xl">Number of innovators waiting for you:</div>
      <div className="text-5xl">{emailList}</div>
    </div>
  );
};

export default WaitingList;
