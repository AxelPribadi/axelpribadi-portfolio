import './Projects.less'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'File Extractor',
    description: 'An RAG pipeline that extracts, chunks, and embeds documents into a vector DB for context-aware LLM interaction',
    tags: ['Python', 'OpenAI', 'Agno', 'LanceDB', 'Chainlit'],
    link: 'https://github.com/AxelPribadi/FileExtractor',
  },
  {
    title: 'AI Council',
    description: 'A multi-LLM debate system where a panel of AI models deliberates over a question to converge on the best answer, moderated by a judge model',
    tags: ['Python', 'TypeScript', 'LangGraph', 'LiteLLM'],
    link: 'https://github.com/AxelPribadi/ai-council',
  },
  {
    title: 'DF-GANeXt',
    description: 'A deepfake detection model using ConvNeXt — a CNN with a transformer-like architecture — to identify manipulated images',
    tags: ['Python', 'ConvNeXt', 'Grad-CAM'],
    link: 'https://github.com/AxelPribadi/DF-GANeXt',
  },
]

export default function Projects() {
  const labelRef  = useScrollReveal<HTMLSpanElement>()
  const gridRef   = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })
  const footerRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span ref={labelRef} className="section-label reveal--clip">Projects</span>
        <div ref={gridRef} className="projects__grid reveal-stagger--scale">
          {projects.map(project => (
            <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </a>
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
