import { Routes, Route, NavLink} from 'react-router-dom';
import './EditorScreen.css';

import Home from '../pages/Home'
import Projetos from '../pages/Projetos'
import Contatos from '../pages/Contatos'


export function EditorScreen() {
  return(
    <section className="editor-screen">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                width={"13px"}
                height={"13px"}
              >
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              SobreMim.jsx
          </NavLink >
        </li>
        <li>
          <NavLink to="/habilidades"  className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-11.5 -10.23174 23 20.46348"
                        width={"13px"}
                        height={"13px"}
                      >
                        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                        <g stroke="#61DAFB" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2" />
                          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                        </g>
              </svg>
              Projetos.jsx
          </NavLink>
        </li>
        <li>
          <NavLink to="/contatos"  className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                width={"13px"}
                height={"13px"}
              >
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              Contatos.jsx
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}