import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical, IconSearch } from '@tabler/icons-react';

function Table3() {
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
        <p className='p-2 mt-2 font-bold  font-[Century Gothic]' >
          Recently Searched
        </p>
        <div className='flex justify-end bg-white m-2 border rounded-lg'>
          <div className='m-2'>
            <IconSearch stroke={2} />
          </div>
          <div>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className='p-1'>
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border text-center">S.no</th>
              <th className="border text-center">Image ID</th>
              <th className="border text-center">Customer Name</th>
              <th className="border text-center">Disease Name</th>
              <th className="border text-center">Date & Time</th>
              <th className='border text-center'>Image</th>
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
                          View
                        </button>
                        <div className="border-t border-black"></div>{" "}
                        {/* Black line separator */}
                        <button className="block w-full text-left px-3 py-1 hover:bg-gray-200">
                          Delete
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

export default Table3;
