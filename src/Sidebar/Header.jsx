import React from 'react'
import { IconUserCircle } from '@tabler/icons-react';


function Header() {
  return (
    <div>
      <div className='mt-1 lg:m-3 flex justify-end text-white'>
        <button className='mr-2 lg:mr-1 bg-green-500 p-2 rounded-lg font-bold flex gap-1'>
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
