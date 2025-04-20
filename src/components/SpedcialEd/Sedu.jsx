import React from "react";

const Sedu = () => {
  return (
    <div className="px-6 md:px-16 lg:px-36 xl:px-72 py-20">
      <h1 className="text-4xl md:text-5xl font-dm text-navy tracking-tight mb-12 text-center md:text-left">
        Special Education
      </h1>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 h-full">
            <img
              src="/images/specialEd.png"
              className="w-full h-full object-cover rounded-xl hover:rounded-[4rem] duration-700 transition-all"
              alt="Special Education"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            {[
              "Functional academics for children with very special needs",
              "Preparing children with special needs for mainstream school",
              "Pre-reading and pre-writing skills training",
              "Bridge classes for filling up the academic gaps"
            ].map((item, index) => (
              <p
                key={index}
                className="text-lg md:text-xl lg:text-2xl tracking-tight font-inter text-navy font-medium"
              >
                &gt; {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sedu;
