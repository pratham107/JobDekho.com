import React from 'react';
import CompanyCard from './CompanyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay, FreeMode  } from 'swiper/modules';
import { motion } from 'framer-motion';


const companyLogos = [
    "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Google-logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Microsoft-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/IBM-Logo.png",
    "https://1000logos.net/wp-content/uploads/2020/09/Facebook-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Intel-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Samsung-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Tesla-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Adobe-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Sony-logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/Oracle-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Uber-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/PayPal-logo.png",
    "https://1000logos.net/wp-content/uploads/2016/10/HP-Logo.png",
    "https://1000logos.net/wp-content/uploads/2017/05/LinkedIn-Logo-500x281.png",
    "https://1000logos.net/wp-content/uploads/2021/07/Snapchat-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Twitter-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/YouTube-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Netflix-logo.png",
    "https://1000logos.net/wp-content/uploads/2020/09/Zoom-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/08/Spotify-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Pinterest-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Airbnb-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Dropbox-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Slack-logo.png",
    "https://1000logos.net/wp-content/uploads/2020/09/Reddit-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/07/Shopify-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/07/Salesforce-logo.png",
    "https://1000logos.net/wp-content/uploads/2017/03/Accenture-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Capgemini-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/07/Wipro-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/07/TCS-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/HCL-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Cognizant-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Infosys-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Deloitte-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/KPMG-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/JP-Morgan-Chase-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Goldman-Sachs-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Morgan-Stanley-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Adobe-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/07/Zoom-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/Bitbucket-logo.png",
    "https://1000logos.net/wp-content/uploads/2020/09/Atlassian-Logo.png",
    "https://1000logos.net/wp-content/uploads/2021/05/VMware-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/04/Autodesk-logo.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Cloudflare-logo.png"
  ];
  
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