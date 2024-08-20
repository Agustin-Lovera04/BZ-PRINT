import './footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center text-lg-left">
                        <h5>Desarrollo</h5>  <hr />
                        <p>Lovera Agustin, Full Stack Developer</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>RRSS</h5> <hr />
                        <ul className="list-unstyled d-inline-block text-center">
                            <li>
                                <a href="https://agustin-lovera04.github.io/PortFolio_Lovera/" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter"></i>PortFolio
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/aguslovera__/" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/agustin-lovera-5b1576274/" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="moreLinks col-md-4 text-center text-lg-end">
                        <h5>Contacto</h5> <hr />
                        <ul className="list-unstyled">
                            <li>
                                    <p>+54 (342) 4076088</p>
                            </li>
                            <li>
                                <p>Santa Fe, Argentina</p>
                            </li>
                            <p>3000</p>
                            <li />
                         </ul>
                    </div>
                </div>
                <div className="row mt-3"><hr />
                    <div className="col text-center">
                        <p>&copy; 2024 LOVERA AGUSTIN. TODOS LOS DERECHOS RESERVADOS.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
