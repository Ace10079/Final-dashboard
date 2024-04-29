import React from 'react'

function EditSoultion() {
  return (
    <div>
       <div className="flex justify-center ">
      <div className="border lg:w-1/2 w-[400px]  lg:mt-3 mt-[170px] relative border-black rounded">
        <p className="font-bold mt-10 text-3xl mb-10 text-center">
          Edit Disease & Solution
        </p>
        <button className="text-white absolute top-4 right-4 font-bold bg-green-600 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full">
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
        <div className='flex lg:gap-2 lg:flex-row flex-col gap-3'>
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
    </div>
  )
}

export default EditSoultion
