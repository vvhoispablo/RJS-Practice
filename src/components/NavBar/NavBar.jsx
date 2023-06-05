import React from "react";
import "./NavBar";
import CartWidget from "../CartdWidget/CartWidget";
import logo from "../../src/img/logoB.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="logoNav">
                <img src={logo} alt="logo" />
            </div>

            <div className="items">
                <li className="item">
                    <a href="/">Inicio</a>
                </li>

                <li className="item">
                    <a href="/">Proyectos</a>
                </li>

                <li className="item">
                    <a href="/">Sobre Nosotros</a>
                </li>

                <li className="item">
                    <a href="/">eShop</a>
                </li>
            </div>

            <div className="CartWidget">
                <CartWidget />
            </div>
        </div>
    );
};

export default NavBar;