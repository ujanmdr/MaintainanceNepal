import React, { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { BsStarFill } from "react-icons/bs";
import "../css/Homepage.css";

function Homepage() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-image">
        <img
          className="home-img"
          src="https://www.tacook.com/fileadmin/13_blog/hero/blog_hero_create-your-most-effective-maintenance-strategy-with-RCM.jpg"
          alt=""
        />
        <button className="home-btn"> Get Started</button>
      </div>
      <div className="home category">
        <h3 className="category-title">Categories</h3>
        <div className="category-list">
          <div className="category-item">
            <img
              className="category-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykSCvL0KvuqXuZ8ZvU0fM9DYx0FVmUVFtFg&usqp=CAU"
              alt="PLUMBLING"
            />
            <span className="item-head"> Plumbling</span>
          </div>
          <div className="category-item">
            <img
              className="category-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgp2Pzb1_DNZ1tg15ApxPqyv_lUDfPHW21HsfukmAOxeIAjK4XW_LIM_uvmjiz9pJCzJo&usqp=CAU"
              alt="ELECTRICIAN"
            />
            <span className="item-head"> Electrician</span>
          </div>
          <div className="category-item">
            <img
              className="category-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBeZBkK1gGXPGr7Q4yKbxizjQwlvvMHr7SCmTrwHJzveDAUv2xErYWrt1nBXeb9N97Mw&usqp=CAU"
              alt="CONSTRUCTOR"
            />
            <span className="item-head"> Constructor</span>
          </div>
        </div>
      </div>
      <div className="home-testimonials">
        <h3 className="testimonial-title">Reviews</h3>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <div>
              <img
                className="testimonial-img"
                src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                alt="PLUMBLING"
              />
            </div>
            <div className="testimonial-desc">
              <span className="testimonial-head">
                It’s incredibly rare that anyone would pick up the phone and
                call you up with feedback.
              </span>
              <div className="testimonial-rating">
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div>
              <img
                className="testimonial-img"
                src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                alt="PLUMBLING"
              />
            </div>
            <div className="testimonial-desc">
              <span className="testimonial-head">
                It’s incredibly rare that anyone would pick up the phone and
                call you up with feedback.
              </span>
              <div className="testimonial-rating">
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div>
              <img
                className="testimonial-img"
                src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                alt="PLUMBLING"
              />
            </div>
            <div className="testimonial-desc">
              <span className="testimonial-head">
                It’s incredibly rare that anyone would pick up the phone and
                call you up with feedback.
              </span>
              <div className="testimonial-rating">
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
                <BsStarFill className="testimonial-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;