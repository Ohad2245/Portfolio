import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () =>{ 
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Courses</h2>

      <div className='container service__container'>
        <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>illustrator</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Photoshop</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum</p>
              </li>
    
            </ul>
          </article>
          {/* END OF UI/UX */}
          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>React Native</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Angular</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Android Studio</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Type Script</p>
              </li>
            </ul>
          </article>
          {/* WEB DEVELOPMENT */}
          <article className='service'>
            <div className='service__head'>
              <h3>Server side</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Data Structures</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Full Stack - asp.net scapy</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Computer vision</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>NodeJS</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Crypto</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Algorithmic trading & Cryptocurrencies</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    )
  }


export default Services
