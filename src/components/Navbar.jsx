import React, { useState } from 'react';
import { Compass, Calendar, Home, Users, MessageCircle } from 'lucide-react';

const NavItem = ({ icon: Icon, label, isActive, onClick, isFirst, isLast }) => {
  return (
    <div 
      className={`flex flex-col items-center relative transition-all duration-300 ${isActive ? 'mt-[-28px]' : ''}`}
      onClick={onClick}
    >
      {/* 伪元素流线形边缘效果 */}
      
        <>
          {isActive && !isFirst && (
        <div className="absolute top-[16px] left-[-15px] w-[15px] h-[15px] bg-[#f6f3fa] rounded-tr-[20px] shadow-[3px_-6px_0_1px_white]"></div>
      )}
          {isActive && !isLast && (
        <div className="absolute top-[16px] right-[-15px] w-[15px] h-[15px] bg-[#f6f3fa] rounded-tl-[20px] shadow-[-3px_-6px_0_1px_white]"></div>
      )}
        </>
    
      <div 
        className={`
          flex items-center justify-center transition-all duration-300
          ${isActive ? 'w-14 h-14 rounded-full bg-dark-purple border-4 border-navbar-bg shadow-lg' : 'w-6 h-6 text-text-gray'}
        `}
      >
        <Icon className={isActive ? 'text-white' : 'text-text-gray'} size={isActive ? 24 : 20} />
      </div>
      <span className={`text-xs mt-1 ${isActive ? 'font-medium' : 'text-text-gray'}`}>{label}</span>
    </div>
  );
};

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  
  const navItems = [
    { label: 'Explore', icon: Compass },
    { label: 'My Event', icon: Calendar },
    { label: 'Home', icon: Home },
    { label: 'My Group', icon: Users },
    { label: 'Chat', icon: MessageCircle }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[15vh] flex items-end ">
      <div className="h-[75px] bg-[#f6f3fa] rounded-t-[55px] w-full">
        <div className="flex justify-around items-end px-2 pt-3 pb-6">
          {navItems.map((item,index) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.label}
              isFirst={index === 0} // 是否是第一个 item
              isLast={index === 4} 
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;