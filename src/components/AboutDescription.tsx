import { FC } from "react";
import useTheme from "../utils/themeContext";

const AboutDescription : FC = () => {
    const { state } = useTheme();


    return (
        <div className="aboutDescription">
        <div className={`aboutDescription__content ${state.about.opened? "open" : "fade-out"}`}>
            <div className="aboutDescription__content__text">
                <h1 className={`aboutDescription__content__text__title theme--${state.theme}`}>Lise Denis</h1>
                <p>
                    Je suis graphiste, directrice artistique et j'ai une passion : créer, découvrir
                    de nouveaux univers et imaginer des visuels vibrants et impactants.
                </p>
                <p>
                    Sensible aux thématiques éthiques
                    et durables, je me plonge dans chaque nouveau projet avec enthousiasme, écoute et créativité !
                </p>
            </div>
            <div className="aboutDescription__content__networks">
                <a className={`aboutDescription__content__networks__link theme--${state.theme}`} href="#">in</a>
                <a className={`aboutDescription__content__networks__cv theme--${state.theme}`}>Mon CV</a>
                <a className={`aboutDescription__content__networks__link theme--${state.theme}`} href="#">Be</a>
            </div>
        </div>   
    </div>
    )
}

export default AboutDescription