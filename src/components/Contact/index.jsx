import './contact.scss'
import useFormData from '../../functions/submitForm'
import Social from '../../components/Social'
import React, { useRef } from 'react'

function Contact() {
  const { formData, handleChange, handleSubmit } = useFormData()
  const form = useRef()

  return (
    <section className="contact">
      <Social />
      <div>
        <form
          onSubmit={(event) => handleSubmit(event, form.current)}
          ref={form}
        >
          <label htmlFor="name">Prénom/Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="topic">Sujet:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            placeholder="Offre d'emploi"
            value={formData.topic}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Sujet:</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div>
            <button type="submit" className="btn-submit">
              Envoyer
            </button>
            <div className="error-message"></div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
