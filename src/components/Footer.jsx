
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            REY RUFINO <span>👑</span>
          </a>

          <p className="footer-tagline">
            Building the Future.
          </p>

          <p className="footer-description">
            Tecnología, creatividad e innovación.
            Construyendo nuevas posibilidades digitales.
          </p>
        </div>

        {/* NAVIGATION */}

        <div className="footer-navigation">
          <h3>Explorar</h3>

          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>

        {/* BACK TO TOP */}

        <a
          href="#home"
          className="footer-back-top"
          aria-label="Volver al inicio"
        >
          ↑
          <span>Volver arriba</span>
        </a>

      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p>
          © {currentYear} Rey Rufino.
          Todos los derechos reservados.
        </p>

        <p className="footer-signature">
          Designed with ambition <span>👑</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer
