import { Routes, Route, NavLink} from 'react-router-dom';
import './EditorScreen.css';

import Home from '../pages/Home'
import Projetos from '../pages/Projetos'
import Contatos from '../pages/Contatos'


export function EditorScreen() {
  return(
    <section className="editor-screen sobre-mim">
      <EditorNav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/habilidades' element={<Projetos />}/>
          <Route path='/contatos' element={<Contatos/>}/>
        </Routes>
    </section>
    
    
        
  )
}

function EditorNav() {
  return (
    <nav className='editor-nav'>
      <ul>
        <li>
          <NavLink to="/" end  className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
              SobreMim.md
          </NavLink >
        </li>
        <li>
          <NavLink to="/habilidades"  className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
              Habilidades.json
          </NavLink>
        </li>
        <li>
          <NavLink to="/contatos"  className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
              Contatos.md
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}