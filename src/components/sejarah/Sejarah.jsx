import React from "react";

const Sejarah = () => {
  return (
    <div id="sejarah" className="py-20 bg-[#f9f9f9] dark:bg-gray-900 flex justify-center">
      <div
        className="relative bg-gradient-to-br from-[#e0f7fa] via-[#b2ebf2] to-[#80deea] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] rounded-3xl p-10 max-w-4xl w-full shadow-2xl overflow-hidden"
        data-aos="zoom-in"
      >
        {/* Ornamental Glow */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-[#1abc9c] opacity-30 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-[#1abc9c] opacity-30 rounded-full filter blur-2xl animate-pulse"></div>

        <h2 className="text-4xl sm:text-5xl font-bold font-cursive text-center mb-8 text-[#0f766e] dark:text-[#5eead4] leading-snug relative z-10">
          Sejarah Berdirinya <br /> Chemical Life
        </h2>

        <p className="text-gray-800 dark:text-gray-300 text-justify leading-relaxed mb-4 font-light text-lg relative z-10">
          <span className="font-semibold text-black dark:text-white">Chemical Life</span> didirikan pada tahun 2010 di Manokwari, Papua Barat. Bermula dari sebuah toko kecil yang menjual obat-obatan dan kebutuhan kesehatan dasar, Chemical Life hadir untuk memberikan solusi kesehatan terbaik bagi masyarakat sekitar.
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-justify leading-relaxed mb-4 font-light text-lg relative z-10">
          Seiring berkembangnya waktu dan meningkatnya kebutuhan masyarakat akan produk farmasi yang berkualitas, Chemical Life memperluas jangkauannya dengan membuka layanan apotek online pada tahun 2018. Dengan komitmen untuk selalu menyediakan produk terbaik dan pelayanan yang ramah, Chemical Life kini menjadi salah satu apotek terpercaya di wilayah Papua Barat.
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-justify leading-relaxed font-light text-lg relative z-10">
          Hingga saat ini, kami terus berinovasi dengan menghadirkan berbagai layanan seperti konsultasi apoteker online, pengantaran obat langsung ke rumah, dan promosi produk kesehatan yang menarik.
        </p>
      </div>
    </div>
  );
};

export default Sejarah;
