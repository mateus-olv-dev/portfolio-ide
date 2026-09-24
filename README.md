# Mateus Oliveira — Portfólio (IDE)

Portfólio pessoal desenvolvido em React, com uma proposta visual diferente do modelo tradicional: a página inteira é construída como se fosse um editor de código real, no estilo IDE.

🔗 [mateus-oliveira-portfolio.vercel.app](https://mateus-oliveira-portfolio.vercel.app/)

## Sobre o projeto

A ideia central foi tratar a navegação do site como a navegação de uma IDE, em vez de usar um menu convencional:

- A **barra lateral** funciona como o explorador de arquivos, listando as seções do site (`SobreMim.jsx`, `Projetos.jsx`, `Contatos.jsx`) como se fossem arquivos reais de um projeto.
- As **abas** no topo representam as páginas abertas, trocando de conteúdo ao clicar.
- A **barra de status**, no rodapé, reaproveita elementos comuns de um editor (branch, linguagem) para também exibir links de contato e disponibilidade para oportunidades.
- O bloco "Sobre mim" é apresentado como um arquivo de código sendo lido, reforçando a identidade de desenvolvedor logo na primeira impressão.

A proposta não foi só estética: a intenção foi que qualquer recrutador ou desenvolvedor que abra o site reconheça imediatamente a referência visual e entenda, sem precisar de texto explicativo, que está diante do trabalho de alguém que lida com código no dia a dia.

## Tecnologias utilizadas

- **React** — componentização das páginas e navegação entre seções
- **CSS** — estilização, responsividade e animações (sem frameworks de UI)
- **Vite** — ambiente de build e desenvolvimento

## Responsividade

O ajuste de responsividade do layout (adaptação de textos, espaçamentos e da foto de perfil para diferentes tamanhos de tela, de celular a monitores grandes) foi desenvolvido com apoio de IA (Claude, da Anthropic), incluindo o uso de `clamp()` para escala fluida de tipografia em vez de breakpoints fixos.

## Rodando localmente

```bash
git clone https://github.com/mateus-olv-dev/portfolio-ide.git
cd portfolio-ide
npm install
npm run dev
```

## Contato

- E-mail: mateusolv.dev@gmail.com
- GitHub: [github.com/mateus-olv-dev](https://github.com/mateus-olv-dev)
- LinkedIn: _(adicionar link)_
