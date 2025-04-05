import React from 'react';
import { useNavigate } from "react-router-dom";

const EventCard = ({ id, title, date, image }) => {
  const navigate = useNavigate();
  return (
    <div className="relative flex-shrink-0 w-[140px] h-[200px] rounded-3xl overflow-hidden mr-4 shadow-md">
      <img 
        src={image}
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black bg-opacity-50 p-3">
        <h3 className="text-white font-medium text-sm">{title}</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-white text-xs">{date}</span>
          <button className='bg-yellow-400 rounded-full w-6 h-6 flex items-center justify-center text-white' onClick={() => navigate(`/event/${id}`)}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

const EventsSection = ({ title, events }) => {
  return (
    <div className="px-6 py-3">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="flex overflow-x-auto pb-4 scrollbar-hide">
        {events.map((event, index) => (
          <EventCard key={index} id={event.id} title={event.title} date={event.date} image={event.image} />
        ))}
      </div>
    </div>
  );
}

export default EventsSection;