import React from "react";
import BannerImg from "../../assets/logo3.png";
import { FaTemperatureHigh, FaCapsules} from "react-icons/fa";
import { GiPill, GiStomach} from "react-icons/gi";
import BgImg from "../../assets/website/bg.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Banner = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="Pills"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Chemical Life
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Website ini berfokus pada bidang kesehatan dan farmasi, khususnya dalam penyediaan obat-obatan berkualitas premium. Kami berkomitmen untuk menyediakan berbagai pilihan obat dengan formulasi terpercaya dan efektivitas tinggi, 
                  sehingga pelanggan dapat memperoleh produk yang aman dan sesuai dengan kebutuhan kesehatan mereka.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaTemperatureHigh className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Obat Demam & Nyeri</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaCapsules className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                      <span>Antibiotik</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiStomach className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Obat Lambung</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <GiPill className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Vitamin & Suplemen</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                    Pilihan Obat Unggulan
                    </h1>
                    <p className="text-sm text-gray-500">
                    Sama seperti meracik obat yang tepat, memilih produk kesehatan yang sesuai membutuhkan ketelitian dan pemahaman yang baik. Kami siap membantu Anda mendapatkan solusi kesehatan terbaik! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
