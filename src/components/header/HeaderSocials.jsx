import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/ohad-cohen-6b2393211/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://github.com/Ohad2245" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials