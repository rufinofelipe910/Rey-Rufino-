
function Skills() {
  const skillGroups = [
    {
      number: '01',
      category: 'DESARROLLO WEB',
      icon: '⌘',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'Diseño responsive'
      ]
    },
    {
      number: '02',
      category: 'CIBERSEGURIDAD',
      icon: '🛡️',
      skills: [
        'Seguridad informática',
        'Seguridad de redes',
        'Protección de datos',
        'Seguridad web',
        'Buenas prácticas digitales'
      ]
    },
    {
      number: '03',
      category: 'HERRAMIENTAS DIGITALES',
      icon: '⚡',
      skills: [
        'Git',
        'GitHub',
        'Visual Studio Code',
        'Vercel',
        'Herramientas de IA'
      ]
    },
    {
      number: '04',
      category: 'CREATIVIDAD',
      icon: '✧',
      skills: [
        'Diseño digital',
        'Creatividad',
        'Resolución de problemas',
        'Aprendizaje continuo'
      ]
    }
  ]

  return (
    <section className="skills section-padding" id="skills">
      <div className="container">
        <div className="section-heading animate-up">
          <span className="section-eyebrow">MI UNIVERSO TECNOLÓGICO</span>

          <h2>
            Habilidades y
            <span className="text-gradient"> conocimientos.</span>
          </h2>

          <p>
            Desarrollo, ciberseguridad, herramientas digitales
            y creatividad para construir el futuro.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              className="skill-card glass hover-lift"
              key={group.number}
            >
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-icon">{group.icon}</span>
              </div>

              <h3>{group.category}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    <span className="skill-dot"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-note">
          <span>✦</span>
          Siempre aprendiendo. Siempre evolucionando.
        </p>
      </div>
    </section>
  )
}

export default Skills
