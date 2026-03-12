import './About.less'
import { useScrollReveal } from '../hooks/useScrollReveal'
import UserIcon from './icons/about/User'
import BrainIcon from './icons/about/Brain'
import ChartIcon from './icons/about/Chart'
import CodeIcon from './icons/about/Code'
import WrenchIcon from './icons/about/Wrench'

const skillGroups = [
  {
    label: 'AI & Machine Learning',
    icon: <BrainIcon />,
    skills: ['Deep Learning', 'Machine Learning', 'Agno', 'Grad-CAM', 'RAG', 'LangGraph', 'Computer Vision'],
  },
  {
    label: 'Data Science',
    icon: <ChartIcon />,
    skills: ['Feature Engineering', 'Data Analysis', 'NER', 'Dimensionality Reduction', 'Clustering'],
  },
  {
    label: 'Programming',
    icon: <CodeIcon />,
    skills: ['Python', 'R', 'TypeScript', 'SQL', 'C', 'C++', 'Java', 'PyTorch', 'TensorFlow'],
  },
  {
    label: 'Tools & Infrastructure',
    icon: <WrenchIcon />,
    skills: ['Git', 'Docker', 'Linux', 'Qdrant', 'LanceDB', 'PostgreSQL', 'MSSQL', 'PowerBI', 'Tableau', 'Chainlit'],
  },
]

export default function About() {
  const labelRef  = useScrollReveal<HTMLSpanElement>()
  const bioRef    = useScrollReveal<HTMLDivElement>({ rootMargin: '0px 0px -30px 0px' })
  const skillsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="about" className="section about">
      <div className="container">
        <span ref={labelRef} className="section-label reveal--clip">About</span>
        <div className="about__content">
          <div className="about__bio">
            <div ref={bioRef} className="about__bio-card reveal--left" style={{ '--reveal-delay': '80ms' } as React.CSSProperties}>
              <div className="about__bio-card-header">
                <span className="about__bio-card-icon"><UserIcon /></span>
                <span className="about__bio-card-title">Background</span>
              </div>
              <p>
                I'm a data scientist focused on building applied AI systems, including
                agents, RAG pipelines, and machine learning models, and turning them
                into practical, usable products.
              </p>
              <p>
                Outside of data, I enjoy solving routes at the bouldering gym,
                playing chess, or unwinding with music and a good book.
              </p>
            </div>
          </div>
          <div className="about__skills">
            <div ref={skillsRef} className="about__skill-groups reveal-stagger">
              {skillGroups.map(group => (
                <div key={group.label} className="about__skill-group">
                  <div className="about__skill-group-header">
                    <span className="about__skill-group-icon">{group.icon}</span>
                    <span className="about__skill-group-label">{group.label}</span>
                  </div>
                  <ul className="about__skills-list">
                    {group.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
