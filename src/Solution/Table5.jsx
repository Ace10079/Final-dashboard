import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { IconDotsVertical } from "@tabler/icons-react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Table5() {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleDelete = () => {
    setShowModal(false);
  };
  const handleEdit = () => {
    setEditModal(false);
  };
  const handleAdd = () => {
    setAddModal(false);
  };
  const toggleDropdown = (index) => {
    if (dropdownIndex === index) {
      setDropdownIndex(null);
    } else {
      setDropdownIndex(index);
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
                      <div
                        className="absolute bg-white shadow-md rounded-lg mt-2 py-1 w-20 z-10 border"
                        style={{ left: "-5px" }}
                      >
                        <button
                          onClick={() => setShowEditModal(true)}
                          className="block w-full text-left px-4 py-1 hover:bg-gray-200"
                        >
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

      <Modal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        centered
      >
        <div className="flex justify-center p-2">
          <div className="border  w-[450px] relative border-white rounded">
            <p className="font-bold mt-10 text-3xl mb-10 text-center">
              Edit Disease & Solution
            </p>
            <button className="text-white absolute top-2 right-[-10px] font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full" onClick={() => setShowEditModal(false)}>
              X
            </button>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-lg m-2 w-96">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Disease Name"
                />
              </div>
              <div className="border rounded-lg m-2 w-96 h-24">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Disease"
                />
              </div>
              <div className="border rounded-lg m-2 w-96 h-24">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Solution"
                />
              </div>
              <div className="flex lg:gap-2 lg:flex-row flex-col gap-3">
                <button className=" pl-20 pr-20 pt-2 pb-2 lg:mb-10 lg:mt-10 text-green-800 border rounded-lg border-black">
                  Delete
                </button>
                <button className="bg-green-800 pl-20 pr-20 pt-2 pb-2 mb-10 lg:mt-10  text-white border rounded-lg">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <div className="flex justify-center ">
          <div className="border  relative border-white rounded">
            <p className=" font-bold mt-10 text-3xl mb-10 text-center">
              Add Disease & Solution
            </p>
            <button className="text-white absolute top-4 right-[-30px] font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full" onClick={() => setShowAddModal(false)}>
              X
            </button>
            <div className="flex flex-col justify-center items-center">
              <div className="border rounded-lg m-2 w-96">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Disease Name"
                />
              </div>
              <div className="border rounded-lg m-2 w-96 h-24">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Disease Solution"
                />
              </div>
              <div className="border rounded-lg m-2 w-96 h-24">
                <input
                  type="text"
                  className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                  placeholder="Solution"
                />
              </div>
              <button className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Table5;
