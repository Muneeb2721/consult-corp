"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
    const slides = [
        "/consulting.jpg",
        "/consulting1.jpg",
        "/consulting2.jpg",
        "/consulting3.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {currentIndex < slides.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)}, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="carousel-container">
            <div className="carousel-slide">

                <div className="absolute w-full h-full top-[12%] left-0 -z-10 flex ">
                    
                    
                    {slides.map((slide, index) => (
                        <Image 
                            key={index}
                            src={slide} 
                            alt={`Hero Image ${index + 1}`} 
                            width={1920} 
                            height={420} 
                            className={`w-full object-cover ${currentIndex === index ? '' : 'hidden'}`}
                        />
                        
                    ))
                    }
                    <div className="absolute w-full h-full inset-0 bg-black opacity-40"></div>

                </div>
                
                <div className="text-white flex flex-col items-center space-y-5 pt-20 pb-9">
                   <h2 className='hero-title font-semibold text-center w-full
                   text-2xl px-[8%]
                   sm:text-4xl sm:px-[15%]
                   md:text-4xl md:px-[23%]'>
                        Empower Your Business with Expect Consulting
                    </h2>
                   <p className="hero-description text-center
                   px-[10%]
                   sm:px-[18%]
                   md:px-[25%]">
                        Transform your organization with strategic solutions tailored to your unique challenges and opportunities. Our expert team delivers results that matter.
                    </p>
                    <div className="hero-links flex gap-3">
                        <a href="#" className="hero-link text-white bg-blue-600 rounded border-2 border-white hover:bg-transparent
                        px-2 py-2.5
                        sm:px-4 sm:py-2.5
                        ">Explore Services</a>
                        <a href="#" className="hero-link text-white bg-transparent rounded border-2 border-white hover:bg-blue-600
                        px-2 py-2.5
                        sm:px-4 sm:py-2.5
                        ">View Case Studies</a>
                    </div>
                    <div className="indicators-links flex gap-2 pt-8">
                        <div className="bg-white w-[50px] h-[3px] rounded cursor-pointer"></div>
                        <div className="bg-white w-[30px] h-[3px] rounded cursor-pointer"></div>
                        <div className="bg-white w-[30px] h-[3px] rounded cursor-pointer"></div>
                        <div className="bg-white w-[30px] h-[3px] rounded cursor-pointer"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}