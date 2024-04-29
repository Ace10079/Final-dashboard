import React from "react";

function Edit() {
  return (
    
    <div className="flex justify-center ">
      <div className="border lg:w-1/2  lg:mt-20 mt-[170px] relative">
        <p className=" font-bold mt-20 text-3xl mb-10 text-center">
          Edit Customer list
        </p>
        <button className="text-white absolute top-4 right-4 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full">
          X
        </button>
        <div className="flex flex-col justify-center items-center">
        <div className="border rounded-lg m-2 w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Customer Name"
          />
        </div>
        <div className="border rounded-lg m-2 w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Phone Number"
          />
        </div>
        <div className="border rounded-lg m-2 w-96">
          <input
            type="text"
            className=" px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
            placeholder="Email ID"
          />
        </div>
        <button className="bg-green-800 pl-28 pr-28 pt-1 pb-1  mb-10 mt-10 text-white border rounded-lg">
          Save
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Edit;
