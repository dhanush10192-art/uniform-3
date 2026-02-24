import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, RotateCcw, CreditCard, Headphones } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jerseyImages = [
    '2233.jpg',
    '3311.jpg',
    '3images.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + jerseyImages.length) % jerseyImages.length);

  return (
    <div className="flex flex-col w-full">


      {/* 1. NEW VIDEO HEADER SECTION */}
      <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden pt-16 sm:pt-20">

        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute inset-0 z-10 bg-/40"></div> {/* Darker overlay for professional look */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <video
              className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
              src="miii.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Mobile Gradient Overlay (Bottom Up) */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a1d37]/90 to-transparent z-10 md:hidden"></div>

        {/* Desktop Angled Navy Gradient Overlay - Left Side */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[60%] lg:w-[55%] bg-gradient-to-r from-[#0a1d37] to-[#1e40af]/80 z-10 shadow-2xl"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        ></div>

        {/* Content Layer */}
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full flex items-center h-full">
          <div className="w-full md:w-1/2 text-white p-2 sm:p-4 md:p-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-4 sm:mb-6 leading-tight drop-shadow-lg max-w-md mx-auto md:mx-0">
              Uniforms Designed <br />
              For The Best Days <br />
              Of Your Life.
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/917812865788"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#0a1d37] hover:bg-gray-100 text-sm sm:text-lg font-bold py-2.5 sm:py-3 md:py-4 px-6 sm:px-8 md:px-12 rounded transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 2. EXISTING SLIDER SECTION */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

          {/* Slider Section */}
          <div className="relative">
            {/* Navigation Arrows - Outside the card on large screens */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-2 text-uniform-primary hover:text-uniform-secondary transition-colors hidden md:block"
            >
              <ChevronLeft size={40} strokeWidth={2.5} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-2 text-uniform-primary hover:text-uniform-secondary transition-colors hidden md:block"
            >
              <ChevronRight size={40} strokeWidth={2.5} />
            </button>

            {/* Card Slider */}
            <div className="relative h-[220px] sm:h-[350px] md:h-[500px] w-full rounded-xl sm:rounded-3xl overflow-hidden">
              {jerseyImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-[center_left] sm:bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />

                  {/* Dark Gradient Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div> */}

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 max-w-2xl text-white">
                    <h2 className="text-xl md:text-5xl font-bold uppercase leading-tight mb-2 md:mb-4">
                      <br />
                    </h2>







                  </div>
                </div>
              ))}

              {/* Dots Pagination */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {jerseyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-uniform-secondary w-8' : 'bg-gray-400/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>

              {/* Mobile Navigation Arrows (Inside card) */}
              <div className="absolute inset-0 flex justify-between items-center px-2 md:hidden pointer-events-none">
                <button onClick={prevSlide} className="p-2 pointer-events-auto text-white/70 hover:text-white">
                  <ChevronLeft size={30} />
                </button>
                <button onClick={nextSlide} className="p-2 pointer-events-auto text-white/70 hover:text-white">
                  <ChevronRight size={30} />
                </button>
              </div>
            </div>
          </div>

          {/* Features/Trust Banner */}
          <div className="mt-6 sm:mt-8 bg-uniform-primary rounded-xl py-5 sm:py-8 px-3 sm:px-8 text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">

              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 border-b sm:border-b-0 md:border-r border-blue-800 pb-3 sm:pb-0 last:border-0 text-center sm:text-left">
                <Truck size={28} className="text-white flex-shrink-0 sm:w-10 sm:h-10" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-xs sm:text-lg uppercase">Fast Delivery</h3>
                  <p className="text-blue-200 text-[10px] sm:text-xs uppercase tracking-wide">All over India</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 border-b sm:border-b-0 md:border-r border-blue-800 pb-3 sm:pb-0 last:border-0 text-center sm:text-left">
                <RotateCcw size={28} className="text-white flex-shrink-0 sm:w-10 sm:h-10" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-xs sm:text-lg uppercase">7 Days Return</h3>
                  <p className="text-blue-200 text-[10px] sm:text-xs uppercase tracking-wide">If goods have problems</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 border-b sm:border-b-0 md:border-r border-blue-800 pb-3 sm:pb-0 last:border-0 text-center sm:text-left">
                <CreditCard size={28} className="text-white flex-shrink-0 sm:w-10 sm:h-10" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-xs sm:text-lg uppercase">Secure Payment</h3>
                  <p className="text-blue-200 text-[10px] sm:text-xs uppercase tracking-wide">100% Secure</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
                <Headphones size={28} className="text-white flex-shrink-0 sm:w-10 sm:h-10" strokeWidth={1.5} />
                <div>
                  <h3 className="font-bold text-xs sm:text-lg uppercase">Customer Care</h3>
                  <p className="text-blue-200 text-[10px] sm:text-xs uppercase tracking-wide">10am - 7pm</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
