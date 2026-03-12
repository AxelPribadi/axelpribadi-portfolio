import './Contact.less'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const labelRef = useScrollReveal<HTMLSpanElement>()
  const formRef  = useScrollReveal<HTMLFormElement>({ threshold: 0.1 })

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span ref={labelRef} className="section-label reveal--clip">Contact</span>
        <form ref={formRef} className="contact__form reveal" onSubmit={e => e.preventDefault()}>
          <div className="contact__form-group">
            <label className="contact__label" htmlFor="contact-name">Name</label>
            <input className="contact__input" id="contact-name" type="text" placeholder="Your name" />
          </div>
          <div className="contact__form-group">
            <label className="contact__label" htmlFor="contact-email">Email</label>
            <input className="contact__input" id="contact-email" type="email" placeholder="your@email.com" />
          </div>
          <div className="contact__form-group">
            <label className="contact__label" htmlFor="contact-message">Message</label>
            <textarea className="contact__textarea" id="contact-message" rows={5} placeholder="What's on your mind?" />
          </div>
          <button type="submit" className="btn btn--primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
