import './Home.css';
import TechCarousel from '../TechCarousel';
import fotoPerfil from "../../assets/mateus-profile.webp";

export default function Home() {
  return (
    <div className="home sobre-mim">
      <div className="home-content">
        <span className="home-span">// olá, eu sou o</span>
        <h1 className="nome">Mateus Oliveira,</h1>
        <h2>estudante de Desenvolvimento de Software</h2>

        <p className="resume">
          Desenvolvedor em formação e participante do programa <span>Jovem Tech</span>.
          Tenho interesse em desenvolvimento de software, explorando tanto a criação de
          interfaces quanto a lógica por trás das aplicações.
        </p>
        <p className="resume">
          Atualmente, estudo desenvolvimento backend com <span>Java</span> e pratico
          desenvolvimento de interfaces com <span>React</span>, sempre buscando
          transformar ideias em soluções funcionais.
        </p>

        <p className="embla-title">Algumas das tecnologias que utilizo</p>
      <TechCarousel />
      </div>
      
      <div className="foto-wrap">
        <div className="foto">
          <img
            src={fotoPerfil}
            alt="Foto de Mateus Oliveira"
          />
          <span className="foto-tag">mateus-profile.webp</span>
        </div>
      </div>
    </div>
  );
}