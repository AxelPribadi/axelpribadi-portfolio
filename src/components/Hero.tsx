import './Hero.less'

const taglineWords = 'Architecting data-driven intelligence'.split(' ')

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero__greeting hero-animate" style={{ animationDelay: '80ms' }}><strong>//hi, i'm</strong></p>
        <h1 className="hero__name hero-blur-in" style={{ animationDelay: '200ms' }}>Axel Pribadi</h1>
        <p className="hero__tagline">
          {taglineWords.map((word, i) => (
            <span key={i} className="hero-word" style={{ animationDelay: `${360 + i * 55}ms` }}>
              {word}
            </span>
          ))}
        </p>
        <div className="hero__actions hero-animate" style={{ animationDelay: '800ms' }}>
          <a href="#contact" className="btn btn--primary">Get in Touch</a>
          <a href="#projects" className="btn btn--outline">View my Projects</a>
        </div>
      </div>
    </section>
  )
}
