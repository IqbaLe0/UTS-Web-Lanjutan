import React from "react";
import { FaCartShopping } from "react-icons/fa6";

// Mengimpor semua gambar dari folder Medicine
const images = import.meta.glob("../../assets/Product/*.png", { eager: true, as: "url" });

// Mengonversi images menjadi objek yang lebih mudah digunakan
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const fileName = path.split("/").pop().replace(".png", "").toLowerCase();
    return [fileName, url];
  })
);

const ServicesData = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Obat pereda nyeri (analgesik) dan penurun demam (antipiretik).",
    price: 15000, // Harga dalam Rupiah
    aosDelay: "100",
  },
  {
    id: 2,
    name: "Amoxicillin",
    description: "Antibiotik golongan penisilin yang digunakan untuk melawan infeksi bakteri.",
    price: 25000,
    aosDelay: "300",
  },
  {
    id: 3,
    name: "Omeprazole",
    description: "Obat yang mengurangi produksi asam lambung (PPI).",
    price: 30000,
    aosDelay: "500",
  },
  {
    id: 4,
    name: "Bioderma",
    description: "Produk perawatan kulit untuk menjaga kesehatan dan kelembapan kulit.",
    price: 85000,
    aosDelay: "500",
  },
  {
    id: 5,
    name: "Chanca Piedra",
    description: "Suplemen herbal untuk kesehatan ginjal dan hati.",
    price: 60000,
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Cetyl Pure",
    description: "Suplemen untuk kesehatan sendi dan mobilitas tubuh.",
    price: 50000,
    aosDelay: "500",
  },
  {
    id: 7,
    name: "Ibuprofen",
    description: "Obat antiinflamasi non-steroid (NSAID) yang meredakan nyeri dan peradangan.",
    price: 20000,
    aosDelay: "500",
  },
  {
    id: 8,
    name: "CLA Core",
    description: "Suplemen pembakar lemak yang mengandung CLA.",
    price: 75000,
    aosDelay: "500",
  },
  {
    id: 9,
    name: "Umcka ColdCare",
    description: "Obat herbal yang digunakan untuk meredakan gejala flu dan meningkatkan daya tahan tubuh.",
    price: 45000,
    aosDelay: "500",
  },
  {
    id: 10,
    name: "Poo Pourri",
    description: "Produk penghilang bau toilet sebelum digunakan.",
    price: 55000,
    aosDelay: "500",
  },
];

const Services = () => {
  return (
    <>
      <span id="product"></span>
      <div className="py-10 pb-20">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Medicine Product
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => {
              const imageSrc = imageMap[service.name.toLowerCase()] || imageMap["default"];
              return (
                <div
                  key={service.id}
                  data-aos="fade-up"
                  data-aos-delay={service.aosDelay}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] p-4"
                >
                  {/* Icon Keranjang */}
                  <div className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer transition-all">
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
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <p className="text-lg font-bold mt-2 text-black group-hover:text-white">
                      Rp{service.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
