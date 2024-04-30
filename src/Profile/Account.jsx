import React from 'react'

function Account() {
  return (
    <div>
    <div className='flex flex-col gap-2 border rounded-lg lg:ml-24 lg:mt-2 lg:w-4/5 mt-10 ml-5 mr-5 bg-white'>
          <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
          </div>
          <div className='border rounded-lg m-2 '>
          <input
                      type="text"
                      className="w-96 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 text-black border-black"
                      placeholder="Profile Name"
                  />
          </div>
          <div className='border rounded-lg m-2'>
          <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Phone Number"
                  />
          </div>
          <div className='border rounded-lg m-2'>
          <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                      placeholder="Email ID"
                  />
          </div>
          <div className='flex justify-center mb-2 ' >
              <button className='bg-green-800 pl-28 pr-28 pt-1 pb-1 text-white border rounded-lg'>
                  Save
              </button>
          </div>
      </div>
  </div>
  )
}

export default Account
