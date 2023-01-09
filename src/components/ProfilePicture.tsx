import { FC, useState } from "react"
import useTheme from "../utils/themeContext"
import flatProfile from "../assets/avatar.png";

const ProfilePicture: FC = () => {
    const { setAboutOpened, state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);

    return (
        <div className={`profile-picture ${state.about.opened === true ? "grow-in" : state.about.opened === false ? "grow-out" : ""}`}>
            <img className={`profile-picture__img ${state.about.opened === true ? "grow-in" : state.about.opened === false ? "grow-out" : ""}`} src={profile} alt="image de profile de sorcière"></img>
            <button className={`profile-picture__button ${state.about.opened === true ? "grow-in" : state.about.opened === false ? "grow-out" : ""} theme--${state.theme}`} onClick={() => setAboutOpened(true)}>
                À propos
            </button>
        </div>
    )
}

export default ProfilePicture