import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Set the time between slides (in milliseconds)
    arrows: true, // Show arrows for manual navigation
    prevArrow: <button type="button">Previous</button>, // Custom prev arrow, optional
    nextArrow: <button type="button">Next</button>, // Custom next arrow, optional
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {/* Add your carousel content here */}
        <div className="carousel-item">
          <img src="DSC_3780.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="IMG_8164-scaled.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="IMG_20190925_084958-scaled.jpg" alt="Image 3" />
        </div>
        {/* Add more carousel items as needed */}
      </Slider>
    </div>
  );
};

export default Home;
