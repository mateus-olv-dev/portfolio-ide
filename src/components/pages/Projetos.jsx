import './Projetos.css';
import cocktailsImg from "../../assets/projetos-img/cocktails.png";
import codeConnectImg from "../../assets/projetos-img/code-connect.png";
import  fokusImg from "../../assets/projetos-img/fokus.png";
import memotecaImg from "../../assets/projetos-img/memoteca.png";


export default function Projetos () {
  return (
    <section className="editor-screen-projetos"> 
    <h1>Projetos</h1> 
    <div className="container-projetos"> 
          <div className="card-projeto"> 
            <img src={cocktailsImg} alt="Screenshot do projeto Cocktails Website" /> 
            <h2 className="projeto-title">Cocktails Website</h2>      
            <p className="projeto-descricao"> Projeto desenvolvido com o objetivo principal de exercitar consumo de APIs e renderização dinâmica de elementos no DOM, sem uso de frameworks. </p> 
          </div>

        <div className="card-projeto"> 
          <img src={memotecaImg} alt="Screenshot do projeto Memoteca" /> 
          <h2 className="projeto-title">Memoteca</h2> 
          <p className="projeto-descricao"> Projeto desenvolvido com JavaScript para praticar a criação de um CRUD integrado ao consumo de APIs. A aplicação permite cadastrar, consultar, editar e excluir dados, além de realizar requisições a uma API para manipulação e exibição das informações dinamicamente na interface.</p> 
        </div>

        <div className="card-projeto"> 
          <img src={codeConnectImg} alt="Screenshot do projeto Code Connect" /> 
          <h2 className="projeto-title">Code Connect</h2> 
          <p className="projeto-descricao"> Projeto desenvolvido com JavaScript para simular o processo de upload de arquivos, permitindo selecionar arquivos, exibir informações, e representar visualmente o progresso da operação, sem a necessidade de realizar um upload real para um servidor. </p> 
        </div> 

        
        
        <div className="card-projeto"> 
          <img src={fokusImg} alt="Screenshot do projeto Fokus" /> 
          <h2 className="projeto-title">Fokus</h2> 
          <p className="projeto-descricao"> Projeto desenvolvido com JavaScript para criar um Pomodoro Timer, permitindo controlar ciclos de foco e descanso por meio de um cronômetro interativo. O objetivo é aplicar conceitos de manipulação do DOM, controle de tempo e interação com o usuário. </p> 
        </div> 
    </div> 
  </section>
  )
}

