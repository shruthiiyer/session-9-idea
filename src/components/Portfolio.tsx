import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import './Portfolio.css'

interface Project {
  id: number
  title: string
  category: string
  year: string
  location: string
  description: string
  image: string
  materials: string[]
  dimensions: string
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: "Metamorphosis",
      category: "public",
      year: "2023",
      location: "Barcelona, Spain",
      description: "A large-scale public sculpture exploring the transformation of urban space through organic forms.",
      image: "/api/placeholder/600/400",
      materials: ["Bronze", "Steel", "Concrete"],
      dimensions: "8m x 4m x 3m"
    },
    {
      id: 2,
      title: "Eternal Flow",
      category: "gallery",
      year: "2023",
      location: "Madrid, Spain",
      description: "An intimate gallery piece that captures the essence of time and movement in static form.",
      image: "/api/placeholder/600/400",
      materials: ["Marble", "Glass"],
      dimensions: "2m x 1.5m x 1m"
    },
    {
      id: 3,
      title: "Urban Genesis",
      category: "public",
      year: "2022",
      location: "Valencia, Spain",
      description: "A monumental work that reimagines the relationship between architecture and nature in urban environments.",
      image: "/api/placeholder/600/400",
      materials: ["Steel", "Stone", "LED"],
      dimensions: "12m x 6m x 4m"
    },
    {
      id: 4,
      title: "Silent Dialogue",
      category: "gallery",
      year: "2022",
      location: "Bilbao, Spain",
      description: "A contemplative piece exploring the conversation between light, shadow, and form.",
      image: "/api/placeholder/600/400",
      materials: ["Wood", "Metal"],
      dimensions: "1.5m x 1m x 0.8m"
    },
    {
      id: 5,
      title: "Convergence",
      category: "installation",
      year: "2023",
      location: "Seville, Spain",
      description: "An immersive installation that creates a dialogue between the viewer and the surrounding space.",
      image: "/api/placeholder/600/400",
      materials: ["Mixed Media", "Light"],
      dimensions: "Variable"
    },
    {
      id: 6,
      title: "Roots of Tomorrow",
      category: "public",
      year: "2021",
      location: "Granada, Spain",
      description: "A sustainable sculpture that grows and evolves with its environment, using living materials.",
      image: "/api/placeholder/600/400",
      materials: ["Living Plants", "Steel", "Soil"],
      dimensions: "6m x 4m x 3m"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'public', label: 'Public Art' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'installation', label: 'Installation' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Portfolio</h2>
          <p>Explore my collection of architectural sculptures and installations</p>
        </motion.div>

        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <div className="sculpture-mini">
                    <div className="mini-base"></div>
                    <div className="mini-form"></div>
                  </div>
                </div>
                <div className="project-overlay">
                  <button className="view-project">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-location">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="materials">
                    <strong>Materials:</strong> {project.materials.join(', ')}
                  </div>
                  <div className="dimensions">
                    <strong>Dimensions:</strong> {project.dimensions}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
