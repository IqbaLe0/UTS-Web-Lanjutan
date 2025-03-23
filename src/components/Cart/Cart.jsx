import { useState } from "react";

const medicines = [
  { id: 1, name: "Paracetamol", image: "public/paracetamol.png", description: "Digunakan untuk meredakan demam dan nyeri ringan hingga sedang.", price: 5000 },
  { id: 2, name: "Amoxicillin", image: "public/Amoxicillin.png", description: "Antibiotik untuk infeksi bakteri.", price: 12000 },
  { id: 3, name: "Omeprazole", image: "public/Omeprazole.png", description: "Mengurangi produksi asam lambung.", price: 10000 },
  { id: 4, name: "Bioderma", image: "public/Bioderma.png", description: "Produk perawatan kulit.", price: 14000 },
  { id: 5, name: "Chanca Piedra", image: "public/Chanca Piedra.png", description: "Suplemen herbal untuk kesehatan ginjal.", price: 9000 },
  { id: 6, name: "Cetyl Pure", image: "public/Cetyl Pure.png", description: "Mendukung kesehatan sendi.", price: 15000 },
];

export default function Cart() {
  const [cart, setCart] = useState(medicines.map((med) => ({ ...med, quantity: 0 })));
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", paymentMethod: "Bank Transfer" });

  const updateQuantity = (id, delta) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity > 0 ? item.price * item.quantity : 0), 0);
  const isCartEmpty = cart.every(item => item.quantity === 0);

  const handleCheckout = () => {
    if (!isCartEmpty) {
      setIsCheckoutOpen(true);
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (formData.name && formData.address) {
      setIsCheckoutOpen(false);
      setIsConfirmed(true);
    }
  };

  const isFormIncomplete = !formData.name || !formData.address;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🛒 Keranjang Obat</h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              {/* Tambahkan Gambar */}
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />

              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg disabled:opacity-50"
                disabled={item.quantity === 0}
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-3 py-1 bg-green-500 text-white rounded-lg"
              >
                +
              </button>
              <div className="text-right">
                <p className="font-semibold">Rp{item.quantity > 0 ? item.price * item.quantity : 0}</p>
                {item.quantity > 1 && (
                  <p className="text-sm text-gray-500">({item.quantity}x Rp{item.price})</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right text-lg font-bold">Total: Rp{totalPrice}</div>
      <button
        onClick={handleCheckout}
        className={`mt-4 w-full py-2 rounded-lg ${isCartEmpty ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
        disabled={isCartEmpty}
      >
        Checkout
      </button>

      {/* Popup Checkout */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <label className="block text-sm font-semibold">Nama Pembeli:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Masukkan nama"
            />

            <label className="block text-sm font-semibold">Alamat:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-3"
              placeholder="Masukkan alamat"
            />

            <label className="block text-sm font-semibold">Metode Pembayaran:</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            >
              <option>Bank Transfer</option>
              <option>COD</option>
            </select>

            <div className="flex justify-between">
              <button onClick={handleClose} className="px-4 py-2 bg-gray-400 text-white rounded-lg">
                Batal
              </button>
              <button
                onClick={handleConfirm}
                className={`px-4 py-2 rounded-lg ${isFormIncomplete ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
                disabled={isFormIncomplete}
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Konfirmasi */}
      {isConfirmed && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h2 className="text-xl font-bold mb-4">✅ Pesanan Berhasil!</h2>
            <p className="text-gray-700">Pesanan Anda akan segera dikirim. Mohon ditunggu! 😊</p>
            <button
              onClick={() => setIsConfirmed(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              ❌ Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
