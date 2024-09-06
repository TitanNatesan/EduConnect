import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-5 shadow-md">
        <h2 className="text-xl font-bold mb-6">Infinity</h2>
        <nav>
          <ul>
            <li className="mb-4"><a href="#" className="font-semibold text-gray-700">Dashboard</a></li>
            <li className="mb-4"><a href="#" className="text-gray-500">Profile</a></li>
            <li className="mb-4"><a href="#" className="text-gray-500">Courses</a></li>
            <li className="mb-4"><a href="#" className="text-gray-500">Messages</a></li>
            <li className="mb-4"><a href="#" className="text-gray-500">Settings</a></li>
          </ul>
        </nav>
        <div className="mt-20">
          <img src="/path/to/image.svg" alt="Learners" />
          <p className="text-sm text-gray-600 mt-4">32 million learners around the world</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between">
          {/* Popular Courses */}
          <section className="w-3/5">
            <h2 className="text-2xl font-bold mb-6">Popular courses</h2>
            <div className="grid grid-cols-2 gap-6">
              <CourseCard 
                title="Design Thinking: The Beginner's Guide" 
                booked="23%" 
                days="07" />
              <CourseCard 
                title="Become a UX Designer from Scratch" 
                booked="85%" 
                days="07" />
              <CourseCard 
                title="Psychology and Web Design" 
                booked="55%" 
                days="07" />
            </div>
          </section>

          {/* Weekly News */}
          <section className="w-1/3 bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Weekly news</h2>
            <img src="/path/to/news-image.svg" alt="News" className="mb-4" />
            <div className="flex items-center">
              <img src="/path/to/user-avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
              <div className="ml-4">
                <p className="font-semibold">Subash Chandra</p>
                <p className="text-gray-500 text-sm">Head of Design</p>
              </div>
            </div>
            <div className="mt-4">
              <p>24 Courses Completed</p>
              <p>22 Certificates Earned</p>
              <p>93 Courses In Progress</p>
              <p>37 Course Discussions</p>
            </div>
          </section>
        </div>

        {/* My Courses */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-6">My courses</h2>
          <div className="grid grid-cols-2 gap-6">
            <CourseListItem 
              title="Adobe Photoshop CC 2019" 
              progress="8.9" />
            <CourseListItem 
              title="The Beginner's Guide to Color Theory" 
              progress="7.8" />
            <CourseListItem 
              title="Design-Led Strategy" 
              progress="5.4" />
            <CourseListItem 
              title="iOS App Development with Swift 5" 
              progress="9.3" />
            <CourseListItem 
              title="Web Design for Everybody" 
              progress="9.0" />
          </div>
        </section>
      </div>
    </div>
  );
};

const CourseCard = ({ title, booked, days }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex justify-between items-center">
      <p className="text-gray-500">Booked: {booked}</p>
      <p className="text-gray-500">Days: {days}</p>
    </div>
  </div>
);

const CourseListItem = ({ title, progress }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-500">Progress: {progress}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Course</button>
  </div>
);

export default Dashboard;
