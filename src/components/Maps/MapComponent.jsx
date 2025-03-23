import React from "react";
import BgPng from "../../assets/website/coffee-beans-bg.png";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

// Alamat lokasi yang ingin ditampilkan
const location = {
  name: "Chemical Life",
  address: "Jl. Cendrawasih No.123, Manokwari, Indonesia",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d792.0984648372391!2d134.06911367133824!3d-0.836415896303816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1742734766400!5m2!1sid!2sid", // Ganti dengan URL iframe Google Maps sesuai lokasi
};

const MapComponent = () => {
  return (
    <div className="py-14" style={backgroundStyle}>
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="space-y-6 max-w-xl mx-auto"
          >
            {/* Text Section */}
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
              {location.name} - Find Us on Google Maps
            </h1>
            <p className="text-white text-center sm:text-left">{location.address}</p>
          </div>

          {/* Google Maps Section */}
          <div className="w-full h-[300px] sm:h-[400px]">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
