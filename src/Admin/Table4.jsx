import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical } from '@tabler/icons-react';

function Table4() {
  const [dropdownIndex, setDropdownIndex] = useState(null); // State to manage which dropdown is open

  // Function to toggle dropdown visibility for a specific row
  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      // Close the dropdown if it's already open
      setDropdownIndex(null);
    } else {
      // Open the dropdown for the clicked row
      setDropdownIndex(index);
    }
  };

  return (
    <div className='bg-slate-100 border-solid border-2 rounded-lg m-3' style={{ maxHeight: '400px', overflow: 'auto' }}>
      <div className='flex justify-between'>
        <p className='p-2 font-bold font-[Century Gothic]'>
          User List
        </p>
        <button className='mr-2 bg-green-500 pl-5 pr-5 rounded-lg font-bold mt-2 text-white'>Add +</button>
      </div>
      <div className='p-1 mt-1'>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border text-center">S.no</th>
              <th className="border text-center">User ID</th>
              <th className="border text-center">Customer Name</th>
              <th className="border text-center">Phone Number</th>
              <th className="border text-center">Email ID</th>
              <th className="border text-center">Date & Time</th>
              <th className='border text-center'>Role</th>
              <th className="border text-center"><IconDotsVertical stroke={1} /></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td className="border text-center">{index + 1}</td>
                <td className="border text-center">#543568</td>
                <td className="border text-center">Karan</td>
                <td className="border text-center">00000 00000</td>
                <td className="border text-center">minions10karan@gmail.com</td>
                <td className="border text-center">20,Mar 04:23</td>
                <td className="border text-center">lorem ipsum</td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownIndex === index && (
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: '-5px' }}>
                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          Add
                        </button>
                        <div className="border-t border-black"></div>{" "}
                        {/* Black line separator */}
                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Table4;
