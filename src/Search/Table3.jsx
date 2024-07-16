import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { IconDotsVertical, IconSearch } from '@tabler/icons-react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { api } from "../Host";

function Table3() {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); 
  const [showEditModal, setShowEditModal] = useState(false);
  const [data, setData] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);
  const [diseaseData, setDiseaseData] = useState({}); // State to store disease data

  function formatDateTime(dateString, timeString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const [hours, minutes, seconds] = timeString.split(':');
    const formattedTime = `${hours}:${minutes}`;
    const ampm = parseInt(hours) >= 12 ? 'PM' : 'AM';
    const formattedDate = `${day}-${month}-${year}`;
    return `${formattedDate} ${formattedTime} ${ampm}`;
  }

  const handleDelete = async () => {
    try {
      const nameToDelete = data[dropdownIndex].Image_id;
      console.log(nameToDelete); 
      const response = await axios.delete(`${api}/deleteimage`, { data: { Image_id: nameToDelete } });
      if (response.status === 200) {
        fetchData(); 
        setShowModal(false); 
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/getall/image`);
      if (response.status === 200) {
        const responseData = response.data.data;
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching Admin data:", error);
    }
  };

  const fetchDiseaseData = async (dis_id) => {
    try {
      const response = await axios.get(`${api}/getdiseasebyname?disname=${dis_id}`);
      
      if (response.status === 200) {
        setDiseaseData(response.data.data);
       
        setShowEditModal(true);
      }
    } catch (error) {
      console.error("Error fetching disease data:", error);
    }
  };

  const handleView = (dis_id) => {
    fetchDiseaseData(dis_id);
    console.log(diseaseData);
  };

  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  return (
    <div className='bg-white p-2 border-solid border-2 rounded-lg m-3' style={{ maxHeight: '400px', overflow: 'auto' }}>
      <div className='flex justify-between'>
        <p className='p-2 mt-2 font-bold font-[Century Gothic] text-2xl'>
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
              <th className="border text-center">User ID</th>
              <th className="border text-center">Disease ID</th>
              <th className="border text-center">Date & Time</th>
              <th className='border text-center'>Image</th>
              <th className="border text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((image, index) => (
              <tr key={index}>
                <td className="border text-center">{serialNumber + index}</td>
                <td className="border text-center">{image.Image_id.substring(0, 10)}</td>
                <td className="border text-center">{image.user_id}</td>
                <td className="border text-center">{image.dis_id}</td>
                <td className="border text-center">
                  {formatDateTime(image.date, image.time)}
                </td>
                <td className="border text-center flex justify-center">
                  <img src={`${api}/${image.img}`} alt="Image" className="img-thumbnail " style={{ width: '100px' }} />
                </td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                      className="absolute right-5"
                    />
                    {dropdownIndex === index && (
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: "-25px" }}>
                        <button onClick={() => handleView(image.dis_id)} className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          View
                        </button>
                        <div className="border-t border-black"></div>
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
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <div className="flex justify-center h-full overflow-y-hidden">
          <button
            onClick={() => setShowEditModal(false)}
            className="text-white absolute lg:left-[460px] lg:top-[10px] right-[4px] top-[4px] font-bold bg-green-600 pl-[7px] pr-2 pt-0.5 pb-0.5 rounded-full"
            style={{ width: "24px", height: "24px", lineHeight: "1" }}
          >
            X
          </button>
          <div className="rounded flex flex-col gap-2 h-full w-full p-2">
          
              <div><img src='./image.jpg' alt="Image" className="rounded w-full h-[220px]" /></div>

            
            <p className="font-bold text-[green] font-[Century Gothic] text-xl pl-2">{diseaseData.disname || "Disease name not available"}</p>
            <p className="text-[green] font-[Century Gothic] text-xl pl-2">Description</p>
            <p className="pl-2">
              {diseaseData.desc || "Description not available"}
            </p>
            <p className="text-[green] font-[Century Gothic] pl-2 text-xl">Solution</p>
            <p className="pl-2 ">
              {diseaseData.solution || "Solution not available"}
            </p>
            <p className="text-[green] font-[Century Gothic] pl-2 text-xl">Cause</p>
            <p className="pl-2 ">
              {diseaseData.cause || "Cause not available"}
            </p>
            <div className="flex justify-center">
            <button className="pl-20 pr-28 pt-1 pb-1 w-3 text-[green] border rounded-lg  hover:bg-[green] hover:text-white border-[green] text-center " onClick={handleDelete}>
              Delete
            </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Table3;
