import React from "react";

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 text-white py-16 pt-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00ADB5] mb-10 text-center uppercase tracking-wider">
          Education
        </h2>

        {/* WCTM College */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[#00ADB5]">
          <h3 className="text-2xl font-semibold text-[#00ADB5]">WCTM College</h3>
          <p className="text-gray-400 text-sm">2024 - Present</p>
          <p className="mt-3 text-gray-300">
            Currently pursuing a degree in **Computer Science**, expanding my expertise in 
            **Software Development, Cloud Computing, and AI-driven technologies**.
          </p>
        </div>

        {/* Maharshi Dayanand University */}
        <div className="bg-[#374151] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[#66FCF1]">
          <h3 className="text-2xl font-semibold text-[#66FCF1]">Maharshi Dayanand University, Rohtak</h3>
          <p className="text-gray-400 text-sm">2020 - 2023</p>
          <p className="mt-3 text-gray-300">
            Earned a **Bachelor of Computer Applications (BCA)**, developing strong foundations in 
            **software engineering, data structures, and full-stack development**.
          </p>
        </div>

        {/* Coding Ninja */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[#00ADB5]">
          <h3 className="text-2xl font-semibold text-[#00ADB5]">Coding Ninja</h3>
          <p className="text-gray-400 text-sm">Jan 2023 - Dec 2023</p>
          <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
            <li>Mastered the **fundamentals of C++</li>
            <li>Gained deep knowledge in Data Structures & Algorithms**</li>
            <li>Completed a full-stack MERN development track</li>
          </ul>
        </div>

        {/* Higher Secondary - Adani Public School */}
        <div className="bg-[#374151] p-6 rounded-lg shadow-lg mb-8 border-l-4 border-[#FFBF00]">
          <h3 className="text-2xl font-semibold text-[#FFBF00]">Adani Public School, Kutch</h3>
          <p className="text-gray-400 text-sm">2018 - 2020</p>
          <p className="mt-3 text-gray-300">Completed **Higher Secondary Education** with a focus on **Science & Mathematics**.</p>
        </div>

        {/* Schooling - Aga Khan School */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg border-l-4 border-[#A8DF8E]">
          <h3 className="text-2xl font-semibold text-[#A8DF8E]">Aga Khan School, Kutch</h3>
          <p className="text-gray-400 text-sm">2006 - 2018</p>
          <p className="mt-3 text-gray-300">Completed **schooling** with a strong foundation in academics and extracurricular activities.</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
