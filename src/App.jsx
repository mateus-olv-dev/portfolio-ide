// import { useState } from 'react'

import './App.css'
import './layouts/IdeLayout';
import { IdeLayout } from './layouts/IdeLayout';

export default function App() {

  return (
    <body>
      <ExternalSideBar />
      <IdeLayout />
    </body>
  )
}

function ExternalSideBar() {
  return(
    <div className="external-side-bar">
    <ul>
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg></li>
      
      <li>
        <a href=""> <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg></a>
      </li>
      
      <li> 
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 2h-13A3.5 3.5 0 0 0 2 5.5v13A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-13A3.5 3.5 0 0 0 18.5 2ZM8.3 18.4H5.7V9.9h2.6v8.5ZM7 8.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm11.4 9.6h-2.6v-4.4c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.5h-2.6V9.9h2.5v1.1h.1c.4-.7 1.3-1.5 2.6-1.5 2.7 0 3.2 1.8 3.2 4.2v4.7Z"/>
          </svg>
        </a>
      </li>
    </ul>
  </div>
  )
  
  
}
