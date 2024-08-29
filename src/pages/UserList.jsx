import React, { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: '',
    username: '',
    department: '',
    position: '',
    gmail: '',
    contact: ''
  });

  // Sample data for the table
  const userData = [
    { id: 1, fullName: 'Sankalpa Shrestha', username: 'SankalpaSth', department: 'Web Development', position: 'Intern', gmail: 'joshisankalpa2@gmail.com', contact: '+977 9829656532' },
    
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., update state or send data to server)
    console.log(newUser);
    handleCloseModal();
  };

  return (
    <div className="p-4">
      <div className='flex justify-between mb-5'>
        <h2 className="text-lg font-semibold">Employee List</h2>
        <button 
          onClick={handleOpenModal}
          className='border-2 border-fuchsia-700 p-2 rounded-md font-semibold text-fuchsia-700 flex items-center gap-2'
        >
          <IoIosAddCircle className='text-fuchsia-800 text-2xl' /> Employee
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-6 text-left text-gray-700">#</th>
              <th className="py-3 px-6 text-left text-gray-700">Full Name</th>
              <th className="py-3 px-6 text-left text-gray-700">Username</th>
              <th className="py-3 px-6 text-left text-gray-700">Department</th>
              <th className="py-3 px-6 text-left text-gray-700">Position</th>
              <th className="py-3 px-6 text-left text-gray-700">Gmail</th>
              <th className="py-3 px-6 text-left text-gray-700">Contact</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 text-gray-700">{user.id}</td>
                <td className="py-3 px-6 text-gray-700">{user.fullName}</td>
                <td className="py-3 px-6 text-gray-700">{user.username}</td>
                <td className="py-3 px-6 text-gray-700">{user.department}</td>
                <td className="py-3 px-6 text-gray-700">{user.position}</td>
                <td className="py-3 px-6 text-gray-700">{user.gmail}</td>
                <td className="py-3 px-6 text-gray-700">{user.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Add New Employee</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={newUser.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={newUser.department}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Position</label>
                <input
                  type="text"
                  name="position"
                  value={newUser.position}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Gmail</label>
                <input
                  type="email"
                  name="gmail"
                  value={newUser.gmail}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={newUser.contact}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-fuchsia-800 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
