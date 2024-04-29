import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import { useNavigate } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Table5() {
  const history = useNavigate();

  const goToAccount = () => {
    history('/disease_edit'); // Assuming '/profile' is the path to your Account component
  };
  const add = useNavigate();
  const goToAdd = () => {
    add('/add_disease');
  };
  const [dropdownIndex, setDropdownIndex] = useState(null);
   // State to manage which dropdown is open
   const [showModal, setShowModal] = useState(false);
   const handleDelete = () => {
    // Perform deletion action here
    // For now, let's just close the modal
    setShowModal(false);
  };


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
    <div
      className="bg-slate-100 border-solid border-2 rounded-lg m-3"
      style={{ maxHeight: "500px", overflow: "auto" }}
    >
      <div className="flex justify-between">
        <p className="p-2 font-bold font-[Century Gothic]">
          Disease & Solution
        </p>
        <button onClick={goToAdd} className="mr-2 bg-green-500 pl-5 pr-5 rounded-lg font-bold mt-2 text-white">
          Add +
        </button>
      </div>
      <div className="p-2 mt-1">
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
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td className="border text-center">{index + 1}</td>
                <td className="border text-center">#543568</td>
                <td className="border text-center">Lorem ipsum</td>
                <td className="border text-center">Lorem ipsum</td>
                <td className="border text-center">Lorem ipsum</td>
                <td className="border text-center">
                  <div className="relative">
                    <IconDotsVertical
                      stroke={1}
                      onClick={() => toggleDropdown(index)}
                    />
                    {dropdownIndex === index && (
                      <div className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border" style={{ left: '-5px' }}>
                        <button onClick={goToAccount} className="block w-full text-left px-4 py-1 hover:bg-gray-200">
                          View
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
      <button
          onClick={() => setShowModal(false)}
          className="text-white absolute lg:left-[460px] lg:top-[10px] right-[4px] top-[4px] font-bold bg-green-600 pl-[7px] pr-2 pt-0.5 pb-0.5 rounded-full"
          style={{ width: "24px", height: "24px", lineHeight: "1" }}
        >
          X
        </button>

        <p className="text-2xl text-center pt-5 font-bold">Are you Sure</p>
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
          <Button className="pl-5 pr-5" variant="success" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Table5;
