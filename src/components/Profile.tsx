import { FC, useState } from "react";
import useTheme from "../utils/themeContext";
import flatProfile from "../assets/profile1.svg";

const Profile: FC = () => {
    const { state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);

    return (
        <div className="profil">
            <div className="profil__picture">
                <img src={profile} alt="image de profile de sorcière"></img>
            </div>
            <div className="profil__parameters">
            </div>
        </div>
    )
}

export default Profile