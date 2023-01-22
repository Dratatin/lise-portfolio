import { FC, useState, useEffect } from "react"
import useTheme from "../utils/themeContext"
import avatarPrimary from "../assets/avatarPrimary.jpg";
import avatarSecondary from "../assets/avatarSecondary.png";


const ProfilePicture: FC = () => {
    const { state } = useTheme();
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
        <img className="profile-picture" src={profile} alt="image de profile de sorcière"></img>
    )
}

export default ProfilePicture