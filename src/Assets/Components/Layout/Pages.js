import React,{useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from '../Common/TopNavbar';
import Footer from '../Common/Footer';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';


const Pages = () => {
  
  return (
    <>
        <BrowserRouter>
            <TopNavbar />
             <div className='routes_Wrapper'>
              <Routes>
                  <Route path='' element={<Home />} />
                  <Route path='/shop' element={<Shop />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/contact' element={<Contact />} />
              </Routes>
             </div>
             <Footer className="Footer" />
        </BrowserRouter>
    </>
  )
}

export default Pages