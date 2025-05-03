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
  {
    id: "7",
    name: "Prankur Wankhade",
    jobRole: "SDE-II",
    companyAt: 'Amazon'
  },
  {
    id: "8",
    name: "Vinay Mishra",
    jobRole: "SDE-I",
    companyAt: 'Atlassian'
  },
  {
    id: "9",
    name: "Prathmesh Bhopale",
    jobRole: "SDE-II",
    companyAt: 'Tower Research'
  },
  {
    id: "10",
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
        spaceBetween={40}
        slidesPerView={4}
        loop={true}
        speed={4000}
        freeMode={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay, FreeMode]}
      >
        {studentData.map((student) => (
          <SwiperSlide key={student.id}>
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
