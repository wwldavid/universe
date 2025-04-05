import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from '@/pages/Welcome';
import HomePage from '@/components/HomePage';
import Notification from '@/components/Notification';
import EventDetail from '@/components/EventDetail';
import SearchPage from './pages/SearchFilterPage';



function App() {
  return (
    <div className="max-w-md mx-auto">
      <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/event/:id" element={<EventDetail />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
    </div>
  );
}

export default App;
