// import { NavLink } from "react-router-dom";
import './SideBar.css'

import FileExplorer from './SideBarNew.jsx';

export function SideBar() {
  return (
    <div className="side-bar">
      <div className="top-title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>       
          <h2>mateus-oliveira</h2>
      </div>
      <FileExplorer />
    </div>
  )
  
}
