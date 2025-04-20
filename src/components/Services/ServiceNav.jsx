import React, { useState } from 'react';
import { serviceTitle } from '../../data/servicesData';

const ServiceNav = () => {

    const [index, setIndex] = useState(null)

  return (
    <div className="flex w-full flex-wrap px-6 md:px-20 lg:px-40 gap-6 md:gap-10 justify-around py-10">
      {serviceTitle.map((val, ind) => (
        <div
          key={ind}
          onMouseEnter={() => setIndex(ind)}
          onMouseLeave={() => setIndex(null)}
          style={{ backgroundColor: ind === index ? `#${val.color}` : `#${val.hoverColor}`, color: ind === index ? 'black' : '' }}

          className="text-center w-40 text-lg font-inter text-[#ffffff] flex items-center justify-center font-semibold rounded-md shadow-md hover:scale-[1.25] transition-all ease-in-out duration-500"
        >
          <a href={`/${val.path}`} target="_blank" className='px-4 py-5' rel="noopener noreferrer">
            {val.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceNav;
