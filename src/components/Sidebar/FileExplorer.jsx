import './FileExplorer.css';
import { NavLink } from "react-router-dom";


export function FileExplorer () {
  return (
     <div className="file-tree">
      <ul>
        <li>
          <details open>
            <summary>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"13px"}
                  height={"13px"}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 5.5C2 4.67157 2.67157 4 3.5 4H9.17157C9.5694 4 9.95093 4.15804 10.2322 4.43934L11.7929 6H20.5C21.3284 6 22 6.67157 22 7.5V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V5.5Z"
                    fill="#90A4AE"
                  />
                  <path
                    d="M2 7.5C2 6.67157 2.67157 6 3.5 6H20.5C21.3284 6 22 6.67157 22 7.5V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V7.5Z"
                    fill="#B0BEC5"
                  />
                </svg>
              src
              </summary>

            <ul>
              <li>
                <details open>
                  <summary>
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"13px"}
                  height={"13px"}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 5.5C2 4.67157 2.67157 4 3.5 4H9.17157C9.5694 4 9.95093 4.15804 10.2322 4.43934L11.7929 6H20.5C21.3284 6 22 6.67157 22 7.5V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V5.5Z"
                    fill="#90A4AE"
                  />
                  <path
                    d="M2 7.5C2 6.67157 2.67157 6 3.5 6H20.5C21.3284 6 22 6.67157 22 7.5V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V7.5Z"
                    fill="#B0BEC5"
                  />
                </svg>
                    pages</summary>

                  <ul>
                    <li>
                      <NavLink to="/" className={({ isActive }) =>
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
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/habilidades" className={({ isActive }) =>
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
                      <NavLink to="/contatos" className={({ isActive }) =>
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
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}


export default FileExplorer;