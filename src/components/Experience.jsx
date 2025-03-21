import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0F2648] text-white py-16 pt-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00ADB5] mb-10 text-center uppercase tracking-wider">Experience</h2>

        {/* Coding Ninja Experience */}
        <div className="bg-[#1C3D5A] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[#00ADB5]">
          <h3 className="text-2xl font-semibold text-[#00ADB5]">Trainee, Coding Ninja</h3>
          <p className="text-gray-300 text-sm">3 Months</p>
          <p className="mt-3 text-gray-200">
            As a <strong>trainee</strong>, I guided peers in <strong>C++ and Data Structures</strong>, addressing doubts, 
            leading learning sessions, and fostering a <strong>positive learning environment</strong> 
            through effective communication.
          </p>
        </div>

        {/* Freelance Experience */}
        <div className="bg-[#16304B] p-6 rounded-lg shadow-lg border-l-4 border-[#66FCF1]">
          <h3 className="text-2xl font-semibold text-[#66FCF1]">Freelance Projects</h3>
          <p className="mt-3 text-gray-200">
            Worked on multiple freelance projects, including:
          </p>
          <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
            <li>🚛 <span className="text-[#FFBF00] font-semibold">Yard Management System</span> – Streamlined logistics tracking</li>
            <li>📊 <span className="text-[#FF6F61] font-semibold">Activity Tracker</span> – Built a real-time tracking application</li>
            <li>🛒 <span className="text-[#A8DF8E] font-semibold">E-commerce Platform</span> – Developed an online shopping system</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
