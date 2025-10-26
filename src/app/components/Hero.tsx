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

    const taglines = [
        "Transform Your Vision into Success with Consult Corp",
        "Unlock Strategic Growth and Innovation with Consult Corp",
        "Your Trusted Partner for Smarter, Scalable Business Solutions",
        "Consult Corp — Guiding You from Challenges to Achievements"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currenttagline, setCurrentTagline] = useState(0);
    
    useEffect(() => {
    slides.forEach((slide) => {
        const img = new window.Image();
        img.src = slide;
    });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {currentIndex < slides.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)}, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    useEffect(() => {
        const intervalTagLine = setInterval(() => {currenttagline < taglines.length - 1 ? setCurrentTagline(currenttagline + 1) : setCurrentTagline(0)}, 5000);
        return () => clearInterval(intervalTagLine);
    }, [currenttagline]);

    

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
                            priority = {index === 0}
                        />
                        
                    ))
                    }
                    <div className="absolute w-full h-full inset-0 bg-black opacity-40"></div>

                </div>
                
                <div className="text-white flex flex-col items-center space-y-5 pt-20 pb-9">
                   <h2 className={`hero-title font-semibold text-center w-full
                    text-[26px] px-[5%]
                    sm:text-[30px] sm:px-[10%]
                    md:text-[33px] md:px-[15%]
                    lg:text-[33px] lg:px-[20%]
                    xl:px-[24%]`}>
                    {taglines.map( (tagline, index) => (
                        <span key={index} className={`${currenttagline === index ? '' : 'hidden'}`}>{tagline}</span>

                    ))}
                   </h2>

                   <p className="hero-description text-center text-[18px]
                   px-[5%]
                   sm:px-[10%]
                   md:px-[15%]
                   lg:px-[20%]
                   xl:px-[24%]">
                        Transform your organization with strategic solutions tailored to your unique challenges and opportunities. Our expert team delivers results that matter.
                    </p>
                    <div className="hero-links flex gap-3">
                        <a href="#" className="hero-link text-white text-[18px] bg-blue-700 rounded border-2 border-white hover:bg-transparent
                        px-2 py-2.5
                        sm:px-4 sm:py-2.5
                        ">Explore Services</a>
                        <a href="#" className="hero-link text-white text-[18px] bg-transparent rounded border-2 border-white hover:bg-blue-700
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