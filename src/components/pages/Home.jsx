import './Home.css';
import '../TechCarousel'
import TechCarousel from '../TechCarousel';

export default function Home () {
  return (
    <div className="home sobre-mim">
      <span className='home-span'>// olá, eu sou o</span>
      <h1 className='nome'>Mateus Oliveira,</h1>
      <h2>estudante de Desenvolvimento de Software</h2>
      <p className="resume">
        Desenvolvedor em formação e participante do programa <span>Jovem Tech</span>. Tenho interesse em desenvolvimento de software, explorando tanto a criação de interfaces quanto a lógica por trás das aplicações. Atualmente, estudo <span>Java</span> e pratico desenvolvimento de interfaces com <span>React</span>, sempre buscando transformar ideias em soluções funcionais.
 
      </p>
      <p className='embla-title'>Algumas das tecnologias que utilizo</p>
      <TechCarousel />
    </div>
    

      
  )
}
