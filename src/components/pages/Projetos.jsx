import './Projetos.css';
import cocktailsImg from "../../assets/projetos-img/cocktails.png";
import codeConnectImg from "../../assets/projetos-img/code-connect.png";
import  fokusImg from "../../assets/projetos-img/fokus.png";
import memotecaImg from "../../assets/projetos-img/memoteca.png";

const projetos = [
  {
    id: "cocktails",
    title: "Cocktails Website",
    description: "Projeto desenvolvido com o objetivo principal de exercitar consumo de APIs e renderização dinâmica de elementos no DOM, sem uso de frameworks.",
    image: cocktailsImg,
    tags: ["JavaScript", "HTML", "CSS", "API"],
    repoUrl: "https://github.com/mateus-olv-dev/website-cocktails",
    liveUrl: "https://website-cocktails.vercel.app"
  },
  {
    id: "memoteca",
    title: "Memoteca",
    description: "Projeto desenvolvido com JavaScript para praticar a criação de um CRUD integrado ao consumo de APIs, com cadastro, consulta, edição e exclusão de dados.",
    image: memotecaImg,
    tags: ["JavaScript", "API", "CRUD"],
    repoUrl: "https://github.com/mateus-olv-dev/memoteca",
  },
  {
    id: "code-connect",
    title: "Code Connect",
    description: "Projeto desenvolvido com JavaScript para simular o processo de upload de arquivos, com seleção, exibição de informações e progresso visual, sem upload real ao servidor.",
    image: codeConnectImg,
    tags: ["JavaScript", "DOM", "UI"],
    repoUrl: "https://github.com/mateus-olv-dev/code-connect",
  },
  {
    id: "fokus",
    title: "Fokus",
    description: "Projeto desenvolvido com JavaScript para criar um Pomodoro Timer, controlando ciclos de foco e descanso por meio de um cronômetro interativo.",
    image: fokusImg,
    tags: ["JavaScript", "DOM", "Timer"],
    repoUrl: "https://github.com/mateus-olv-dev/pomodoro-timer",
  },
];

export default function Projetos() {
  return (
    <section className="editor-screen-projetos">
      <h1>Projetos</h1>
      <div className="container-projetos">
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  );
}

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
  </svg>
);

function ProjectCard({ title, description, image, tags = [], liveUrl, repoUrl }) {
  return (
    <article className="project-card">
      <div className="project-card-image-wrapper">
        <img src={image} alt={`Screenshot do projeto ${title}`} loading="lazy" />
      </div>

      <div className="project-card-body">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>

        {tags.length > 0 && (
          <ul className="project-card-tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-card-footer">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
            <ExternalLinkIcon />
            Ver projeto
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="project-card-link secondary">
            <GithubIcon />
            Código
          </a>
        )}
      </div>
    </article>
  );
}