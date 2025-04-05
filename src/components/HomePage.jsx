import React from 'react';
import UserHeader from './UserHeader';
import Filter from './Filter';
import EventsSection from './EventsSection';
import Navbar from './Navbar';
import tangoImg from "@/assets/images/tango.png";
import bookImg from "@/assets/images/book.png";
import iceball from "@/assets/images/iceball.png";
import tangoImg2 from "@/assets/images/tango2.png";
import bookImg2 from "@/assets/images/book2.png";
import iceball2 from "@/assets/images/iceball2.png";
import tangoImg3 from "@/assets/images/tango3.png";
import bookImg3 from "@/assets/images/book3.png";

const HomePage = () => {
  // Sample data for events
  const yourEvents = [
    { id: 1, title: 'Tango Night', date: 'April 15', image: tangoImg },
    { id: 2, title: 'Jazz Festival', date: 'April 22', image: iceball },
    { id: 3, title: 'Book Club', date: 'May 3', image: bookImg },
    { id: 4, title: 'Yoga Retreat', date: 'April 25', image: tangoImg2 },
  ];
  
  const topEvents = [
    { id: 5, title: 'Tech Meetup', date: 'April 18', image: tangoImg3 },
    { id: 6, title: 'Food Festival', date: 'April 20', image: bookImg2 },
    { id: 7, title: 'Art Exhibition', date: 'April 27', image: iceball2 },
    { id: 8, title: 'Movie Night', date: 'May 5', image: bookImg3 }
  ];

  return (
    <div className="min-h-screen bg-[#a084ca] flex items-end">
      {/* Main content area with rounded top */}
      <div className="pt-12 h-[95vh] bg-white rounded-t-[55px] mt-[54px] overflow-y-auto pb-[129px]">
        <UserHeader />
        <Filter />
        <EventsSection title="Your Events" events={yourEvents} />
        <EventsSection title="Top Events" events={topEvents} />
        <Navbar />
      </div>
      

      
    </div>
  );
}

export default HomePage;