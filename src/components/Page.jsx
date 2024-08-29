// Page.jsx
import React from 'react';
import Sidebar from './SideBar';
import Navbar from './Navbar';

const Page = ({ children }) => {
  return (
    <div className='flex w-full justify-between'>
      <div>
        <Sidebar />
      </div>
      <div className='w-10/12'>
        <Navbar />
        <main className='p-3'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Page;
