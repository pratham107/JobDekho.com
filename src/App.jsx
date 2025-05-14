import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Pages/Navbar/Navbar';
import Footer from './components/Pages/Footer/Footer';

import Home from './Home';
import Login from './components/Pages/Auth/Login';
import Register from './components/Pages/Auth/Register';
import ExploreOpportunity from './components/Jobs/Pages';
import ResumeAnalyzer from './components/ResumeAnalyzer';

function App() {
  return (
    <Router>
      <div className="bg-neutral-950 min-h-screen w-full text-white">
        

        <Routes>
          <Route 
            path="/" 
            element={
              <>
              <Navbar />
                <Home />
              <Footer />
              </>
              
            } 
            />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
          path="/opportunities" 
          element={
            <>
              <Navbar />
              <ExploreOpportunity />
              <Footer />
            </>
            
          } 
            />
          {/* <Route path="/resume-analyzer" element={<ResumeAnalyzer />} /> */}
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;
