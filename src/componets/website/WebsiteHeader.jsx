import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-secondary backdrop-blur-md z-50 text-black">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/">
            <img
              src={logoImg}
              className="h-[3rem] md:h-[3.75rem] scale-125"
              alt="logo"
            />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {routes.map(({ name, path, children }) =>
              name === "Services" ? (
                <div
                  key={path}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    to={path}
                    className={`text-black hover:text-blue-300 dark:hover:text-primary ${
                      pathname === path ? "text-blue-300 dark:text-primary" : ""
                    }`}
                  >
                    {name}
                  </Link>

                  {children && (
                    <div
                      className={`absolute top-full left-0 mt-8 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen
                          ? "max-h-56 opacity-100"
                          : "max-h-0 opacity-0 py-0"
                      }`}
                    >
                      {children.map((child) => (
                        <Link
                          key={child.link}
                          to={child.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={`${path}`}
                  className={`link text-sm ${
                    pathname === `${path}` && "active-link"
                  }`}
                  key={path}
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, path, children }) =>
              name === "Services" ? (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={path}
                  to={path}
                  className="text-3xl text-white font-medium transition-colors duration-300 link"
                >
                  {name}
                  <div className="flex flex-col mt-3 gap-3">
                    {children.map((child) => (
                      <Link to={child.link} className="text-base ml-4">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </Link>
              ) : (
                <Link
                  onClick={() => setIsOpen(false)}
                  key={path}
                  className="text-3xl text-white font-medium transition-colors duration-300 link"
                  to={path}
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="black"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeader;
