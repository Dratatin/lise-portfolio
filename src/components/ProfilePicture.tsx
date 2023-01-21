import { FC, useState, useEffect } from "react"
import useTheme from "../utils/themeContext"
import CrossButton from "./CrossButton";
import avatarPrimary from "../assets/avatarPrimary.jpg";
import avatarSecondary from "../assets/avatarSecondary.png";

export interface ProfilePictureProps {
    className?: string,
}


const ProfilePicture: FC<ProfilePictureProps> = ({className}) => {
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
        <div className={`profile-picture ${className}`}>
            <img className="profile-picture__img" src={profile} alt="image de profile de sorcière"></img>
        </div>
    )
}

export default ProfilePicture