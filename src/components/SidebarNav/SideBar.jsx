import { NavLink } from "react-router-dom";
import './SideBar.css'

export function SideBar() {
  return (
    <div className="side-bar">
      <div className="top-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>       
          <h2>mateus-oliveira</h2>
      </div>
      <SideBarNav />
    </div>
  )
  
}

function SideBarNav() {
  return (
    <nav className='side-bar-nav'>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
              SobreMim.md
          </NavLink>
        </li>
        <li>
          <NavLink to="/habilidades" className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/></svg>
              Skills.json
          </NavLink>
        </li>
        <li>
          <NavLink to="/contatos" className={({ isActive }) =>
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