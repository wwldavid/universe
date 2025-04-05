import React from "react";

const Message = ({ image, category, text }) => {
  return (
    <div className="mx-auto w-[380px] bg-white rounded-lg shadow-md flex items-center p-2">
    <img
      src={image}
      alt="Event"
      className="w-[73px] h-[73px] rounded-full object-cover"
    />
    
    <div className="flex flex-col justify-between ml-3 space-y-3">
      <button className="bg-yellow-400 text-white text-sm px-3 py-1 rounded-md inline-block self-start">
        {category}
      </button>

      <p className="text-sm text-gray-700">
        {text}
      </p>
    </div>
  </div>
  )
}

export default Message;