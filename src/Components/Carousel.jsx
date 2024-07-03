import  { React, useEffect, useState, useRef } from "react";
import "../styles/Carousel.css";
import flechaIzquierda from "../assets/img/iconmonstr-angel-left-thin.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Carousel = ({data}) => {
    const [slide, setSlide] = useState(0);
    const [second, setSecond] = useState(0);
var doc = document.getElementById("carousel")
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  // useEffect (() => {
  //   const interval = setInterval(() => {
  //   nextSlide();
  // }, 3000);
  // if (doc) {
  //   doc.addEventListener('mauseenter', () => {
  //       console.log("entreeeee");
  //   clearInterval(interval);
  // });
  // }
  
  // });


  

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
        return <div className="carousel">
        <FaChevronLeft onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item, i) => {
            return <img src={item.img} width="600" height="400" key={i} className={slide === i ? "slide" : "slide slide-hidden"}/>
        })}
        <FaChevronRight onClick={nextSlide} className="arrow arrow-right"/>
      <span className="indicators">
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </span>
        </div>
};