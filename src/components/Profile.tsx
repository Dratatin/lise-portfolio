import { FC, useState } from "react";
import useTheme from "../utils/themeContext";
import About from "./About";
import flatProfile from "../assets/profile1.svg";

const Profile: FC = () => {
    const { state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);
    const [open, setOpen] = useState(false)

    return (
        <div className="profil">
            <div className={`profil__picture ${open ? "open" : ""}`}>
                <img src={profile} alt="image de profile de sorcière"></img>
                {open ?
                    <About setOpen={setOpen}></About>
                    : null
                }
            </div>
            {open ?
                null
                :
                <button onClick={() => setOpen(true)} className="profil__parameters">
                </button>
            }
        </div>
    )
}

export default Profile