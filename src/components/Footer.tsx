import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import './Footer.css'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Elena Rodriguez</h3>
            <p>Architect & Sculptor</p>
            <p className="footer-description">
              Creating timeless sculptures that transform spaces and inspire communities.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Public Art Installations</li>
              <li>Gallery Sculptures</li>
              <li>Architectural Collaborations</li>
              <li>Custom Commissions</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Barcelona, Spain</p>
            <p>elena@sculpturestudio.com</p>
            <p>+34 612 345 678</p>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              Made with <Heart size={16} className="heart-icon" /> by Elena Rodriguez
            </p>
            <p>&copy; 2024 Elena Rodriguez. All rights reserved.</p>
          </div>
          
          <motion.button 
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
