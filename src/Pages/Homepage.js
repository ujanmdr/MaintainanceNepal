import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import slide1 from "../Images/slide_2.jpg";
import slide2 from "../Images/slide_3.jpg";
import slide3 from "../Images/slide_4.jpg";
import "../css/Homepage.css"


function Homepage() {
  return (
    <div>
      <Navbar /> 
      {/* <div class="slideshow-container">

        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src={slide1} style="width:100%"></img>
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src={slide2} style="width:100%"></img>
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src={slide3} style="width:100%"></img>
          <div class="text">Caption Three</div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
      </div> */}
    </div>
  );
}

export default Homepage;
