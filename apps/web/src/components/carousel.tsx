'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CarouselComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideShow, setSlideShow] = useState(1);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth >= 1024) {
        setSlideShow(4);
      } else if (window.outerWidth >= 768) {
        setSlideShow(2); 
      } else {
        setSlideShow(1);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      src: '/b1.jpg',
      alt: 'Slide 1',
      href: '/product/cooler',
      text: 'Dua Lipa',
      date: '17-08-2024',
      location: 'Bandung',
    },
    {
      src: '/b2.jpg',
      alt: 'Slide 2',
      href: '/product/case',
      text: 'Bruno Mars',
      date: '18-08-2024',
      location: 'Batam',
    },
    {
      src: '/b3.jpg',
      alt: 'Slide 3',
      href: '/product/headset',
      text: 'Kuvaku',
      date: '19-08-2024',
      location: 'Surabaya',
    },
    {
      src: '/b2.jpg',
      alt: 'Slide 3',
      href: '/product/headset',
      text: 'Macklemore',
      date: '20-08-2024',
      location: 'Bandung',
    },
    {
      src: '/b1.jpg',
      alt: 'Slide 3',
      href: '/product/headset',
      text: 'AKB 48',
      date: '21-08-2024',
      location: 'Jakarta',
    },
    {
      src: '/b2.jpg',
      alt: 'Slide 3',
      href: '/product/headset',
      text: 'Headset',
    },
    {
      src: '/b3.jpg',
      alt: 'Slide 3',
      href: '/product/headset',
      text: 'Headset',
    },
  ];

  const totalSlides = slides.length;

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - slideShow : prevSlide - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - slideShow ? 0 : prevSlide + 1,
    );
  };

  const displayedSlides = slides.slice(currentSlide, currentSlide + slideShow);

  return (
    <div className="bg-black py-8">
      <div className="w-3/4  mx-auto container">
        <p className="text-4xl text-white">
          <span className="text-yellow-500 font-extrabold">I</span> UPCOMING
          EVENT
        </p>
        <div className="carousel flex flex-wrap w-full relative overflow-hidden mt-10">
          <div className="flex gap-4 flex-col md:flex-row lg:flex-row">
            {displayedSlides.map((slide, index) => (
              <div key={index}>
                <div className="carousel-item flex flex-col lg:h-[35vh] w-full h-auto pb-2 rounded-xl bg-white overflow-hidden">
                  <Link href={slide.href}>
                    <Image
                      src={slide.src}
                      className="w-full hover:scale-110 duration-300"
                      alt={slide.alt}
                      width={400}
                      height={400}
                    />
                  </Link>
                  <div className="ml-4 mt-3 flex flex-col">
                    <h1 className="font-bold text-black text-xl">
                      {slide.text}
                    </h1>
                    <div className="flex flex-col text-black">
                      {slide.date} <br />
                      {slide.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9 left-0 transform cursor-pointer -translate-y-1/2 flex items-center justify-center w-full">
            <button
              onClick={handlePrevClick}
              className="btn hover:scale-110 btn-circle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="btn hover:scale-110 btn-circle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
