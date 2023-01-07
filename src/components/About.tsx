import { FC } from "react"
import useTheme from "../utils/themeContext"
import Close from "./Close"

const About: FC = () => {
    const { state } = useTheme();

    return (
        <div className="about">
            <div className="about__description">
                <h1 className={`about__description__title theme--${state.theme}`}>Lise Denis</h1>
                <p>
                    Je suis graphiste, directrice artistique et j'ai une passion : créer, découvrir
                    de nouveaux univers et imaginer des visuels vibrants et impactants.
                </p>
                <p>
                    Sensible aux thématiques éthiques
                    et durables, je me plonge dans chaque nouveau projet avec enthousiasme, écoute et créativité !
                </p>
            </div>
            <div className="about__networks">
                <a className={`about__networks__link theme--${state.theme}`} href="#">in</a>
                <a className={`about__networks__cv theme--${state.theme}`}>Mon CV</a>
                <a className={`about__networks__link theme--${state.theme}`} href="#">Be</a>
            </div>
            <Close/>
        </div>
    )
}

export default About