import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { api } from "./src/Host";
import "./src/index.css";

function API() {
  const [apis, setApis] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedApi, setSelectedApi] = useState(null);
  const [link, setLink] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showNotification, setShowNotification] = useState(false);

  const displayNotification = (message, type) => {
    setNotification({ message, type });
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${api}/get_apis`);
      if (response.status === 200) {
        setApis(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  const handleUpdateAPI = async () => {
    try {
      const response = await axios.put(`${api}/update_api`, {
        api_id: selectedApi.api_id,
        link: link,
      });
      if (response.status === 200) {
        displayNotification("API updated successfully", "success");
        setApis(apis.map(api => api.api_id === selectedApi.api_id ? { ...api, link: link } : api));
        setShowUpdateModal(false);
      }
    } catch (error) {
      displayNotification("Error updating API", "error");
    }
  };

  const handleShowUpdateModal = (api) => {
    setSelectedApi(api);
    setLink(api.link);
    setShowUpdateModal(true);
  };

  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="bg-white border-solid border-2 rounded-lg m-3"
      style={{ maxHeight: "200px", overflow: "auto" }}
    >
      <div className="flex justify-between">
        <p className="p-2 font-bold font-[Century Gothic]">API List</p>
      </div>
      <div className="p-2">
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border text-center">API ID</th>
              <th className="border text-center">API Link</th>
              <th className="border text-center">
                <IconDotsVertical stroke={1} />
              </th>
            </tr>
          </thead>
          <tbody>
            {apis.map((api, index) => (
              <tr key={api.api_id}>
                <td className="border text-center">{api.api_id}</td>
                <td className="border text-center">{api.link}</td>
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
                          onClick={() => handleShowUpdateModal(api)}
                          className="block w-full text-left px-4 py-1 hover:bg-gray-200"
                        >
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

      {/* Modal for updating API */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} centered>
        <div className="flex flex-col items-center p-4">
          <h2 className="font-bold text-xl mb-4">Update API</h2>
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
