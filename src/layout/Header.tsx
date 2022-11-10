import { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__profil">
                <div className="header__profil__picture">
                </div>
                <div className="header__profil__parameters">
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="header__nav__list__item"><NavLink to="home">Projets</NavLink></li>
                    <li className="header__nav__list__item"><NavLink to="welcome">A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header