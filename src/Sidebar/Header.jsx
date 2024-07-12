import React, { useState, useEffect } from 'react';
import { IconUserCircle } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { api } from '../Host';

function Header({ user }) { // Correctly destructuring the user prop
  const navigate = useNavigate();

  const goToAccount = () => {
    navigate('/profile');
  };

  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/getadminbyemail?email=${user}`);
      if (response.status === 200) {
        const responseData = response.data.data;
        setShowDetails(responseData);
      }
    } catch (error) {
      console.error("Error fetching Admin data:", error);
    }
  };

  return (
    <div>
      <div className='mt-1 lg:m-3 flex justify-end text-white'>
        <button className='mr-2 lg:mr-1 bg-green-500 p-2 rounded-lg font-bold flex gap-1' onClick={goToAccount}>
          <div>
            <IconUserCircle stroke={2} />
          </div>
          <div>
            <p>{showDetails?.name || 'Admin'}</p> {/* Display user's name or "Admin" if not available */}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
