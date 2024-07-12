import React, { useState, useEffect } from 'react';
import { IconUserPlus, IconUsers, IconSearch } from '@tabler/icons-react';
import axios from 'axios';
import { api } from '../Host';

function Cards() {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSearches, setTotalSearches] = useState(0);

  useEffect(() => {
    fetchTotalCustomers();
    fetchTotalUsers();
    fetchTotalSearches();
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

  const fetchTotalUsers = async () => {
    try {
      const response = await axios.get(`${api}/getall/admin`);
      if (response.status === 200) {
        const totalUsersCount = response.data.data.length;
        setTotalUsers(totalUsersCount);
      }
    } catch (error) {
      console.error('Error fetching total users:', error);
    }
  };

  const fetchTotalSearches = async () => {
    try {
      const response = await axios.get(`${api}/getall/image`);
      if (response.status === 200) {
        const totalSearchesCount = response.data.data.length;
        setTotalSearches(totalSearchesCount);
      }
    } catch (error) {
      console.error('Error fetching total searches:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 font-bold text-sm mt-3 mx-12">
      <div className="border-solid border-2 items-center rounded-lg flex justify-between bg-white hover:shadow-2xl w-64 lg:w-72 p-3">
        <div>
          <p>Total No. of Users</p>
          <p>{totalUsers}</p>
        </div>
        <div className="mt-1 text-white">
          <IconUserPlus stroke={2} className="h-9 w-9 bg-green-600 p-1 rounded-full" />
        </div>
      </div>
      <div className="border-solid border-2 items-center rounded-lg flex justify-between bg-white hover:shadow-2xl w-64 lg:w-72 p-3">
        <div>
          <p>Total No. of Customers</p>
          <p>{totalCustomers}</p>
        </div>
        <div className="mt-1 text-white">
          <IconUsers stroke={2} className="h-9 w-9 bg-green-600 p-1 rounded-full" />
        </div>
      </div>
      <div className="border-solid border-2 items-center rounded-lg flex justify-between bg-white hover:shadow-2xl w-64 lg:w-72 p-3">
        <div>
          <p>Total No. of Searches</p>
          <p>{totalSearches}</p>
        </div>
        <div className="mt-1 text-white">
          <IconSearch stroke={2} className="h-9 w-9 bg-green-600 p-1 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
