import { FC, useState } from "react"
import useTheme from "../utils/themeContext"
import flatProfile from "../assets/avatar.png";

const ProfilePicture: FC = () => {
    const { setAboutOpened, state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);

    return (
        <div className={`profile-picture ${state.about.opened ? "open" : ""}`}>
            <img className={`profile-picture__img ${state.about.opened ? "open" : ""}`} src={profile} alt="image de profile de sorcière"></img>
            <button className={`profile-picture__button ${state.about.opened ? "open" : ""} theme--${state.theme}`} onClick={() => setAboutOpened(true)}>
                À propos
            </button>
        </div>
    )
}

export default ProfilePicture