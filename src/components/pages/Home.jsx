import './Home.css';
import '../TechCarousel'
import TechCarousel from '../TechCarousel';

export default function Home () {
  return (
    <div className="home">
      <span>// olá, eu sou o</span>
      <h1>Mateus Oliveira,</h1>
      <h2>estudante de Desenvolvimento de Software</h2>
      <p className="resume">
        Gosto de transformar interfaces confusas em telas simples de usar, e de entender o que acontece por trás de cada componente. Ainda estou construindo meu portfólio de projetos — este site é o primeiro deles. 
      </p>
      <p className='embla-title'>Algumas das tecnologias que utilizo</p>
      <TechCarousel />
    </div>
    

      
  )
}

// function Tecnologias() {
//   return (
//       <div className="container-tecnologias">
//         <ul className="tecnologias">
//           <li>React</li>
//           <li>JavaScript</li>
//           <li>Java</li>
//           <li>Git</li>
//           <li>HTML</li>
//           <li>CSS</li>
//         </ul>
//       </div>
//   )
  
// }