
function Experience() {
  const journey = [
    {
      number: '01',
      label: 'INTERESES TECNOLÓGICOS',
      title: 'Explorando el mundo digital',
      description:
        'Interés por la tecnología, el desarrollo web, la informática y las nuevas posibilidades que ofrece la innovación.'
    },
    {
      number: '02',
      label: 'CIBERSEGURIDAD',
      title: 'Aprendiendo sobre seguridad digital',
      description:
        'Interés en la seguridad informática, la protección de datos y las buenas prácticas en el entorno digital.'
    },
    {
      number: '03',
      label: 'PROYECTO DESTACADO',
      title: 'WAGURI BOT',
      description:
        'Un proyecto centrado en la automatización de WhatsApp, las descargas multimedia y el entretenimiento.'
    }
  ]

  return (
    <section
      className="experience section-padding"
      id="experience"
    >
      <div className="container">
        <div className="section-heading animate-up">
          <span className="section-eyebrow">
            MI EVOLUCIÓN DIGITAL
          </span>

          <h2>
            Mi camino hacia
            <span className="text-gradient"> el futuro.</span>
          </h2>

          <p>
            Intereses, aprendizaje y proyectos que forman
            parte de mi universo tecnológico.
          </p>
        </div>

        <div className="experience-timeline">
          {journey.map((item) => (
            <article
              className="experience-item animate-up"
              key={item.number}
            >
              <div className="experience-marker">
                {item.number}
              </div>

              <div className="experience-content glass">
                <span className="experience-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-footer">
          <span>♛</span>
          <p>El futuro se construye aprendiendo y creando.</p>
        </div>
      </div>
    </section>
  )
}

export default Experience
