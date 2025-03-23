import React from "react";

const Order = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesanan Anda berhasil dikirim!");
  };

  return (
    <div className="container py-20">
      <div className="flex justify-center mb-10" data-aos="fade-down">
        <div className="relative">
          {/* Background shape */}
          <div className="absolute inset-0 bg-[#00CED1] from-[#00CED1] to-[#20B2AA] rounded-lg transform rotate-1 shadow-lg"></div>
          {/* Text */}
          <h1 className="relative text-4xl font-bold px-8 py-4 bg-[#00CED1] rounded-lg text-white shadow-md">
            Formulir Pemesanan
          </h1>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
        data-aos="zoom-in"
      >
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">
            Nama Lengkap
          </label>
          <input
            type="text"
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">
            Nomor Telepon
          </label>
          <input
            type="text"
            placeholder="0812xxxxxxx"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">
            Pesanan
          </label>
          <textarea
            placeholder="Tulis detail produk yang ingin dipesan..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00CED1] transition-all duration-300"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#00CED1] text-white py-3 rounded-lg font-semibold hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          Kirim Pesanan
        </button>
      </form>
    </div>
  );
};

export default Order;
