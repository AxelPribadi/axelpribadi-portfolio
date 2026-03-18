import './Projects.less'
import { useEffect, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import GitHubLineIcon from './icons/project/GitHubLine'
import ExternalLinkIcon from './icons/project/ExternalLink'


const repos = [
  { repo: 'FileExtractor', tags: ['Python', 'OpenAI', 'Agno', 'LanceDB', 'Chainlit'] },
  { repo: 'axelpribadi-portfolio', tags: ['TypeScript', 'React', 'Less', 'Vite', 'Vercel'] },
  { repo: 'ai-council',    tags: ['Python', 'TypeScript', 'LangGraph', 'LiteLLM'] },
  { repo: 'DF-GANeXt',    tags: ['Python', 'PyTorch', 'opencv', 'ConvNeXt', 'Grad-CAM', 'Vision Transformer'] },
]

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  homepage: string
  lastUpdated: string
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export default function Projects() {
  const labelRef  = useScrollReveal<HTMLSpanElement>()
  const gridRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const footerRef = useScrollReveal<HTMLDivElement>()

  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    Promise.all(
      repos.map(({ repo, tags }) =>
        fetch(`https://api.github.com/repos/AxelPribadi/${repo}`)
          .then(r => r.json())
          .then(data => ({
            title: data.name as string,
            description: (data.description ?? '') as string,
            tags,
            link: data.html_url as string,
            homepage: (data.homepage ?? '') as string,
            lastUpdated: formatDate(data.pushed_at as string),
          }))
      )
    ).then(setProjects)
  }, [])

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span ref={labelRef} className="section-label reveal--clip">Projects</span>
        <div ref={gridRef} className="projects__grid reveal-stagger--scale">
          {projects.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <ul className="project-card__tags">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__footer">
                <div className="project-card__actions">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__github" aria-label="View on GitHub"><GitHubLineIcon /></a>
                  <a href={project.homepage || project.link} target="_blank" rel="noopener noreferrer" className="project-card__github project-card__github--open" aria-label="Open project"><ExternalLinkIcon /><span>Open</span></a>
                </div>
                <span className="project-card__updated">Last Updated {project.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
        <div ref={footerRef} className="projects__footer reveal" style={{ '--reveal-delay': '280ms' } as React.CSSProperties}>
          <a href="https://github.com/AxelPribadi" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            View all Projects
          </a>
        </div>
      </div>
    </section>
  )
}
