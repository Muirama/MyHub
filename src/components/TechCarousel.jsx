import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "../styles/TechCarousel.css";

export default function TechCarousel() {
  const techLogos = [
    { src: "/tech/react.png", alt: "React" },
    { src: "/tech/JS.png", alt: "JavaScript" },
    { src: "/tech/TS.png", alt: "TypeScript" },
    { src: "/tech/node.png", alt: "Node.js" },
    { src: "/tech/flutter.png", alt: "Flutter" },
    { src: "/tech/php.png", alt: "PHP" },
    { src: "/tech/laravel.png", alt: "Laravel" },
    { src: "/tech/mysql.png", alt: "MySQL" },
    { src: "/tech/java.png", alt: "Java" },
    { src: "/tech/spring.png", alt: "Spring Boot" },
    { src: "/tech/figma.png", alt: "Figma" },
    { src: "/tech/git.png", alt: "Git"},
    { src: "/tech/symfony.png", alt: "Symfony"},
    { src: "/tech/firebase.png", alt: "Firebase"},
    { src: "/tech/post.png", alt: "PostgreSQL"},
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
