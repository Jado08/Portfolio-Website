import React from 'react';
import myPic from '../assets/my_pic.jpg'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center p-8 overflow-hidden"> {/* Keep h-screen for full height */}
      <div className="flex flex-col items-center"> {/* Removed space-y-10 for tighter centering */}
        {/* Circular Image */}
        <div className="flex-shrink-0 mb-10"> {/* Added margin-bottom for spacing */}
          <img
            src={myPic} // Use the imported image here
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>

        {/* Text Box */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hi! I'm Julie-Ann Orcine</h1> {/* Adjust font size */}
          <p className="text-xl">
            An Information Technology Student Intern. This is my portfolio where you can find my resume, certifications, and projects. Feel free to explore!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;