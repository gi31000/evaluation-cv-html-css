import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Acceuil</Link>
                    </li>
                    <li>
                        <Link to="/apropos">Qui suis-je ?</Link>
                    </li>
                    <li>
                        <Link to="/horloge">Horloge</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;