// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {
  return (
    <>

    
    {/* <div className="container"> */}
     {/* <Nav/> */}
     {/* <Navbar></Navbar> */}
     {/* </div> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
    <Footer/>
    </>
  );
}

export default App;
