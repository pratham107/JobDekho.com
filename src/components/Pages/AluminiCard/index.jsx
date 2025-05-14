import React from 'react';
import AluminiCard from './AluminiCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';

const studentData = [
  {
    id: "1",
    name: "Prankur Wankhade",
    jobRole: "SDE-II",
    companyAt: 'Amazon'
  },
  {
    id: "2",
    name: "Vinay Mishra",
    jobRole: "SDE-I",
    companyAt: 'Atlassian'
  },
  {
    id: "3",
    name: "Prathmesh Bhopale",
    jobRole: "SDE-II",
    companyAt: 'Tower Research'
  },
  {
    id: "4",
    name: "Ashwin Balode",
    jobRole: "Front-End Engineer-I",
    companyAt: 'Amazon'
  },
  {
    id: "5",
    name: "Ashish Bardia",
    jobRole: "SDE-II",
    companyAt: 'Flipkart'
  },
  {
    id: "6",
    name: "Aniket Chouhan",
    jobRole: "Web Developer-II",
    companyAt: 'Myntra'
  },
];

const AluminiCrousal = () => {
  return (
    <div className="w-full px-4 py-6 bg-black">
      <Swiper
        loop={true}
        speed={3000}
        grabCursor={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 24, // gap on small screens
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
        }}
      >
        {studentData.concat(studentData).map((student, index) => (
          <SwiperSlide key={`${student.id}-${index}`}>
            <AluminiCard
              studentName={student.name}
              postName={student.jobRole}
              Companyname={student.companyAt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AluminiCrousal;
