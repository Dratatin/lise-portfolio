import { FC, useState } from "react";
import useTheme from "../utils/themeContext";
import About from "./About";
import flatProfile from "../assets/profile1.svg";

const Profile: FC = () => {
    const { state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);
    const [develop, setDevelop] = useState(false)

    return (
        <div className="profil">
            <div className={`profil__picture ${develop ? "develop" : ""}`}>
                <img src={profile} alt="image de profile de sorcière"></img>
                {develop ?
                    <About setDevelop={setDevelop}></About>
                    : null
                }
            </div>
            {develop ?
                null
                :
                <button onClick={() => setDevelop(true)} className="profil__parameters">
                </button>
            }
        </div>
    )
}

export default Profile