import React from 'react';
import xyz1 from '../assets/projects/xyz1.png';
import xyz2 from '../assets/projects/xyz2.png';
import cirrhosis1 from '../assets/projects/cirrhosis1.png';
import cirrhosis2 from '../assets/projects/cirrhosis2.png';
import kodigz from '../assets/projects/kodigz.png';
import ToDoList from '../assets/projects/ToDoList.png';
import wqma from '../assets/projects/wqma.png';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start h-auto mt-0 overflow-hidden p-6">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>

      {/* Project 1 */}
      <div className="max-w-4xl mb-12">
        <h3 className="text-2xl font-bold">Sales and Inventory System of XYZ Company</h3>
        <p className="mb-4">
          In this online website, it used PHP to create the dashboard, which displays two pictures and highlights the basic functionalities for the user.
        </p>
        <div className="flex justify-center space-x-4">
          <img src={xyz1} alt="Sales and Inventory System 1" className="max-h-[300px] object-contain" />
          <img src={xyz2} alt="Sales and Inventory System 2" className="max-h-[300px] object-contain" />
        </div>
      </div>

      {/* Project 2 */}
      <div className="max-w-4xl mb-12">
        <h3 className="text-2xl font-bold">Cirrhosis Prediction Dataset</h3>
        <p className="mb-4">
          In this dataset, it used the Exploratory tool to replace NA values and display graphs, while Orange was used for analyzing the problem through the Test and Score, Confusion Matrix, and Prediction Test.
        </p>
        <div className="flex justify-center space-x-4">
          <img src={cirrhosis1} alt="Cirrhosis Prediction Dataset 1" className="max-h-[300px] object-contain" />
          <img src={cirrhosis2} alt="Cirrhosis Prediction Dataset 2" className="max-h-[300px] object-contain" />
        </div>
      </div>

      {/* Project 3 */}
      <div className="max-w-4xl mb-12 text-center"> {/* Centering the content */}
        <h3 className="text-2xl font-bold">Kodigz</h3>
        <p className="mb-4">
          In this mobile app, it used the Kotlin language to serve as a convenient note-taking tool designed for casual users who want to keep track of information. It allows users to record, write, or jot down notes.
        </p>
        <img src={kodigz} alt="Kodigz" className="max-h-[300px] object-contain mx-auto" /> {/* Centered */}
      </div>

      {/* Project 4 */}
      <div className="max-w-4xl mb-12 text-center"> {/* Centering the content */}
        <h3 className="text-2xl font-bold">Water Quality Monitoring System</h3>
        <p className="mb-4">
          In this online water quality report monitoring system, we used Laravel Blade for both the front end and back end. The database for the system is managed using XAMPP, and our hosting provider for the domain is Hostinger.
        </p>
        <img src={wqma} alt="Water Quality Monitoring System" className="max-h-[300px] object-contain mx-auto" /> {/* Centered */}
      </div>

      {/* Project 5 */}
      <div className="max-w-4xl mb-12 text-center"> {/* Centering the content */}
        <h3 className="text-2xl font-bold">To Do List</h3>
        <p className="mb-4">
          In this To Do List application, I used JavaScript for the functionalities and Bootstrap for the design. It can create, edit, and delete a task.
        </p>
        <img src={ToDoList} alt="To Do List" className="max-h-[300px] object-contain mx-auto" /> {/* Centered */}
      </div>
    </div>
  );
};

export default Projects;
