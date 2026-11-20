
import Button from '../components/Button.jsx'
import SocialLinks from '../components/SocialLinks.jsx'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content animate-up">
          <span className="hero-label">
            <span className="hero-status-dot"></span>
            BIENVENIDO A MI UNIVERSO DIGITAL
          </span>

          <h1>
            Hola, soy
            <span className="hero-name text-gradient">
              REY RUFINO 👑
            </span>
          </h1>

          <h2>
            Creatividad, tecnología
            <span className="text-gradient"> e innovación.</span>
          </h2>

          <p className="hero-description">
            Apasionado por el mundo digital, la tecnología
            y la creación de nuevas experiencias.
            Este es mi espacio para compartir mi visión,
            mis habilidades y mis proyectos.
          </p>

          <div className="hero-actions">
            <Button href="#projects">
              Explorar proyectos <span>↗</span>
            </Button>

            <Button href="#contact" variant="outline">
              Contactarme
            </Button>
          </div>

          <div className="hero-social">
            <span>ENCUÉNTRAME EN</span>
            <SocialLinks />
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-emblem">
            <div className="hero-emblem-inner">
              <span className="hero-crown">♛</span>
              <span className="hero-emblem-name">RR</span>
              <span className="hero-emblem-caption">
                ROYAL CYBER
              </span>
            </div>
          </div>

          <span className="hero-floating-text hero-floating-top">
            INNOVATION
          </span>

          <span className="hero-floating-text hero-floating-bottom">
            DIGITAL FUTURE
          </span>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span></span>
        DESCUBRIR MÁS
      </a>
    </section>
  )
}

export default Hero
