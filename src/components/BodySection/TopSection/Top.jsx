import React from 'react'
import './top.css'
//Iconos
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosMail} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import {AiOutlineArrowRight} from "react-icons/ai"

//Imágenes
import img from '../../img/roseplates01.jpg'
import img2 from '../../img/rosesplates02.jpg'


const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Wasabi ⚱ Atelier</h1>
          <p>Bienvenidxs a nuestra nueva página de Wasabi ⚱ Atelier, hogar de cerámica</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className="icon"/>
        </div>

        <div className="adminDiv flex">
          <AiOutlineMessage className="icon"/>
          <IoIosNotificationsOutline className="icon"/>
          <div className="adminImg">
            <img src={img} alt="Perfil" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Tenemos Productos como Platos, Bowls, Vasos...</h1>
          <p>Los mejores objetos para tu hogar, tallados a mano con amor</p>

          <div className="buttons flex">
            <button className='btn'>Ver +</button>
            <button className='btn transparent'>Más Vendidos</button>
          </div>

        </div>

        <div className="leftCard flex">
            <div className="main flex">
                <div className="textDiv">
                  <h1>Estadísticas de Ventas</h1>

                  <div className="flex">
                    <span>
                      Hoy <br/> <small>13 piezas vendidas</small>
                    </span>

                    <span>
                      Este Mes <br/> <small>86 piezas vendidas</small>
                    </span>
                  </div>
                  <span className="flex link">
                    Ir a mis Ordenes <AiOutlineArrowRight className='icon'/>
                  </span>
                </div>

                <div className="imgDiv">
                  <img src={img2} alt="imagen dist" />
                </div>

                {/* <div className="NavBarCard">
                  <BsQuestionCircle className="icon"/>
                  <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3>Centro de Ayuda</h3>
                    <p>¿Tenés algún problema con nuestra página? Contactanos</p>

                    <button className='btn'>Ir a Centro de Ayuda</button>
                  </div>
                </div>  */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top