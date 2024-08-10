import { Link } from 'react-router-dom';
import LogoBZ from '/images/BZPrint-Logo.png'
import './navbar.css'


const Navbar =  ({ scrollToMain, scrollToQuienesSomos, scrollToServicios, scrollToEnvios, scrollToPreguntasFrecuentes, scrollToClientes, scrollToContacto }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid navbar p-2">
        <Link to='/#' className="navbar-brand">
          <button className="logoBtn-Navbar" onClick={scrollToMain}>
            <img src={LogoBZ} alt="Logo" className='logoImg-Navbar' />
          </button>
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
  
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToQuienesSomos}>Quienes Somos</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToServicios}>Servicios</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToEnvios}>Envios</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToPreguntasFrecuentes}>Preguntas Frecuentes</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToClientes}>Clientes</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToContacto}>Contacto</button>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ES/EN
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className='li-dropdown-item'><Link className="dropdown-item" to="/"><img className='flags' src={flagES} alt="ESPAÑOL" /></Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className='li-dropdown-item'><p className=' fw-bold p-dropdown-item'>PROXIMAMENTE</p><Link className="dropdown-item" to="/"><img className='flags' src={flagEU} alt="INGLES" /></Link></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar