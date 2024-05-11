import React, { useState, useEffect } from 'react';
import { IconUserPlus,IconUsers,IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import { api } from '../Host';

function Cards() {
  const [totalCustomers, setTotalCustomers] = useState(0);

  useEffect(() => {
    fetchTotalCustomers();
  }, []);

  const fetchTotalCustomers = async () => {
    try {
      const response = await axios.get(`${api}/getall/customer`);
      if (response.status === 200) {
        const totalCustomersCount = response.data.data.length;
        setTotalCustomers(totalCustomersCount);
      }
    } catch (error) {
      console.error('Error fetching total customers:', error);
    }
  };
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
          <p>{totalCustomers}</p>
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
