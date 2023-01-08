import { FC } from "react"
import useTheme from "../utils/themeContext"
import Close from "./Close"

const ProfileDescription: FC = () => {
    const { state } = useTheme();

    return (
        <div className="profile-description">
            <div className="profile-description__content">
                <div className="profile-description__content__text">
                    <h1 className={`profile-description__content__text__title theme--${state.theme}`}>Lise Denis</h1>
                    <p>
                        Je suis graphiste, directrice artistique et j'ai une passion : créer, découvrir
                        de nouveaux univers et imaginer des visuels vibrants et impactants.
                    </p>
                    <p>
                        Sensible aux thématiques éthiques
                        et durables, je me plonge dans chaque nouveau projet avec enthousiasme, écoute et créativité !
                    </p>
                </div>
                <div className="profile-description__content__networks">
                    <a className={`profile-description__content__networks__link theme--${state.theme}`} href="#">in</a>
                    <a className={`profile-description__content__networks__cv theme--${state.theme}`}>Mon CV</a>
                    <a className={`profile-description__content__networks__link theme--${state.theme}`} href="#">Be</a>
                </div>
            </div>           
            <Close/>
        </div>
    )
}

export default ProfileDescription