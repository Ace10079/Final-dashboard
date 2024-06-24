import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical } from '@tabler/icons-react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { api } from "../Host";
import "../index.css"; 

function Table4() {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [data, setData] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1); 
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const initialNewAdminState = {
    admin_id: '',
    name: '',
    phone: '',
    email: '',
    password: '',
    role: '',
    img: ''
  };

  const [newAdmin, setNewAdmin] = useState(initialNewAdminState);


  function formatTime(timeString) {
    const [timePart] = timeString.split(' ');
    const [hours, minutes, seconds] = timePart.split(':');
    let formattedHours = parseInt(hours, 10);
    const ampm = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12;
    formattedHours = formattedHours || 12; 
    return `${formattedHours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const displayNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  const handleDelete = async () => {
    try {
      const emailToDelete = data[dropdownIndex].email;
      const response = await axios.delete(`${api}/deleteadmin`, { data: { email: emailToDelete } });
      if (response.status === 200) {
        fetchData(); 
        setShowModal(false);
        displayNotification('Admin deleted successfully', 'success');
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      displayNotification('Error deleting admin', 'error');
    }
  };

  const handleEdit = () => {
    setShowEditModal(false);
    displayNotification('Admin details edited successfully', 'success');
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post(`${api}/admin/register`, newAdmin);
      if (response.status === 201) {
        fetchData();
        setShowAddModal(false);
        displayNotification('Admin added successfully', 'success');
      }
    } catch (error) {
      console.error("Error adding admin:", error);
      displayNotification('Error adding admin', 'error');
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/getall/admin`);
      if (response.status === 200) {
        const responseData = response.data.data;
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching Admin data:", error);
      displayNotification('Error fetching admin data', 'error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='bg-white border-solid border-2 rounded-lg m-3' style={{ maxHeight: '400px', overflow: 'auto' }}>
      <div className='flex justify-between'>
        <p className='p-2 font-bold font-[Century Gothic]'>
          User List
        </p>
        <button className='mr-2 bg-green-500 pl-5 pr-5 rounded-lg font-bold mt-2 text-white' onClick={() => setShowAddModal(true)}>Add +</button>
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
          {data.map((admin, index) => (
              <tr key={index}>
                <td className="border text-center">{serialNumber + index}</td>
                <td className="border text-center">{admin.admin_id.substring(0, 10)}</td>
                <td className="border text-center">{admin.name}</td>
                <td className="border text-center">{admin.phone}</td>
                <td className="border text-center">{admin.email}</td>
                <td className="border text-center">{formatTime(admin.time)}</td>
                <td className="border text-center">{admin.role}</td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownIndex === index && (
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: "-37px" }}>
                        <button onClick={() => setShowEditModal(true)} className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          Edit
                        </button>
                        <div className="border-t border-black"></div>{" "}
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
        <button
          onClick={() => setShowModal(false)}
          className="text-white absolute lg:left-[460px] lg:top-[10px] right-[4px] top-[4px] font-bold bg-green-600 pl-[7px] pr-2 pt-0.5 pb-0.5 rounded-full"
          style={{ width: "24px", height: "24px", lineHeight: "1" }}
        >
          X
        </button>
        <p className="text-2xl text-center pt-3 font-bold">Are you Sure</p>
        <p className="text-xl text-center p-3">
          Are you sure do you want to delete the Admin ID
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

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
      <div>
      <div className="flex justify-center ">
      <div className="border w-[400px] lg:mt-3  border-white rounded">
        <p className=" font-bold mt-20 text-3xl mb-10 text-center">
          Edit Admin List
        </p>
        <button className="text-white absolute lg:top-2 lg:right-4 top-2 right-2 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full" onClick={() => setShowEditModal(false)}>
          X
        </button>
        <div className="flex flex-col justify-center items-center">
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Customer Name"
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Phone Number"
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Email Id"
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Role"
          />
        </div>
        <button className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg" onClick={handleEdit}>
          Save
        </button>
        </div>
        
      </div>
    </div>
    </div>
      </Modal>
       {/* Add Modal */}
       <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
       <div>
      <div className="flex justify-center ">
      <div className="border w-[400px] lg:mt-3  border-white rounded">
        <p className=" font-bold mt-20 text-3xl mb-10 text-center">
          Add Admin
        </p>
        <button className="text-white absolute lg:top-2 lg:right-4 top-2 right-2 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full" onClick={() => setShowAddModal(false)}>
          X
        </button>
        <div className="flex flex-col justify-center items-center">
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Admin ID"
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Admin Name"
            name="name"
            value={newAdmin.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Mobile Number"
            name="phone"
            value={newAdmin.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Email ID"
            name="email"
            value={newAdmin.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Password"
            name="password"
            value={newAdmin.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="border rounded-lg m-2 lg:w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Role"
            name="role"
            value={newAdmin.role}
            onChange={handleInputChange}
          />
        </div>
        <button className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg" onClick={handleAdd}>
          Save
        </button>
        </div>
        
      </div>
    </div>
    </div>
       </Modal>

      {/* Notification */}
      <div className={`notification-container ${showNotification ? "notification-show" : ""} ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`}>
        <div className="notification-content">
          {notification.message}
        </div>
      </div>
    </div>
  );
}

export default Table4;
