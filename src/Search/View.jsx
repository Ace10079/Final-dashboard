import React from "react";

function View() {
  return (
    <div className="flex justify-center h-full overflow-y-hidden">
      <div className="border rounded flex flex-col lg:w-1/2 gap-2 h-full">
        <img src="image.jpg" alt="" className="rounded w-full h-[220px]" />
        <p className="text-black font-bold font-[Century Gothic] pl-2 text-2xl">Kavya</p>
        <p className="font-bold text-[green] font-[Century Gothic] text-xl pl-2">
          Leaf Spot
        </p>
        <p className="text-[green] font-[Century Gothic] text-xl pl-2">Description</p>
        <p className="pl-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <p className="text-[green] font-[Century Gothic] pl-2 text-xl">Solution</p>
        <p className="pl-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <button className="pl-20 pr-28 pt-1 pb-1 mt-1 w-3 text-[green] border rounded-lg lg:ml-48 ml-24 lg:mb-3 mb-10 lg:mt-0 mt-3 hover:bg-[green] hover:text-white">
          Delete
        </button>
      </div>
    </div>
  );
}

export default View;
