import React from "react";

// Mengimpor semua gambar dari folder Medicine
const images = import.meta.glob("../../assets/Product/*.png", { eager: true, as: "url" });

// Mengonversi images menjadi objek yang lebih mudah digunakan
const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const fileName = path.split("/").pop().replace(".png", "").toLowerCase();
    return [fileName, url];
  })
);

const ProductData = [
  {
    id: 1,
    name: "Paracetamol",
    description:
      "Digunakan untuk meredakan demam dan nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, atau nyeri otot.",
    aosDelay: "100",
  },
  {
    id: 2,
    name: "Amoxicillin",
    description:
      "Antibiotik yang digunakan untuk mengobati berbagai infeksi bakteri, seperti infeksi saluran pernapasan, infeksi kulit, dan infeksi saluran kemih.",
    aosDelay: "300",
  },
  {
    id: 3,
    name: "Omeprazole",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 4,
    name: "Bioderma",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 5,
    name: "Chanca Piedra",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 6,
    name: "Cetyl Pure",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 7,
    name: "CLA Core",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 8,
    name: "Ibuprofen",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 9,
    name: "Poo Pourri",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
  {
    id: 10,
    name: "Umcka ColdCare",
    description:
      "Obat yang digunakan untuk mengatasi masalah lambung, seperti asam lambung tinggi, GERD, dan tukak lambung.",
    aosDelay: "500",
  },
];

const Product = () => {
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
            {ProductData.map((product) => {
              const imageSrc = imageMap[service.name.toLowerCase()] || imageMap["default"];
              return (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={product.aosDelay}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                >
                  <div className="h-[150px] flex justify-center items-center">
                    <img
                      src={imageSrc}
                      alt={product.name}
                      className="max-w-[180px] block mx-auto transform mt-4 group-hover:scale-105 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                      {product.description}
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

export default Product;