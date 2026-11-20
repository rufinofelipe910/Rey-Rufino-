
function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  demoUrl,
  demoLabel = 'Ver proyecto',
  codeUrl,
  featured = false
}) {
  return (
    <article className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-card-image">
        {image ? (
          <img src={image} alt={`Vista previa de ${title}`} />
        ) : (
          <div className="project-image-placeholder">
            <span>🤖</span>
            <p>Waguri Bot</p>
          </div>
        )}
      </div>

      <div className="project-card-content">
        <div className="project-card-heading">
          <h3>{title}</h3>

          {featured && (
            <span className="project-featured">
              Destacado
            </span>
          )}
        </div>

        <p className="project-description">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-links">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {demoLabel} ↗
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
