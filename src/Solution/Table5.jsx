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
  const [newUserID, setNewUserID] = useState("");
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
      const diseaseToDelete = data[dropdownIndex].dis_id;
      const response = await axios.delete(`${api}/deletedisease`, {
        data: {dis_id: diseaseToDelete },
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
        user_id: newUserID,
        disname: newDiseaseName,
        desc: newDiseaseDesc,
        solution: newDiseaseSolution,
      });

      if (response.status === 201) {
        fetchData();
        setShowAddModal(false);
        setNewUserID("");
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

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  
  const wordLimit = 5;

  return (
    <div
      className="bg-white h-[450px] pb-12 border-solid border-2 rounded-lg m-3 p-2"
      style={{ maxHeight: "", overflow: "auto" }}
    >
      <div className="flex justify-between">
        <p className="p-2 font-bold text-2xl font-[Century Gothic]">
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
              <th className="border text-center">Action</th>
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
                <td className="border">{truncateText(disease.desc, wordLimit)}</td>
                <td className="border">{truncateText(disease.solution, wordLimit)}</td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                      className="absolute right-5"
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
          className="text-white absolute lg:left-[460px] lg:top-[10px] md:left-[330px] md:top-[10px]"
        >
          X
        </button>
        <Modal.Body className="p-6">
          <p className="text-lg font-bold">Delete</p>
          <p className="mt-4">
            Are you sure you want to delete this disease data?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            className="bg-red-500 text-white"
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for adding disease */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <button
          onClick={() => setShowAddModal(false)}
          className="text-white absolute lg:left-[460px] lg:top-[10px] md:left-[330px] md:top-[10px]"
        >
          X
        </button>
        <Modal.Body className="p-6">
          <p className="text-lg font-bold">Add Disease</p>
          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">User ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="User ID"
                value={newUserID}
                onChange={(e) => setNewUserID(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Disease Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Disease Name"
                value={newDiseaseName}
                onChange={(e) => setNewDiseaseName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Description"
                value={newDiseaseDesc}
                onChange={(e) => setNewDiseaseDesc(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Solution</label>
              <textarea
                className="form-control"
                placeholder="Solution"
                value={newDiseaseSolution}
                onChange={(e) => setNewDiseaseSolution(e.target.value)}
              />
            </div>
            <Button
              variant="success"
              onClick={handleAddDisease}
              className="bg-green-500 text-white"
            >
              Add
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Modal for editing disease */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <button
          onClick={() => setShowEditModal(false)}
          className="text-white absolute lg:left-[460px] lg:top-[10px] md:left-[330px] md:top-[10px]"
        >
          X
        </button>
        <Modal.Body className="p-6">
          <p className="text-lg font-bold">Edit Disease</p>
          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Disease Name</label>
              <input
                type="text"
                className="form-control"
                value={currentDisease.disname}
                onChange={(e) =>
                  setCurrentDisease({
                    ...currentDisease,
                    disname: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={currentDisease.desc}
                onChange={(e) =>
                  setCurrentDisease({ ...currentDisease, desc: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Solution</label>
              <textarea
                className="form-control"
                value={currentDisease.solution}
                onChange={(e) =>
                  setCurrentDisease({
                    ...currentDisease,
                    solution: e.target.value,
                  })
                }
              />
            </div>
            <Button
              variant="success"
              onClick={() => handleEditDisease(currentDisease.dis_id)}
              className="bg-green-500 text-white"
            >
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
}

export default Table5;
