import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/movie.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import {motion} from 'framer-motion';

const data = [
  {
    id:1,
    image:IMG1,
    title:'Crypto',
    github:"https://github.com/Ohad2245/React-Native/tree/main/crypto",
    demo:"https://ohasdgsdg.netlify.app/"
  },
  {
    id:2,
    image:IMG2,
    title:'Tik Tak Toe',
    github:"https://github.com/Ohad2245/React-Native/tree/main/Tic-Tac-Toe",
    demo:"https://github.com/Ohad2245"
  },
  {
    id:3,
    image:IMG3,
    title:'Nike Store',
    github:"https://github.com/Ohad2245/React-Native/tree/main/StoreApp2/my-app",
    demo:"https://github.com/Ohad2245/React-Native/blob/main/StoreApp2/my-app/README.md"
  },
  {
    id:4,
    image:IMG4,
    title:'Weather',
    github:"https://github.com/Ohad2245/Weather",
    demo:"https://golden-churros-a1f4bd.netlify.app/"
  },
  {
    id:5,
    image:IMG6,
    title:'Snake',
    github:"https://github.com/Ohad2245/Java/tree/main/SnakeGame",
    demo:"https://github.com/Ohad2245/Java/blob/main/SnakeGame/README.md"
  },
  {
    id:6,
    image:IMG5,
    title:'Movie',
    github:"https://github.com/Ohad2245/Movie",
    demo:"https://movieohad.netlify.app/"
  },
]
const Portfolio = () => {
  const transition = {duration: 2 , type: 'spring'}
    return (
      <section id="portfolio">
        <h5>My Recent Work </h5>
        <h2> Portfolio</h2>
        <div class="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className="portfolio__item">
              <div class="portfolio__item-image">
                <motion.img 
                  initial={{left: '-36%'}}
                  whileInView={{left: '-24%'}}
                  transition={transition}
                
                src={image} alt={title}/>
              </div>
              <h3>{title}</h3>
              <div class="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
              )
            })
          }
        

          

        </div>
      </section>
    )
  }

export default Portfolio