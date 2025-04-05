import React from 'react';
import headerImg from "@/assets/images/header.png";
import bellImg from "@/assets/images/bell.png";
import setImg from "@/assets/images/set.png";
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <div className="flex justify-between items-center px-6 pb-3">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
          <img 
            src={headerImg}
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg italic">Hello, Crystal!</h2>
      </div>
      
      <div className="flex items-center gap-4">
      <Link to="/notifications">
        <div className="relative w-12 h-12 flex items-center justify-center bg-[#f6f3fa] rounded-full">
          <img src={bellImg} alt="Bell icon" className="w-8 h-8 object-cover" />
          <div className="absolute -top-4 -right-3 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
            <span className="text-white text-xs">3</span>
          </div>
        </div>
      </Link>
        <div className="w-12 h-12 flex items-center justify-center bg-[#f6f3fa] rounded-full">
        <img src={setImg} alt="Settings icon" className="w-8 h-8 object-cover" />
        </div>
        </div>
      </div>
  );
}

export default UserHeader;