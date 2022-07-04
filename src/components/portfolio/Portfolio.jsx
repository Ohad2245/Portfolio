import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id:1,
    image:IMG1,
    title:'Crypto',
    github:"https://github.com/Ohad2245/React-Native/tree/main/crypto",
    demo:"https://github.com/Ohad2245"
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
    title:'Calculator',
    github:"https://github.com/Ohad2245/For-Fun/tree/main/Calculator",
    demo:"https://github.com/Ohad2245/For-Fun/blob/main/Calculator/README.md"
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
    title:'Crypto Currency Dashboard',
    github:"https://github.com/Ohad2245",
    demo:"https://github.com/Ohad2245"
  },
]
const Portfolio = () => {
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
                <img src={image} alt={title}/>
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