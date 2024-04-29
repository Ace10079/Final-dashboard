import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical, IconSearch } from '@tabler/icons-react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

function Table3() {
  const history = useNavigate();

  const goToAccount = () => {
    history('/search_view'); // Assuming '/profile' is the path to your Account component
  };
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const handleDelete = () => {
    setShowModal(false);
  };
  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
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
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: "-25px" }}>
                        <button onClick={goToAccount} className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          View
                        </button>
                        <div className="border-t border-black"></div>{" "}
                        {/* Black line separator */}
                        <button onClick={() => setShowModal(true)} className="block w-full text-left px-3 py-1 hover:bg-gray-200">
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
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      
        <img src="image.jpg" alt="" className='rounded'/>
        <button
          onClick={() => setShowModal(false)}
          className="text-white absolute lg:left-[460px] lg:top-[10px] right-[4px] top-[4px] font-bold bg-green-600 pl-[7px] pr-2 pt-0.5 pb-0.5 rounded-full"
          style={{ width: "24px", height: "24px", lineHeight: "1" }}
        >
          X
        </button>

        <p className="text-2xl text-center pt-2 font-bold">Are you Sure</p>
        <p className="text-xl text-center p-3">
          Are you sure do you want to delete the customer ID
        </p>
        <div className="flex flex-row justify-center gap-2 pb-3">
          <Button
            variant="danger"
            className="bg-white pl-5 pr-5 text-green-500 border-black hover:text-green-500"
            onClick={handleDelete}
          >
            Confirm
          </Button>
          <Button className="pl-5 pr-5" variant="success" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Table3;
