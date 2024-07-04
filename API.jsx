import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { api } from "./src/Host";
import "bootstrap/dist/css/bootstrap.min.css";
import "./src/index.css"; 

function API() {
  const [apiId, setApiId] = useState(localStorage.getItem("apiId") || "");
  const [link, setLink] = useState(localStorage.getItem("link") || "");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const displayNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleAddAPI = async () => {
    try {
      const response = await axios.post(`${api}/add_api`, {
        api_id: apiId,
        link: link,
      });
      if (response.status === 201) {
        displayNotification("API added successfully", "success");
      }
    } catch (error) {
      displayNotification("Error adding API", "error");
    }
  };

  const handleUpdateAPI = async () => {
    try {
      const response = await axios.put(`${api}/update_api`, {
        api_id: apiId,
        link: link,
      });
      if (response.status === 200) {
        displayNotification("API updated successfully", "success");
        setShowUpdateModal(false);
      }
    } catch (error) {
      displayNotification("Error updating API", "error");
    }
  };

  useEffect(() => {
    localStorage.setItem("apiId", apiId);
    localStorage.setItem("link", link);
  }, [apiId, link]);

  return (
    <div className="flex flex-col items-center justify-center bg-white border rounded-lg p-4 w-72 ml-5">
      <p className="font-bold text-3xl mt-2">API</p>
      <div className="mt-2 w-full">
        <input
          type="text"
          placeholder="Enter API"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-opacity-50 rounded-md"
          value={apiId}
          onChange={(e) => setApiId(e.target.value)}
        />
      </div>
      <div className="mt-2 w-full">
        <input
          type="text"
          placeholder="Enter API Link"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-opacity-50 rounded-md"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <button
        className="bg-green-500 mt-4 pl-5 pr-5 pt-0.5 pb-0.5 text-white border font-bold rounded-lg"
        onClick={handleAddAPI}
      >
        Add+
      </button>
      <button
        className="bg-blue-500 mt-4 pl-5 pr-5 pt-0.5 pb-0.5 text-black border font-bold rounded-lg"
        onClick={() => setShowUpdateModal(true)}
      >
        Update
      </button>

      {/* Modal for updating API */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
        <div className="flex flex-col items-center p-4">
          <h2 className="font-bold text-xl mb-4">Update API</h2>
          <input
            type="text"
            placeholder="Enter API"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-opacity-50 rounded-md mb-2"
            value={apiId}
            onChange={(e) => setApiId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter New API Link"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-opacity-50 rounded-md mb-2"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            className="bg-blue-500 mt-4 pl-5 pr-5 pt-0.5 pb-0.5 text-black border font-bold rounded-lg"
            onClick={handleUpdateAPI}
          >
            Update API
          </button>
        </div>
      </Modal>

      {/* Notification */}
      <div
        className={`notification-container ${
          showNotification ? "notification-show" : ""
        } ${notification.type === "success" ? "notification-success" : "notification-error"}`}
      >
        <div className="notification-content">{notification.message}</div>
      </div>
    </div>
  );
}

export default API;
