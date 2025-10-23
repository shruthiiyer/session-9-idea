import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Calendar, MapPin } from 'lucide-react'
import './About.css'

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award size={24} />,
      title: "International Recognition",
      description: "Featured in 15+ international exhibitions and art fairs"
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Projects",
      description: "Worked with 50+ architects and urban planners worldwide"
    },
    {
      icon: <Calendar size={24} />,
      title: "15+ Years Experience",
      description: "Dedicated to pushing the boundaries of architectural sculpture"
    },
    {
      icon: <MapPin size={24} />,
      title: "Global Presence",
      description: "Installations across Europe, Asia, and the Americas"
    }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-text">
            <h2>About Elena Rodriguez</h2>
            <p className="about-intro">
              I am an architect and sculptor who believes in the transformative power of art in public spaces. 
              My work bridges the gap between architectural precision and artistic expression, creating pieces 
              that not only serve as landmarks but as catalysts for community engagement and dialogue.
            </p>
            
            <p>
              With over 15 years of experience, I have dedicated my career to exploring how sculpture can 
              enhance and redefine urban environments. Each piece I create is a response to its context, 
              whether it's a bustling city square or a quiet gallery space.
            </p>

            <p>
              My approach combines traditional sculptural techniques with contemporary materials and 
              innovative construction methods. I work closely with architects, engineers, and communities 
              to ensure that every installation is not just visually striking, but structurally sound and 
              socially meaningful.
            </p>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="profile-preview">
                <div className="profile-circle"></div>
                <div className="profile-accent"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Recognition & Impact</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="philosophy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>My Philosophy</h3>
          <blockquote>
            "Architecture and sculpture are not separate disciplines, but different expressions of the same 
            fundamental human need to create meaningful spaces. Every piece I create is a conversation 
            between form and function, between the individual and the community, between the present 
            and the future."
          </blockquote>
          <cite>— Elena Rodriguez</cite>
        </motion.div>
      </div>
    </section>
  )
}

export default About
