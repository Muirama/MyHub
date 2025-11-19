import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../styles/TechCarousel.css";

export default function TechCarousel() {
  const techLogos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      alt: "Flutter",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React Native",
      badge: "RN",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
      alt: "Laravel",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      alt: "Spring Boot",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      alt: "Tailwind CSS",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma",
    },
  ];

  const duplicatedLogos = [...techLogos, ...techLogos];

  return (
    <div className="tech-carousel-wrapper">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        loopAdditionalSlides={techLogos.length}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        grabCursor={true}
        allowTouchMove={true}
        className="tech-carousel"
      >
        {duplicatedLogos.map((logo, index) => (
          <SwiperSlide key={index} className="tech-slide">
            <div className="tech-logo-card">
              <img
                src={logo.src}
                alt={logo.alt}
                className="tech-logo"
                title={logo.alt}
              />
              {logo.badge && <span className="tech-badge">{logo.badge}</span>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
