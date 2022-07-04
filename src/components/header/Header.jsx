import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Typical from 'react-typical';

const Header = () => {
  return (
    <header>
        <div className=".container header__container">
          <Typical
              steps={[
                "Hello",1000,
                "I'm" , 1000,
                ]}
              loop={Infinity}
              wrapper="h5"
            />
            <h1 className="text-myName" style={{color:'--gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);'}}>Ohad Cohen</h1>

            <Typical className="text-light"
              steps={[
                "Full Stack Developer",
                1000,
                "SoftWare Developer",
                1000,
                "React | React Native Developer "
                ]}
              loop={Infinity}
              wrapper="h3"
            />
                        
            <CTA/>
            <HeaderSocials/>
            <div className="me">
              {/* <img src={ME} alt=""/> */}
              <Typical className="text-light"
              steps={[
                "Hello everyone!Here you can see my portfolio and my projects!Enjoy!", 1000,
                ]}
              loop={Infinity}
              wrapper="h3"
              />
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header;