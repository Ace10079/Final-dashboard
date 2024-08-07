import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../Host";
import "../index.css"; 

function Table2() {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [data, setData] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);
  const [editUserData, setEditUserData] = useState({ fname: "", phone: "", email: "" });
  const [selectedUser, setSelectedUser] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showNotification, setShowNotification] = useState(false);

  function formatTime(timeString) {
    const [timePart] = timeString.split(" ");
    const [hours, minutes, seconds] = timePart.split(":");
    let formattedHours = parseInt(hours, 10);
    const ampm = formattedHours >= 12 ? "PM" : "AM";
    formattedHours = formattedHours % 12;
    formattedHours = formattedHours || 12;

    return `${formattedHours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  }

  const handleDelete = async () => {
    try {
      const emailToDelete = data[dropdownIndex].email; // Assuming email is stored in 'email' field
      const response = await axios.delete(`${api}/deletecustomer`, { data: { email: emailToDelete } });
      if (response.status === 200) {
        fetchData(); // Refresh the data after successful deletion
        setShowModal(false); // Close the modal after deletion
        displayNotification("Customer deleted successfully", "success");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      displayNotification("Error deleting customer", "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (index) => {
    setSelectedUser(data[index]);
    setEditUserData({
      fname: data[index].fname,
      phone: data[index].phone,
      email: data[index].email,
    });
    setShowEditModal(true);
  };

  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/getall/customer`);
      if (response.status === 200) {
        const responseData = response.data.data;
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching Admin data:", error);
    }
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`${api}/update/customer`, {
        email: editUserData.email,
        fname: editUserData.fname,
        phone: editUserData.phone,
      });
      if (response.status === 200) {
        fetchData();
        setShowEditModal(false);
        displayNotification("Customer updated successfully", "success");
      }
    } catch (error) {
      console.error("Error updating customer:", error);
      displayNotification("Error updating customer", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserData({
      ...editUserData,
      [name]: value,
    });
  };

  const displayNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="bg-white h-[450px] border-solid border-2 rounded-lg m-3 p-2" style={{ maxHeight: "350px", overflow: "auto" }}>
      <div className="flex justify-between">
        <p className="p-2 font-bold font-[Century Gothic] text-2xl">Customer List</p>
      </div>

      <div className="p-1 mt-2">
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border text-center">S.no</th>
              <th className="border text-center">Customer ID</th>
              <th className="border text-center">Customer Name</th>
              <th className="border text-center">Date & Time</th>
              <th className="border text-center">Phone Number</th>
              <th className="border text-center">Email ID</th>
              <th className="border text-center">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => (
              <tr key={index}>
                <td className="border text-center">{serialNumber + index}</td>
                <td className="border text-center">{customer.user_id.substring(0, 8)}</td>
                <td className="border text-center">{customer.fname}</td>
                <td className="border text-center">{formatTime(customer.time)}</td>
                <td className="border text-center">{customer.phone}</td>
                <td className="border text-center">{customer.email}</td>
                <td className="border text-center">
                  <div className="relative  ">
                    <IconDotsVertical stroke={1} onClick={() => toggleDropdown(index)} className="absolute right-5" />

                    {dropdownIndex === index && (
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: "-35px" }}>
                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-200" onClick={() => handleEdit(index)}>
                          Edit
                        </button>
                        <div className="border-t border-black"></div> {/* Black line separator */}
                        <button className="block w-full text-left px-3 py-1 hover:bg-gray-200" onClick={() => setShowModal(true)}>
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
        <button onClick={() => setShowModal(false)} className="text-white absolute lg:left-[460px] lg:top-[10px] right-[4px] top-[4px] font-bold bg-green-600 pl-[7px] pr-2 pt-0.5 pb-0.5 rounded-full" style={{ width: "24px", height: "24px", lineHeight: "1" }}>
          X
        </button>

        <p className="text-2xl text-center pt-3 font-bold">Are you Sure</p>
        <p className="text-xl text-center p-3">Are you sure do you want to delete the customer ID</p>
        <div className="flex flex-row justify-center gap-2 pb-3">
          <Button variant="danger" className="bg-white pl-5 pr-5 text-green-500 border-black hover:text-green-500" onClick={handleDelete}>
            Confirm
          </Button>
          <Button className="pl-5 pr-5" variant="success" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <div className="border lg:w-[400px] lg:ml-[50px] rounded border-white">
          <p className="font-bold mt-20 text-3xl mb-10 text-center">Edit Customer list</p>
          <button className="text-white absolute lg:top-4 lg:right-4 top-2 right-2 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full" onClick={() => setShowEditModal(false)}>
            X
          </button>
          <div className="flex flex-col justify-center items-center">
            <div className="border rounded-lg m-2 lg:w-96">
              <input
                type="text"
                className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                name="fname"
                value={editUserData.fname}
                onChange={handleInputChange}
                placeholder="Customer Name"
              />
            </div>
            <div className="border rounded-lg m-2 lg:w-96">
              <input
                type="text"
                className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                name="phone"
                value={editUserData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="border rounded-lg m-2 lg:w-96">
              <input
                type="text"
                className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                name="email"
                value={editUserData.email}
                onChange={handleInputChange}
                placeholder="Email ID"
              />
            </div>
            <button className="bg-green-800 pl-28 pr-28 pt-1 pb-1 mb-10 mt-10 text-white border rounded-lg" onClick={handleSaveEdit}>
              Save
            </button>
          </div>
        </div>
      </Modal>
      <div className={`notification-container ${showNotification ? "notification-show" : ""} ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`}>
        <div className="notification-content">
          {notification.message}
        </div>
      </div>
    </div>
  );
}

export default Table2;
