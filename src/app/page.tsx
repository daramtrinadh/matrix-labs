"use client"

import Image from 'next/image';
import { TbMenu } from "react-icons/tb";
import { useState } from 'react';
import OurFeatures from './pages/OurFeatures';
import About from './pages/About'
import Tokenomics from './pages/Tokenomics'
import './page.css';


const Page = () => {
  const [toggleMenu,setToggleMenu]=useState(false)

  const toggleSidebar=()=>{
    setToggleMenu((prev)=>!prev)
  }

  return (
    <div>
    <div className="home-container">
      <div className="header-mobile">
        <Image 
              src={`/logo.png`}
              alt="logo" 
              className="logo-image" 
              width={40} 
              height={50} 
            />
        <TbMenu size={35} onClick={toggleSidebar}/>
      </div>
      {toggleMenu && (
        <div className="sidebar">
          <div className="sidebar-content">
            <button onClick={toggleSidebar} className="close-btn">Close</button>
            <h3 className="link">Features</h3>
            <h3 className="link">Why Us</h3>
            <h3 className="link">Tokenomics</h3>
            <h3 className="link">Roadmap</h3>
            <button type="button" className="login-btn">Login</button>
            <button type="button" className="whitepaper-btn">Whitepaper</button>
          </div>
        </div>
      )}
      <div className="header">
        <div className='logo-section'>
          <Image 
            src={`/logo.png`}
            alt="logo" 
            className="logo-image" 
            width={40} 
            height={50} 
          />
          <h1 className='logo-name'>EthAi</h1>
        </div>
        <div className="header-links">
          <h3 className="link">Features</h3>
          <h3 className="link">Why Us</h3>
          <h3 className="link">Tokenomics</h3>
          <h3 className="link">Roadmap</h3>
        </div>
        <div className="btn-section">
          <button type="button" className="login-btn">Login</button>
          <button type="button" className="whitepaper-btn">Whitepaper</button>
        </div>
      </div>
      <div className='home-details'>
        <h1 className='heading'>When <span className='span-item2'>Innovation</span> Meets <span className='span-item1'>Investement</span></h1>
        <p className='para'>Empowering Trading Through Advanced Technologies</p>
        <button type="button" className='openBtn'>Open dAAp</button>
        
      </div>
    </div>
    <div className='bottom-section'>
      <OurFeatures/>
      <About/>
      <Tokenomics/>
    </div>
    </div>
  );
};

export default Page;
