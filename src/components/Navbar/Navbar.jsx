import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { FaShoppingCart, FaTimes } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Product", link: "/#product" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = ({ cartItems = [] }) => {  // Tambahkan default props
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <a href="#" className="font-bold text-2xl flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-14" />
                Chemical Life
              </a>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className="text-xl text-white/70 hover:text-white duration-200">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Order Button */}
              <button 
                onClick={() => {
                  setIsCartOpen(true);
                  console.log("Cart Opened:", isCartOpen);  // Debugging
                }}
                className="bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3">
                Order <FaShoppingCart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              onClick={() => setIsCartOpen(false)}
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold mb-4">Detail Pemesanan</h2>
            <ul>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <li key={index} className="border-b py-2">
                    {item.name} - Rp {item.price}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">Tidak ada pesanan.</p>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
