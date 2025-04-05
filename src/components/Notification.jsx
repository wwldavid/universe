import React from 'react';
import { useNavigate } from "react-router-dom";
import Message from './Message';

import image1 from '@/assets/images/message1.png';
import image2 from '@/assets/images/message2.png';
import image3 from '@/assets/images/message3.png';
import image4 from '@/assets/images/message4.png';
import image5 from '@/assets/images/message5.png';


const Notification = () => {
  
  const navigate = useNavigate(); 

  const messages = [
    { id: 1, image: image1, category: "General", text: "Sunday Coffee Chat is now open for RSVP!" },
    { id: 2, image: image2, category: "Reminder", text: "Don't forget the Yoga class at 5 PM!" },
    { id: 3, image: image3, category: "Friends", text: "Alex just sent you a friend request!" },
    { id: 4, image: image4, category: "RSVP", text: "Join our Book Club this Saturday!" },
    { id: 5, image: image5, category: "Update", text: "New feature added to our app!" },
  ];
  

  return (
    <div className="min-h-screen bg-[#a084ca] flex items-end">
      {/* Main content area with rounded top */}
      <div className="pt-12 h-[95vh] bg-white rounded-t-[55px] mt-[54px] overflow-y-auto pb-[129px] w-full">
        <div className="flex flex-col gap-3 px-6 pb-3">
           <div className='flex justify-center'>
            <button className='bg-yellow-400 rounded-full w-6 h-6 absolute left-4 flex items-center justify-center text-white' onClick={() => navigate("/home")}>{"<"}</button>
            <h1 className='text-xl font-semibold text-center'>Notifications</h1>
           </div>
            <div className='flex justify-center gap-3'>
              <button className="border border-yellow-400 rounded-md px-1">All</button>
              <button className="border border-yellow-400 rounded-md px-1">General</button>
              <button className="border border-yellow-400 rounded-md px-1">Reminder</button>
              <button className="border border-yellow-400 rounded-md px-1">RSVP</button>
              <button className="border border-yellow-400 rounded-md px-1">Friends</button>
            </div>
         </div>

         <div className="mt-6 flex flex-col gap-6 pb-3">
          {messages.map((msg) => (
            <Message 
              key={msg.id} 
              image={msg.image} 
              category={msg.category} 
              text={msg.text} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notification;