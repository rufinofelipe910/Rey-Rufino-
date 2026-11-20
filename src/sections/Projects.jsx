
import ProjectCard from '../components/ProjectCard.jsx'

function Projects() {
  const projects = [
    {
      title: 'WAGURI BOT',
      description:
        'Waguri Bot es un bot de WhatsApp que te ayuda a automatizar tu WhatsApp. Permite descargar canciones y vídeos de YouTube, Instagram, Facebook y TikTok. También cuenta con diversos juegos y funciones de entretenimiento.',
      image: '/images/waguri-bot.jpg',
      technologies: [
        'WhatsApp',
        'Automatización',
        'Descargas multimedia',
        'YouTube',
        'Instagram',
        'Facebook',
        'TikTok',
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
