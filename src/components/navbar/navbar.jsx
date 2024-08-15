import { Link } from 'react-router-dom';
import LogoBZ from '/images/BZPrint-Logo.png'
import './navbar.css'


const Navbar =  ({ scrollToMain, scrollToQuienesSomos, scrollToServicios, scrollToEnvios, scrollToPreguntasFrecuentes, scrollToEquipo, scrollToContacto }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid navbar">
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
              <div className="vertical-divider-NavBar col-1"></div>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToServicios}>Servicios</button>
              </li>
              <div className="vertical-divider-NavBar col-1"></div>
              <li className="nav-item">
                <button className="nav-link" onClick={scrollToEnvios}>Envios</button>
              </li>
              <div className="vertical-divider-NavBar col-1"></div>

              <li className="nav-item">
                <button className="nav-link" onClick={scrollToPreguntasFrecuentes}>Preguntas Frecuentes</button>
              </li>
              <div className="vertical-divider-NavBar col-1"></div>

              <li className="nav-item">
                <button className="nav-link" onClick={scrollToEquipo}>Nuestro Equipo</button>
              </li>
              <div className="vertical-divider-NavBar col-1"></div>

              <li className="nav-item">
                <button className="nav-link" onClick={scrollToContacto}>Contacto</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar