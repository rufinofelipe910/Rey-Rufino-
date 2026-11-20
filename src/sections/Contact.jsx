
import SocialLinks from '../components/SocialLinks.jsx'
import Button from '../components/Button.jsx'

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-wrapper glass">

          <div className="contact-content animate-up">
            <span className="section-eyebrow">
              CONECTEMOS
            </span>

            <h2>
              ¿Creamos algo
              <span className="text-gradient">
                {' '}extraordinario?
              </span>
            </h2>

            <p>
              Estoy abierto a conectar, compartir ideas,
              explorar nuevas posibilidades y descubrir
              oportunidades en el mundo digital.
            </p>

            <div className="contact-actions">
              <Button
                href="https://t.me/ReyRufinodev"
                target="_blank"
              >
                Contactarme por Telegram ↗
              </Button>

              <Button
                href="https://whatsapp.com/channel/0029VbBUHyQCsU9IpJ0oIO2i"
                target="_blank"
                variant="outline"
              >
                Visitar mi canal de WhatsApp
              </Button>
            </div>

            <div className="contact-social">
              <span>
                TAMBIÉN PUEDES ENCONTRARME EN
              </span>

              <SocialLinks />
            </div>
          </div>

          <div className="contact-visual animate-float">
            <div className="contact-orbit">
              <div className="contact-orbit-inner">
                <span>♛</span>
                <strong>REY RUFINO</strong>
                <small>LET'S CONNECT</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
