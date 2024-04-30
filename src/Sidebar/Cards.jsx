import React from 'react'
import { IconUserPlus,IconUsers,IconSearch } from '@tabler/icons-react';

function Cards() {
  return (
    <div className='flex flex-col justify-center lg:flex-row lg:m-2 lg:gap-10 font-bold text-sm'>
      <div className='border-solid border-2 items-center lg:justify-between justify-between rounded-lg flex lg:gap-3 ml-14 mt-3 bg-white hover:shadow-2xl w-64 lg:w-72 lg:m-2'>
        <div className='p-3'>
          <p>Total No. of Users</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconUserPlus stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full'/>
        </div>

      </div>
      <div className='border-solid border-2 items-center rounded-lg lg:justify-between justify-between flex lg:gap-3 ml-14 mt-3 bg-white hover:shadow-2xl w-64 lg:w-72 lg:m-2'>
        <div className='p-3'>
          <p>Total No. of Customers</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconUsers stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full' />
        </div>

      </div>
      <div className='border-solid border-2 items-center lg:justify-between justify-between rounded-lg flex lg:gap-3 ml-14 mt-3 bg-white hover:shadow-2xl w-64 lg:w-72 lg:m-2'>
        <div className='p-3'>
          <p>Total No. of Searches</p>
          <p>34</p>
        </div>
        <div className='p-3 mt-1 text-white'>
        <IconSearch stroke={2} className='h-9 w-9 bg-green-600 p-1 rounded-full' />
        </div>

      </div>
    </div>
  )
}

export default Cards
