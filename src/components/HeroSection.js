import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSection.css';

const heroSlides = [
  {
    id: 1,
    title: "Empowering Your Digital Presence",
    description: "Feynapps is your partner in comprehensive digital growth. From high-performance websites to elite technical recruitment, we elevate your business.",
    buttonText: "Explore Our Services",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Building Digital Storefronts",
    description: "We design, optimize, and manage premium websites tailored to your brand, ensuring a seamless user experience and robust architecture.",
    buttonText: "Web Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Amplify Your Voice",
    description: "Our comprehensive social media strategies drive engagement, build communities, and convert followers into loyal customers.",
    buttonText: "Social Media Services",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Connecting Top Talent",
    description: "We are a premier recruitment agency specializing in placing elite candidates. Explore our hiring drives and corporate workshops.",
    buttonText: "Find Your Next Hire",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div 
        className="hero-slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <div className="hero-container">
              <div className="hero-text-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="learn-more-btn">
                  <div className="circle-arrow">
                    <ArrowRight size={20} strokeWidth={2} />
                  </div>
                  {slide.buttonText}
                </button>
              </div>
              <div className="hero-image-content">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="hero-nav-arrow left-arrow" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="hero-nav-arrow right-arrow" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Navigation Dots */}
      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button 
            key={index} 
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
