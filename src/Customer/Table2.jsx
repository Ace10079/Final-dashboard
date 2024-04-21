import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Table2() {
  const [dropdownIndex, setDropdownIndex] = useState(null); // State to manage which dropdown is open
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

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

  // Function to handle delete action
  const handleDelete = () => {
    // Perform deletion action here
    // For now, let's just close the modal
    setShowModal(false);
  };

  return (
    <div
      className="bg-slate-100 border-solid border-2 rounded-lg m-3"
      style={{ maxHeight: "350px", overflow: "auto" }}
    >
      <div className="flex justify-between">
        <p className="p-2 font-bold font-[Century Gothic]">Customer List</p>
        <button className="mr-2 bg-green-500 pl-5 pr-5 rounded-lg font-bold mt-2 text-white">
          Add +
        </button>
      </div>

      <div className="p-1 mt-2">
        <Table responsive="sm" bordered>
          <thead>
            <tr>
              <th className="border">S.no</th>
              <th className="border">Customer ID</th>
              <th className="border">Customer Name</th>
              <th className="border">Date & Time</th>
              <th className="border">Phone Number</th>
              <th className="border">Email ID</th>
              <th className="border">
                <IconDotsVertical stroke={1} />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(7)].map((_, index) => (
              <tr key={index}>
                <td className="border">{index + 1}</td>
                <td className="border">#543568</td>
                <td className="border">Karan</td>
                <td className="border">20,Mar 04:23</td>
                <td className="border">00000 00000</td>
                <td className="border">minions10karan@gmail.com</td>
                <td className="border">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownIndex === index && (
                      <div
                        className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border"
                        style={{ left: "-5px" }}
                      >
                        <button className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          Edit
                        </button>
                        <div className="border-t border-black"></div>{" "}
                        {/* Black line separator */}
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
      <button   onClick={() => setShowModal(false)} className="text-white absolute left-[460px] top-[10px] font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full">X</button>
        <p className="text-2xl text-center pt-5 font-bold">Are you Sure</p>
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

export default Table2;
