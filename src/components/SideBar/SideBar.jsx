import React from 'react'
import './SideBar.css'
import logo from '../../img/logoB.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BsBoxSeam} from 'react-icons/bs'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {MdOutlineContactPhone} from 'react-icons/md'
import {VscAccount} from 'react-icons/vsc'
import {SlSocialInstagram} from 'react-icons/sl'
import {BsFacebook} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='NavBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Imagen Logo" />
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          Navegador
        </h3>
        <ul className='menuList grid'>
        
          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <AiOutlineHome className="icon"/>
              <span className='smallText'>
                Inicio
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <BsBoxSeam className="icon"/>
              <span className='smallText'>
                Proyectos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <MdOutlineLocalOffer className="icon"/>
              <span className='smallText'>
                Sobre Nosotros
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <AiOutlineShoppingCart className="icon"/>
              <span className='smallText'>
                Carrito 10
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          Redes
        </h3>
        <ul className='menuList grid'>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <SlSocialInstagram className="icon"/>
              <span className='smallText'>
                Instagram
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className='menuLink flex'>
              <BsFacebook className="icon"/>
              <span className='smallText'>
                Facebook
              </span>
            </a>
          </li>
        </ul>

      </div>
    </div>
    
  )
}

export default NavBar