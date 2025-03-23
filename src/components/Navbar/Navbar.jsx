import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/website/logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 4,
    name: "Maps",
    link: "/#maps",
  },
  {
    id: 5,
    name: "Sejarah",
    link: "/#sejarah",
  },
];

const Navbar = () => {
  return (
    <>
      {/* Background hijau tosca */}
      <div className="bg-[#1abc9c] shadow-md text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Chemical Life
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Order button as Link */}
              <Link
                to="/order"
                className="bg-white hover:scale-105 duration-200 text-[#1abc9c] px-4 py-2 rounded-full flex items-center gap-3 font-semibold"
              >
                Order
                <FaCoffee className="text-xl text-[#1abc9c] drop-shadow-sm cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
