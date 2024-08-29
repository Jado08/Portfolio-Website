import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import cisco from '../assets/certificates/cisco.png';
import cybersecurity from '../assets/certificates/cybersecurity.png';
import mta from '../assets/certificates/mta.png';
import networksecurity from '../assets/certificates/networksecurity.png';

const Certificates = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-0 overflow-hidden">
      <h2 className="text-3xl font-semibold mb-8 fixed top-24">Certificates</h2> {/* Adjusted top position */}
      <div className="w-full max-w-4xl text-center relative mt-40"> {/* Adjusted margin-top for spacing */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          className="carousel-container"
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full ml-2 z-10"
                aria-label={labelPrev}
              >
                <FaArrowLeft size={30} />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <button
                type="button"
                onClick={clickHandler}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full mr-2 z-10"
                aria-label={labelNext}
              >
                <FaArrowRight size={30} />
              </button>
            )
          }
        >
          <div>
            <img src={cisco} alt="Cisco Certificate" className="cursor-pointer max-h-[440px] object-contain" onClick={() => window.open(cisco, '_blank')} />
          </div>
          <div>
            <img src={cybersecurity} alt="Cybersecurity Certificate" className="cursor-pointer max-h-[440px] object-contain" onClick={() => window.open(cybersecurity, '_blank')} />
          </div>
          <div>
            <img src={mta} alt="MTA Certificate" className="cursor-pointer max-h-[440px] object-contain" onClick={() => window.open(mta, '_blank')} />
          </div>
          <div>
            <img src={networksecurity} alt="Networking Security Certificate" className="cursor-pointer max-h-[440px] object-contain" onClick={() => window.open(networksecurity, '_blank')} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Certificates;