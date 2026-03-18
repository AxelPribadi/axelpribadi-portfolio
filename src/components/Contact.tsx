import './Contact.less'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact() {
  const labelRef = useScrollReveal<HTMLSpanElement>()
  const formRef  = useScrollReveal<HTMLFormElement>({ threshold: 0.1 })

  const [result, setResult] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://web3forms.com/client/script.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  const onSubmit: NonNullable<React.ComponentProps<'form'>['onSubmit']> = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setResult("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "1db7e8d3-cb1b-4a39-87da-e517e36b1690")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    setResult(data.success ? "Message sent!" : "Something went wrong. Please try again.")
    setSubmitting(false)
    setTimeout(() => setResult(""), 2000)

    if (data.success) {
      (event.target as HTMLFormElement).reset()
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span ref={labelRef} className="section-label reveal--clip">Contact</span>
        <div className="contact__form-wrap">
          <form ref={formRef} className="contact__form reveal" onSubmit={onSubmit}>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-name">Name</label>
              <input className="contact__input" id="contact-name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-email">Email</label>
              <input className="contact__input" id="contact-email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="contact__form-group">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea className="contact__textarea" id="contact-message" name="message" rows={5} placeholder="What's on your mind?" required />
            </div>
            <div className="h-captcha" data-captcha="true"></div>
            <button type="submit" className="btn btn--primary" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {result && <div className="contact__toast">{result}</div>}
        </div>
      </div>
    </section>
  )
}
