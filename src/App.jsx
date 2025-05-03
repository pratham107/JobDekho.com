import './App.css'
import { Button } from './components/ui/button'
import Navbar from './components/Pages/Navbar/Navbar'
import Hero from './components/Pages/Hero/Hero'
import HeadingText from './components/Pages/Aluminy/HeadingText'
import CompanyCard from './components/Pages/Company/CompanyCard'
import CompanyLogoCrousal from './components/Pages/Company/CompanyLogoCrousal'
import AluminiCard from './components/Pages/AluminiCard';

function App() {

  return (
    <>
     <div className="bg-neutral-950 h-screen w-screen">
      <div className=''>
          <Navbar/>
        <div className="hero m-4 flex justify-center">
           <Hero/>         
        </div>
        <div className="m-6 flex justify-center">
            <HeadingText />
        </div>
        {/* <CompanyCard/> */}
        <div className="companyCrousal m-2">
          <CompanyLogoCrousal />
        </div> 
        <div className="aluminiCard">
           <AluminiCard />
        </div>
      </div>
     </div>
     
    </>
  )
}

export default App
