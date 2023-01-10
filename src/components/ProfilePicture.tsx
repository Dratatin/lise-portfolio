import { FC, useState, useEffect } from "react"
import useTheme from "../utils/themeContext"
import avatarPrimary from "../assets/avatarPrimary.jpg";
import avatarSecondary from "../assets/avatarSecondary.png";


const ProfilePicture: FC = () => {
    const { setAboutOpened, state } = useTheme();
    const [profile, setProfile] = useState(avatarPrimary);

    useEffect(()=> {
        switch (state.theme) {
            case 'primary':
                setProfile(avatarPrimary);
                break;
            case 'secondary':
                setProfile(avatarSecondary);
                break;
            case 'tertiary':
                setProfile(avatarPrimary);
                break;
            case 'quaternary':
                setProfile(avatarSecondary);
                break;
            default:
                setProfile(avatarPrimary);
          }
    },[state.theme])

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