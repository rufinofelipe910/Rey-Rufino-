
import ProjectCard from '../components/ProjectCard.jsx'

function Projects() {
  const projects = [
    {
      title: 'WAGURI BOT',
      description:
        'Un bot de WhatsApp diseñado para automatizar y mejorar tu experiencia en WhatsApp. Permite descargar canciones y vídeos de YouTube, Instagram, Facebook y TikTok. También incluye diversos juegos y funciones para disfrutar de una experiencia más completa.',
      technologies: [
        'WhatsApp',
        'Automatización',
        'Descargas multimedia',
        'Juegos'
      ],
      demoUrl:
        'https://whatsapp.com/channel/0029VbBUHyQCsU9IpJ0oIO2i',
      demoLabel: 'Ver',
      featured: true
    }
  ]

  return (
    <section className="projects section-padding" id="projects">
      <div className="container">
        <div className="section-heading animate-up">
          <span className="section-eyebrow">
            MI PROYECTO PRINCIPAL
          </span>

          <h2>
            Conoce
            <span className="text-gradient"> Waguri Bot.</span>
          </h2>

          <p>
            Automatización, entretenimiento y herramientas
            digitales en un solo bot de WhatsApp.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
