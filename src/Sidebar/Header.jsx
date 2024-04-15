import React from 'react'
import { IconUserCircle } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';


function Header() {
  const history = useNavigate();

  const goToAccount = () => {
    history('/profile'); // Assuming '/profile' is the path to your Account component
  };
  return (
    <div>
      <div className='mt-1 lg:m-3 flex justify-end text-white'>
        <button className='mr-2 lg:mr-1 bg-green-500 p-2 rounded-lg font-bold flex gap-1 'onClick={goToAccount}>
          <div>
            <IconUserCircle stroke={2} />
          </div>
          <div>
            <p>Karan</p>
          </div>
        </button>
      </div>


    </div>
  )
}

export default Header
