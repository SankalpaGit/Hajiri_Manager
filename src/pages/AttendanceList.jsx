import React from 'react'

const AttendanceList = () => {

  const attendanceData = [
    { id: 1, name: 'John Doe', date: '2024-08-27', day:'sunday', department:'Web development' ,checkIn: '09:00 AM', checkOut: '05:00 PM', totalHours: '8h' },
    

  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Attendance List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-3 px-6 text-left text-gray-700">#</th>
              <th className="py-3 px-6 text-left text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-gray-700">Date</th>
              <th className="py-3 px-6 text-left text-gray-700">Day</th>
              <th className="py-3 px-6 text-left text-gray-700">Department</th>
              <th className="py-3 px-6 text-left text-gray-700">Check-In</th>
              <th className="py-3 px-6 text-left text-gray-700">Check-Out</th>
              <th className="py-3 px-6 text-left text-gray-700">Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((entry) => (
              <tr key={entry.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6 text-gray-700">{entry.id}</td>
                <td className="py-3 px-6 text-gray-700">{entry.name}</td>
                <td className="py-3 px-6 text-gray-700">{entry.date}</td>
                <td className="py-3 px-6 text-gray-700">{entry.day}</td>
                <td className="py-3 px-6 text-gray-700">{entry.department}</td>
                <td className="py-3 px-6 text-gray-700">{entry.checkIn}</td>
                <td className="py-3 px-6 text-gray-700">{entry.checkOut}</td>
                <td className="py-3 px-6 text-gray-700">{entry.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AttendanceList
