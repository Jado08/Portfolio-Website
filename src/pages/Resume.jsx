import React from 'react';
import resumeImage from '../assets/resume.png'; // Adjust the path if necessary
import resumePDF from '../assets/Resume_Orcine.pdf'; // Import the PDF file

const Resume = () => {
  const handleViewResume = () => {
    // Open the Google Drive link to view the resume
    window.open('https://drive.google.com/file/d/124_A8lDeXurXZWhjyO7Ngx5ubtYzrkG5/view?usp=sharing', '_blank');
  };

  const handleDownload = () => {
    // Download the resume PDF
    const link = document.createElement('a');
    link.href = resumePDF; // Use the imported PDF path
    link.download = 'Resume_Orcine.pdf'; // The name the file will be downloaded as
    link.click();
  };

  return (
    <div className="flex items-center justify-center h-screen mt-16"> {/* Added mt-16 for margin */}
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">Resume</h2> {/* Added heading */}
        {/* Enlarge the image by adjusting the height */}
        <img src={resumeImage} alt="My Resume" className="h-[600px] w-auto mb-4 mx-auto" /> 
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleViewResume}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Resume
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
