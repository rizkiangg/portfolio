import React from "react";

function FreeMerch() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black flex items-center w-full h-[20vh] ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            <button className="text-white rounded-md cursor-pointer px-5 py-2 bg-gradient-to-r from-pink-300 to-cyan-300">
              Click here to get free merch!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FreeMerch;
