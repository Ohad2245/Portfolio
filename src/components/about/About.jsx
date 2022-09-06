/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/code.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Typical from 'react-typical';
// import {motion} from 'framer-motion';

//  FaInfinity in column 4
const about = () => {

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h5>About Me</h5>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__contact'>
          <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small> +2 Study experience</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Courses</h5>
            <small>GPA 94</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed projects </small>
          </article>
          </div>

          <Typical
            steps={[
                    "I'm Ohad Cohen I'm from Israel Shaarei Tikva,I have one brother and two sisters. I'm a student in Ariel University, in Software trends. Since I was young I wanted to study software development, I exploit my time to study. Here is my website you can watch a variety of my projects, and my portfolio and help me find my new job, Enjoy and Thank you!",1000,
                    "I'm Ohad Cohen I'm from Israel Shaarei Tikva,I have one brother and two sisters. I'm a student in Ariel University, in Software trends. Since I was young I wanted to study software development, I exploit my time to study. Here is my website you can watch a variety of my projects, and my portfolio and help me find my new job, Enjoy and Thank you!",1500
                    ]}
            loop={Infinity}
            wrapper="p"
          />
          <p>
          
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about;