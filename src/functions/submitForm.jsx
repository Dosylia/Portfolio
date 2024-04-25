import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function useFormData() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event, form) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'service_wzx3svq',
        'template_1tskysj',
        form,
        '131ymFUxHS9sJy6BL',
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return { formData, handleChange, handleSubmit }
}
