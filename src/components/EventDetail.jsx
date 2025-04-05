import React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import { allEvents } from "@/data/eventsData";
import locationIcon from '@/assets/icons/location.png';
import timeIcon from '@/assets/icons/time.png';
import priceIcon from '@/assets/icons/price.png';
import hostIcon from '@/assets/icons/group.png';
import icon1 from '@/assets/icons/icon1.png'; 
import icon2 from '@/assets/icons/icon2.png';

const EventDetail = () => { 
const {id} = useParams(); 
const navigate = useNavigate();

const event = allEvents.find(e => e.id === id);
const image = event?.image;

  return (
    <div className="min-h-screen bg-[#a084ca] flex items-end">
      {/* Main content area with rounded top */}
      <div className="pt-8 h-[95vh] bg-white rounded-t-[55px] mt-[54px] overflow-y-auto pb-[129px] w-full">
       {/* 第一部分：返回按钮和右侧图标 */}
       <div className="flex justify-between items-center px-6">
          <button
            className="bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-black text-3xl"
            onClick={() => navigate("/home")}
          >
            {"<"}
          </button>
          <div className="flex gap-3">
            <img src={icon1} alt="icon1" className="w-6 h-6" />
            <img src={icon2} alt="icon2" className="w-6 h-6" />
          </div>
        </div>
        {/* 第二部分：长方形图片 */}
        <div className="px-6 mt-4">
          <img
            src={image}
            alt="Event"
            className="w-full h-60 object-cover rounded-lg"
          />
        </div>
             {/* 第三部分：活动详细信息 */}
             <div className="px-6 mt-4 space-y-4 text-sm text-gray-700">
          <h2 className="text-center text-xl font-bold text-black">{event?.title || "Event Title"}</h2>

          <div className="flex gap-3 items-start">
            <img src={locationIcon} alt="location" className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Downtown Arts Hub – Studio B</div>
              <div className="text-xs text-gray-500">(123 4th Avenue SW, Calgary, AB)</div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <img src={timeIcon} alt="time" className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Saturday, April 20, 2025</div>
              <div className="text-xs text-gray-500">7:00 PM – 10:30 PM</div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <img src={priceIcon} alt="price" className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Free with RSVP</div>
              <div className="text-xs text-gray-500">$10 at the door without RSVP</div>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <img src={hostIcon} alt="host" className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">Argentine Tango Masters</div>
              <div className="text-xs text-gray-500">Verified Host</div>
            </div>
          </div>

          <p className="text-sm text-gray-700">
            see more{" "}
            <span className="underline text-black">24 views</span>
            <span className="ml-1">{">"}</span>
          </p>
        </div>
        {/* 第四部分：按钮 */}
        <div className="px-8 mt-16 flex justify-between gap-3">
          <button className="flex-1 border border-[#5A3E9C] text-[#5A3E9C] py-2 rounded-lg font-semibold flex flex-col items-center justify-center">
             <span>Message</span>
             <span>Attendees</span>
          </button>
          <button className="flex-1 bg-[#5A3E9C] text-white py-2 rounded-lg font-semibold text-xl">
            RSVP
          </button>
        </div>



      </div>
    </div>
  );
}

export default EventDetail;