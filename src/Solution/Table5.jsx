import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { api } from "../Host";
import "../index.css"; 

function Table5() {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [data, setData] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);

  const [newDiseaseName, setNewDiseaseName] = useState("");
  const [newDiseaseDesc, setNewDiseaseDesc] = useState("");
  const [newDiseaseSolution, setNewDiseaseSolution] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showNotification, setShowNotification] = useState(false);

  const [currentDisease, setCurrentDisease] = useState({
    disname: "",
    desc: "",
    solution: "",
  });

  function formatTime(timeString) {
    const [timePart] = timeString.split(" ");
    const [hours, minutes] = timePart.split(":");
    let formattedHours = parseInt(hours, 10);
    const ampm = formattedHours >= 12 ? "PM" : "AM";
    formattedHours = formattedHours % 12;
    formattedHours = formattedHours || 12;

    return `${formattedHours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  }

  const displayNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleDelete = async () => {
    try {
      const diseaseToDelete = data[dropdownIndex].disname;
      const response = await axios.delete(`${api}/deletedisease`, {
        data: { disname: diseaseToDelete },
      });
      if (response.status === 200) {
        fetchData();
        setShowModal(false);
        displayNotification("Disease deleted successfully", "success");
      }
    } catch (error) {
      console.error("Error deleting disease:", error);
      displayNotification("Error deleting disease", "error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (index) => {
    const disease = data[index];
    setCurrentDisease(disease);
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setShowAddModal(false);
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
      const response = await axios.get(`${api}/getall/disease`);
      if (response.status === 200) {
        const responseData = response.data.data;
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching disease data:", error);
    }
  };

  const handleEditDisease = async (dis_Id) => {
    try {
      console.log("Updating disease with ID:", dis_Id);
      console.log("Updated data:", {
        dis_id: dis_Id,
        disname: currentDisease.disname,
        desc: currentDisease.desc,
        solution: currentDisease.solution,
      });
  
      const response = await axios.put(`${api}/updatedisease`, {
        dis_id: dis_Id,
        disname: currentDisease.disname,
        desc: currentDisease.desc,
        solution: currentDisease.solution,
      });
  
      if (response.status === 200) {
        console.log("Update response:", response.data);
        fetchData(); // Refresh the data after successful update
        setShowEditModal(false); // Close the edit modal
        displayNotification("Disease updated successfully", "success");
      } else {
        console.error("Failed to update disease. Status:", response.status);
        displayNotification("Failed to update disease", "error");
      }
    } catch (error) {
      console.error("Error updating disease:", error);
      displayNotification("Error updating disease", "error");
    }
  };

  const handleAddDisease = async () => {
    try {
      const response = await axios.post(`${api}/disease/register`, {
        disname: newDiseaseName,
        desc: newDiseaseDesc,
        solution: newDiseaseSolution,
      });

      if (response.status === 201) {
        fetchData();
        setShowAddModal(false);
        setNewDiseaseName("");
        setNewDiseaseDesc("");
        setNewDiseaseSolution("");
        displayNotification("Disease added successfully", "success");
      }
    } catch (error) {
      console.error("Error adding disease:", error);
      displayNotification("Error adding disease", "error");
    }
  };

  return (
    <div
      className="bg-white border-solid border-2 rounded-lg m-3"
      style={{ maxHeight: "500px", overflow: "auto" }}
    >
      <div className="flex justify-between">
        <p className="p-2 font-bold font-[Century Gothic]">
          Disease & Solution
        </p>
        <button
          onClick={() => setShowAddModal(true)}
          className="mr-2 bg-green-500 pl-5 pr-5 rounded-lg font-bold mt-2 text-white"
        >
          Add +
        </button>
      </div>
      <div className="p-2">
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border text-center">S.no</th>
              <th className="border text-center">Disease ID</th>
              <th className="border text-center">Disease Name</th>
              <th className="border text-center">Description</th>
              <th className="border text-center">Solution</th>
              <th className="border text-center">
                <IconDotsVertical stroke={1} />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((disease, index) => (
              <tr key={index}>
                <td className="border text-center">{serialNumber + index}</td>
                <td className="border text-center">
                  {disease.dis_id.substring(0, 7)}
                </td>
                <td className="border text-center">{disease.disname}</td>
                <td className="border text-center">{disease.desc}</td>
                <td className="border text-center">{disease.solution}</td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownIndex === index && (
                      <div
                        className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border"
                        style={{ left: "-10px" }}
                      >
                        <button
                          onClick={() => handleEdit(index)}
                          className="block w-full text-left px-4 py-1 hover:bg-gray-200"
                        >
                          Edit
                        </button>
                        <div className="border-t border-black"></div>
                        <button
                          className="block w-full text-left px-3 py-1 hover:bg-gray-200"
                          onClick={() => setShowModal(true)}
                        >
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

      {/* Modal for delete confirmation */}
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
          Are you sure do you want to delete the Disease ID
        </p>
        <div className="flex flex-row justify-center gap-2 pb-3">
          <Button
            variant="danger"
            className="bg-white pl-5 pr-5 text-green-500 border-black hover:text-green-500"
            onClick={handleDelete}
          >
            Confirm
          </Button>
          <Button
            className="pl-5 pr-5"
            variant="success"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      {/* Modal for editing disease */}
      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
      >
        <div className="flex justify-center p-2">
          <div className="border w-[450px] border-white rounded">
            <p className="font-bold mt-10 text-3xl mb-10 text-center">
              Edit Disease & Solution
            </p>
            <button
              className="text-white absolute lg:top-4 lg:right-4 top-2 right-2 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full"
              onClick={() => setShowEditModal(false)}
            >
              X
            </button>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={currentDisease.disname}
                  onChange={(e) =>
                    setCurrentDisease({
                      ...currentDisease,
                      disname: e.target.value,
                    })
                  }
                  placeholder="Disease Name"
                />
              </div>
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={currentDisease.desc}
                  onChange={(e) =>
                    setCurrentDisease({
                      ...currentDisease,
                      desc: e.target.value,
                    })
                  }
                  placeholder="Disease Description"
                />
              </div>
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={currentDisease.solution}
                  onChange={(e) =>
                    setCurrentDisease({
                      ...currentDisease,
                      solution: e.target.value,
                    })
                  }
                  placeholder="Disease Solution"
                />
              </div>
              <button
                className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg"
                onClick={()=>handleEditDisease(currentDisease.dis_id)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Modal for adding disease */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <div className="flex justify-center p-2">
          <div className="border w-[450px] border-white rounded">
            <p className="font-bold mt-10 text-3xl mb-10 text-center">
              Add Disease & Solution
            </p>
            <button
              className="text-white absolute lg:top-4 lg:right-4 top-2 right-2 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full"
              onClick={() => setShowAddModal(false)}
            >
              X
            </button>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={newDiseaseName}
                  onChange={(e) => setNewDiseaseName(e.target.value)}
                  placeholder="Disease Name"
                />
              </div>
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={newDiseaseDesc}
                  onChange={(e) => setNewDiseaseDesc(e.target.value)}
                  placeholder="Disease Description"
                />
              </div>
              <div className="border rounded-lg m-2 lg:w-96">
                <input
                  type="text"
                  className="px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  value={newDiseaseSolution}
                  onChange={(e) => setNewDiseaseSolution(e.target.value)}
                  placeholder="Disease Solution"
                />
              </div>
              <button
                className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg"
                onClick={handleAddDisease}
              >
                Add Disease
              </button>
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

export default Table5;
