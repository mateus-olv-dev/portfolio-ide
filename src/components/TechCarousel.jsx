import './TechCarousel.css';

const tecnologias = ['React','JavaScript', 'CSS', 'HTML', 'Git', 'Java', 'CSS', 'HTML', 'Git','React', 'JavaScript'];


function TechCarousel() {
  return (
        <div className="content">
          <div className="benefits">
            <div className="basic-marquee basic-marquee-1">
              {tecnologias.map((word, index) => (
                <span className="word-pill" key={`row1-${word}-${index}`}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
  );
}

export default TechCarousel;