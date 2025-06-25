import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    author: "Christopher Caldwell",
    title:
      "Smoke signals and red herrings: What the UK-EU pact is really about",
    tags: ["ILLUMINEM VOICES", "CARBON MARKET"],
    description:
      "A technical agreement on carbon markets may emerge as the most transformative climate act since Brexit.",
    bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    author: "Dr. Aris Persidis",
    title: "The AI Revolution: Navigating the Future of Intelligence",
    tags: ["TECH SPOTLIGHT", "AI"],
    description:
      "Understanding AI's potential and challenges is crucial as it evolves at an unprecedented pace.",
    bg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    author: "Priya Sharma",
    title: "Global Supply Chains: Resilience in an Age of Uncertainty",
    tags: ["ECONOMIC OUTLOOK", "GLOBAL TRADE"],
    description:
      "Recent events force a re-evaluation of traditional supply models towards greater resilience.",
    bg: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    author: "Ben Carter",
    title: "Sustainable Futures: The Push for Greener Urban Development",
    tags: ["ENVIRONMENT", "URBAN PLANNING"],
    description:
      "Innovative green infrastructure and policy changes are paving the way for sustainable urban living.",
    bg: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    author: "Dr. Evelyn Reed",
    title: "The Quantum Leap: How Computing Will Change Everything",
    tags: ["SCIENCE & TECH", "QUANTUM COMPUTING"],
    description:
      "Quantum computers are poised to solve problems currently intractable for even the most powerful supercomputers.",
    bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Home = () => {
  return (
    <Swiper
      id="home"
      className="w-full h-screen"
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            ' w-3 h-3 md:w-4 md:h-4 opacity-50 !bg-white rounded-full mx-1 transition-opacity duration-300"></span>'
          );
        },
      }}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <div
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          <div className="relative z-10 flex flex-col justify-end h-full text-white p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                {slide.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="backdrop-blur-sm bg-white/10 text-white text-xs sm:text-[0.8rem] px-3 py-1 rounded-full font-medium tracking-wide"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-tight md:leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                {slide.description}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={slide.authorImage}
                  alt={slide.author}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 object-cover"
                />
                <div>
                  <span className="block text-sm sm:text-base text-white font-semibold">
                    {slide.author}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Home;
