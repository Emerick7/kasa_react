import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import ImgTopper from '../components/ImgTopper';
import Thumbnails from '../components/Thumbnails';

function Home() {
  return (
    <React.StrictMode>
      <Header />
      <ImgTopper />
      <Thumbnails />
    </React.StrictMode>
  );
}

export default Home;
