import React from 'react'
import Hero from './components/Pages/Hero/Hero'
import CompanyLogoCrousal from './components/Pages/Company/CompanyLogoCrousal'
import AluminiCard from './components/Pages/AluminiCard'
import HeadingText from './components/Pages/Aluminy/HeadingText'
import JobCard from './components/Jobs/Pages/JobCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Button } from './components/ui/button'
import { Link } from 'react-router-dom'


const mockJobs = [
  {
    id: 1,
    title: "React JS Developer",
    company: "Tech Solutions",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 4, 2025",
    postedBy: "Ankita Sharma (HR)",
    lastDate: "May 15, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "InnoTech",
    location: "Bangalore",
    type: "Internship",
    postedDate: "May 6, 2025",
    postedBy: "Raj Mehta (HR)",
    lastDate: "May 20, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Flipkart-logo.png"
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "CodeCraft",
    location: "Mumbai",
    type: "Part-Time",
    postedDate: "May 8, 2025",
    postedBy: "Sneha Kulkarni",
    lastDate: "May 22, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Paytm-Logo.png"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 10, 2025",
    postedBy: "Ankit Jain",
    lastDate: "May 25, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Zomato-logo.png"
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 10, 2025",
    postedBy: "Ankit Jain",
    lastDate: "May 25, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Zomato-logo.png"
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 10, 2025",
    postedBy: "Ankit Jain",
    lastDate: "May 25, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Zomato-logo.png"
  },
  {
    id: 7,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 10, 2025",
    postedBy: "Ankit Jain",
    lastDate: "May 25, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Zomato-logo.png"
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "Pixel Labs",
    location: "Remote",
    type: "Full-Time",
    postedDate: "May 10, 2025",
    postedBy: "Ankit Jain",
    lastDate: "May 25, 2025",
    logo: "https://1000logos.net/wp-content/uploads/2021/10/Zomato-logo.png"
  },
];

const Home = () => {
  return (
     <div className='bg-black min-h-screen w-full text-white'>
      {/* Hero Section */}
      <Hero />

      {/* Heading Text */}
      <div className="my-10 flex justify-center">
        <HeadingText text="OUR ALUMNI ARE SHAPING DATA-DRIVEN SOLUTIONS AT"/>
      </div>

      {/* Company Carousel */}
      <div className="my-10 px-4">
        <CompanyLogoCrousal />
      </div>

      {/* Alumni Cards */}
      <div className="my-10 px-4">
        <AluminiCard />
      </div>
       <div className="flex justify-center">
        <HeadingText text="Ongoing Opportunity"/>
      </div>
      <div className="">

      <div className="w-full px-4 py-6 bg-black">
      <Swiper
  loop={true}
  speed={3000}
  grabCursor={true}
  freeMode={true}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  }}
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1.1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 16,
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
        {mockJobs.map((job) => (
          <SwiperSlide key={job.id}>
            <JobCard
              logo={job.logo}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              postedDate={job.postedDate}
              postedBy={job.postedBy}
              lastDate={job.lastDate}
              onApply={() => alert(`Applying for ${job.title}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    <div className='flex justify-center'>
      <Link to="/opportunities">
        <Button variant="outline" className="bg-orange-500 rounded-xl text-white border-none">
          View All Jobs
        </Button>
      </Link>
      
    </div>
      
      </div>
    </div>
  )
}

export default Home