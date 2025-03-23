import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const images = import.meta.glob("../../assets/Product/*.png", { eager: true, as: "url" });

const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const fileName = path.split("/").pop().replace(".png", "").toLowerCase();
    return [fileName, url];
  })
);

const ServicesData = [
  { id: 1, name: "Paracetamol", description: "Obat pereda nyeri dan demam.", price: 15000, aosDelay: "100" },
  { id: 2, name: "Amoxicillin", description: "Antibiotik melawan infeksi bakteri.", price: 25000, aosDelay: "300" },
  { id: 3, name: "Omeprazole", description: "Obat asam lambung.", price: 30000, aosDelay: "500" },
  { id: 4, name: "Bioderma", description: "Perawatan kulit.", price: 85000, aosDelay: "500" },
  { id: 5, name: "Chanca Piedra", description: "Suplemen ginjal dan hati.", price: 60000, aosDelay: "500" },
  { id: 6, name: "Cetyl Pure", description: "Suplemen sendi.", price: 50000, aosDelay: "500" },
  { id: 7, name: "Ibuprofen", description: "Obat peradangan dan nyeri.", price: 20000, aosDelay: "500" },
  { id: 8, name: "CLA Core", description: "Suplemen pembakar lemak.", price: 75000, aosDelay: "500" },
  { id: 9, name: "Umcka ColdCare", description: "Obat herbal flu.", price: 45000, aosDelay: "500" },
  { id: 10, name: "Poo Pourri", description: "Penghilang bau toilet.", price: 55000, aosDelay: "500" },
];

const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleOrder = () => {
    setSelectedProduct(null); // Tutup modal produk
    setOrderSuccess(true); // Tampilkan popup sukses

    // Popup otomatis hilang setelah 3 detik
    setTimeout(() => {
      setOrderSuccess(false);
    }, 3000);
  };

  return (
    <>
      <span id="product"></span>
      <div className="py-10 pb-20">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">Best Medicine Product</h1>
          </div>

          {/* Daftar Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => {
              const imageSrc = imageMap[service.name.toLowerCase()] || imageMap["default"];
              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] p-4"
                >
                  {/* Tombol Keranjang */}
                  <div
                    className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer transition-all"
                    onClick={() => openModal(service)}
                  >
                    <FaCartShopping size={20} className="text-gray-700 group-hover:text-primary" />
                  </div>

                  {/* Gambar Produk */}
                  <div className="h-[150px] flex justify-center items-center">
                    <img
                      src={imageSrc}
                      alt={service.name}
                      className="w-40 h-40 object-contain mx-auto transform mt-4 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  {/* Informasi Produk */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{service.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm">{service.description}</p>
                    <p className="text-lg font-bold mt-2 text-b group-hover:text-white">
                      Rp{service.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Pemesanan */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-80 relative">
            {/* Tombol Close */}
            <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={closeModal}>
              <IoClose size={20} />
            </button>

            {/* Informasi Produk */}
            <h2 className="text-xl font-bold text-center">{selectedProduct.name}</h2>
            <p className="text-gray-600 text-center mt-2">{selectedProduct.description}</p>
            <p className="text-lg font-bold text-black text-center mt-2">
              Rp{selectedProduct.price.toLocaleString("id-ID")}
            </p>

            {/* Tombol Pesan */}
            <button
              className="w-full bg-brandDark text-white mt-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleOrder}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      )}

      {/* Popup Konfirmasi Pemesanan */}
      {orderSuccess && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <FaCheckCircle size={24} />
            <span>Pemesanan Berhasil!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
