import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Tlist from '../components/Tlist/Tlist';
import BeatLoader from "react-spinners/BeatLoader";
import './loader.css';

const TeamsPage = () => {
 
  const [loading, SetLoading]= useState(false);

  useEffect(()=>{
  SetLoading(true);
  setTimeout(()=>{
    SetLoading(false)
  },500)
},[])

  return (
    <div>
      <Navigation />
      {loading ? 
        <div className='loader' >
            <BeatLoader color="#2534dc" size={20} />
          </div>
      : 
   
        <>
        <Tlist />
        <Footer />
        </>
      }
      
    </div>
  );
};

export default TeamsPage;
