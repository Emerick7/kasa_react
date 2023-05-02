import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import ImgTopper from '../components/ImgTopper';
import Thumbnails from '../components/Thumbnails';
import background from '../assets/background_img_topper.svg';

function Home() {
  return (
    <React.StrictMode>
      <Header />
      <ImgTopper background={background} textH1="Chez vous, partout et ailleurs" />
      <Thumbnails />
    </React.StrictMode>
  );
}

export default Home;
