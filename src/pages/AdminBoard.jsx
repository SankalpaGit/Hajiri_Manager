import React from 'react';
import { FaUsers, FaCalendarCheck, FaCalendarTimes, FaExclamationCircle, FaPlus, FaList } from 'react-icons/fa';

const AdminBoard = () => {
  // Sample data for the cards
  const cardData = [
    { title: 'Total Employees', value: '6', icon: <FaUsers className="text-3xl" />, color: 'bg-blue-600' },
    { title: 'Total Present', value: '52', icon: <FaCalendarCheck className="text-3xl" />, color: 'bg-green-600' },
    { title: 'Total Absent', value: '0', icon: <FaCalendarTimes className="text-3xl" />, color: 'bg-orange-600' },
    { title: 'Leave Appeal', value: '1', icon: <FaExclamationCircle className="text-3xl" />, color: 'bg-red-600' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {cardData.map((card, index) => (
          <div key={index} className={`p-4 rounded-lg shadow-lg ${card.color} text-white`}>
            <div className="flex items-center mb-4">
              {card.icon}
              <h2 className="text-lg font-semibold ml-4">{card.title}</h2>
            </div>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button className="flex items-center p-4 rounded-lg shadow-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
            <FaPlus className="text-2xl mr-3" />
            Add New Employee
          </button>
          <button className="flex items-center p-4 rounded-lg shadow-md bg-green-500 text-white hover:bg-green-600 transition duration-200">
            <FaList className="text-2xl mr-3" />
            View Present Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
