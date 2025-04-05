import React from 'react';
import { Search, AlignJustify } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Filter = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search'); 
  };

  return (
    <div className="px-6 py-2">
      <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3"
      onClick={handleSearchClick}>
        <div className="flex items-center flex-1">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Find events by location, type, date"
            className="bg-transparent outline-none border-none w-full text-sm text-gray-600 pointer-events-none"
            readOnly
          />
        </div>
        <AlignJustify className="text-gray-500 w-5 h-5" />
      </div>
    </div>
  );
}

export default Filter;