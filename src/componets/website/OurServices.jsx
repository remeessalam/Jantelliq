import React, { useState } from "react";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";
import { allServices } from "../../constant";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);
  const navigate = useNavigate();
  const handleSelectServiceToShowDetail = (service) => {
    if (service.link) {
      navigate(`/${service.id}`);
    } else {
      setSelectedService(service);
      setIsOpen(true);
    }
  };

  return (
    <div className="py-[5rem]  text-black">
      <div className="wrapper flex flex-col text-center gap-5 items-center">
        <div className="gradient-rounded-text-box mb-2">Our Services</div>
        <h2 className="heading-2 max-w-[50rem]">
          Advanced and Highly Reliable Performance
        </h2>
        <p className="desc max-w-[50rem]">
          Our success is our success and together we help our society to become
          a better place to live and work.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              key={service.id}
              className="rounded-lg p-[1px] group  bg-primary cursor-pointer"
            >
              <div className="rounded-lg bg-white group-hover:text-white hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service?.title}
                  </h5>
                  {/* Update desc to smallDescription */}
                  <p className="desc text-black group-hover:text-white">
                    {service.smallDescription}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className="mb-3 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="px-4 flex flex-col gap-6 tex-white pb-[2rem]">
          <h1 className="heading-2 text-white">{selectedService.title}</h1>
          {/* Update detailContent to detailedContent */}
          <p className="desc whitespace-pre-line text-white">
            {selectedService.detailedContent}
          </p>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
