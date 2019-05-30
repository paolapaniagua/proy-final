import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import logo from '../assets/images/food-logo.png';

export const Nav = () => {
    return (
        <header className="header">
            <a class="header__logo" href="/"><img src={logo} alt="logo pagina"/></a>
            <h1>The best recipes</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={routes.HOME}>Home</Link>
                    </li>           
                </ul>
            </nav>
        </header>
    )
}