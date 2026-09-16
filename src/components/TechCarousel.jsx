import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import './TechCarousel.css';

const tecnologias = ['React','JavaScript', 'CSS', 'HTML', 'Git', 'Java', 'CSS', 'HTML', 'Git','React', 'JavaScript'];

const OPTIONS = { loop: true };
const AUTO_SCROLL_OPTIONS = {
  speed: 1.5,
  startDelay: 0,
  playOnInit: true,
};

function TechCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [AutoScroll(AUTO_SCROLL_OPTIONS)]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoScroll?.play();
  }, [emblaApi]);

  return (
    <div className="embla" data-anime="left">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {tecnologias.map((tech, index) => (
            <div className="embla__slide" key={index}>{tech}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechCarousel;