import { useState} from 'react'
import emailjs from "emailjs-com";

import images from '../../assets/img'
import './contact.scss'

const Contact = () => {
  const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)
    const [contactInfo, setContactInfo] = useState({
      name: '',
      email: '',
      message: '',
    })
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true)
    if (contactInfo.email === '' || contactInfo.name === '' || contactInfo.message === '') {
      setError(true)
    } 
    else{
      emailjs
        .sendForm(
          'service_v0jyd3u',
          'template_ia0i7w3',
          e.target,
          'pV3R-4aTEXW0hSiRy'
        )
        .then(res => {
          console.log('SUCESS')
          console.log(res)
          setLoading(false)
          setSent(true)
        })
        .catch(err => {
          console.log(err)
          setLoading(false)
        })
      e.target.reset()
    }   
  }
  return (
    <div className="contact section__padding" id="contact">
      <div className="title">
        <h3>Get in Touch</h3>
      </div>
      <div className="contact-wrapper">
        <div className="phone">
          <img src={images.mobile} alt="" />
          <a href="tel:+212 689266430">+212 689266430</a>
        </div>
        <div className="email">
          <img src={images.email} alt="" />
          <a href="mailto:younessbouydia@gmail.com">younessbouydia@gmail.com</a>
        </div>
      </div>
      <div className="fields">
        {!sent ? (
          <form method="post" className="contact_form" onSubmit={sendEmail}>
            <div className="form-control">
              <input type="hidden" name="to_name" value="youness" />
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                onChange={e =>
                  setContactInfo({ ...contactInfo, name: e.target.value })
                }
                value={contactInfo.name}
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                onChange={e =>
                  setContactInfo({ ...contactInfo, email: e.target.value })
                }
                value={contactInfo.email}
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Message"
                onChange={e =>
                  setContactInfo({ ...contactInfo, message: e.target.value })
                }
                value={contactInfo.message}
              ></textarea>
            </div>
            <div>
              <p style={{ color: 'red', textAlign: 'center' }}>
                {error && 'please fill all info above'}
              </p>
            </div>
            <div className="btn_warpper">
              <button type="submit" className="btn" disabled={loading}>
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <h4>your message has sent,Thank you 🙏</h4>
        )}
      </div>

      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()}
          <br /> Created by youness bouydia
        </p>
      </div>
    </div>
  )
}

export default Contact
