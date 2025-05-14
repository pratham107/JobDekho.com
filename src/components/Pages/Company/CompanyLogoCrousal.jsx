import React from 'react';
import CompanyCard from './CompanyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode  } from 'swiper/modules';
import { motion } from 'framer-motion';


const companyLogos = [
  "https://1000logos.net/wp-content/uploads/2021/05/ACE-Hardware-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2018/01/Alert-Logic-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2024/06/Alisa-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2023/06/Ansaldo-STS-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo-640x400.png",
  "https://1000logos.net/wp-content/uploads/2023/02/ALTA-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2020/05/Apacer-Logo-640x400.png",
  "https://1000logos.net/wp-content/uploads/2016/10/Asus-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2021/05/ASRock-logo-768x429.png",
  "https://1000logos.net/wp-content/uploads/2024/10/Aptiv-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2016/10/ATT-logo-1-640x320.png",
  "https://1000logos.net/wp-content/uploads/2020/08/Atlassian-Logo-640x400.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Barracuda-Networks-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2020/08/Boost-Mobile-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2016/10/Canon-Logo-640x400.png",
  "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo-640x337.png",
  "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2021/05/Compaq-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2020/10/Dolby-Atmos-Logo-768x480.png",
  "https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2021/12/Dynamics-365-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2021/04/AVerMedia-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2025/05/Emerson-Electric-Logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2023/06/GeForce-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2020/05/Gigabyte-Logo-640x400.png",
  "https://1000logos.net/wp-content/uploads/2021/09/HPE-Logo-768x483.png",
  "https://1000logos.net/wp-content/uploads/2020/11/Hutch-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2023/07/JBL-logo-768x432.png",
  "https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-768x432.png"
];
;
  
  const CompanyLogoCrousal = () => {
    return (
      <motion.div
        className="w-full overflow-hidden px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={10}
          loop={true}
          speed={4000}
          freeMode={true}
          autoplay={{
            delay: 0, // no pause between transitions
            disableOnInteraction: false,
            reverseDirection: true
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 8 },
            1536: { slidesPerView: 10 },
          }}
          modules={[Autoplay, FreeMode]}
        >
          {companyLogos.map((company, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.02 }}
                viewport={{ once: true }}
                className="transition-transform duration-500 ease-in-out"
              >
                <CompanyCard url={company} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    );
  };
  
  export default CompanyLogoCrousal;