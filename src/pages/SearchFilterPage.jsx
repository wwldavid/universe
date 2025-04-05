import React, { useState } from 'react';
import Filter from '@/components/Filter';
import { useNavigate } from 'react-router-dom'; 

const SearchPage = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [eventType, setEventType] = useState('');
  const [date, setDate] = useState('');

  const [filteredEvents, setFilteredEvents] = useState([]);

  const mockEvents = [
    { id: 1, title: 'Concert in Calgary', location: 'Calgary', type: 'Concert', date: '2025-04-10' },
    { id: 2, title: 'Workshop in Tokyo', location: 'Tokyo', type: 'Workshop', date: '2025-04-15' },
    { id: 3, title: 'Meetup in Vancouver', location: 'Vancouver', type: 'Meetup', date: '2025-04-20' },
  ];

  const applyFilters = () => {
    const results = mockEvents.filter(event => {
      return (
        (!location || event.location === location) && 
        (!eventType || event.type === eventType) && 
        (!date || event.date === date) 
      )
    })
    setFilteredEvents(results)
  }

  const resetFilters = () => {
    setLocation('');
    setEventType('');
    setDate('');
    setFilteredEvents([]);
  };

  return (
    <div className='min-h-screen bg-white px-6 py-4'>
        {/* Header */}
       <div className="flex items-center justify-between mt-20 mb-4">
        <h1 className='text-xl font-bold'>Search Filter</h1>
        <button
          onClick={() => navigate('/home')}
          className="text-gray-400 hover:text-black text-xl font-bold"
          aria-label="Close"
        >
        {"x"}
        </button>
      </div>
       <Filter />

       {/* Filter Options */}
       <div className='space-y-4 mt-6'>
         {/* Location Selector */}
         <div>
           <label className='block text-sm font-medium mb-1'>Location</label>
           <select
             value={location}
             onChange={(e)=> setLocation(e.target.value)}
             className='w-full border rounded px-3 py-2 text-sm'
             >
              <option value="">All</option>
              <option value="Calgary">Calgary</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Vancouver">Vancouver</option>
           </select>
         </div>

         {/* Event Type Selector */}
        <div>
          <label className="block text-sm font-medium mb-1">Event Type</label>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="">All</option>
            <option value="Concert">Concert</option>
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
          </select>
        </div>

        {/* Date Picker */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={resetFilters}
            className="text-sm px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            onClick={applyFilters}
            className="text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div> 
       </div>

       {/* Filtered Events List */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Results</h2>
        {filteredEvents.length === 0 ? (
          <p className="text-sm text-gray-500">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 mb-3 border rounded text-sm shadow-sm"
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-gray-500">
                {event.location} ・ {event.type} ・ {event.date}
              </div>
            </div>
          ))
        )}
      </div>


    </div>
  )
};

export default SearchPage;