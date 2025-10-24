import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from 'lucide-react'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Let's Create Something Extraordinary</h2>
          <p>Ready to transform your space with architectural sculpture? Let's discuss your vision.</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Get In Touch</h3>
            <p>
              Whether you're planning a public art installation, looking for gallery pieces, 
              or exploring collaborative opportunities, I'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <span>shruthi@sculpturestudio.com</span>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <span>+34 612 345 678</span>
                </div>
              </div>

              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <strong>Studio</strong>
                  <span>Barcelona, Spain</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow My Work</h4>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <Instagram size={24} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={24} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <h3>Send a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
