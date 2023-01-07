import { FC, ChangeEvent, useEffect, useState } from "react";
import flatProfile from "../assets/profile1.svg";
import useTheme from "../utils/themeContext";
import About from "../components/About";
import ShadedBackground from "./ShadedBackground";

const Header: FC = () => {
    const { setTheme, setAboutOpened, state } = useTheme();
    const [profile, setProfile] = useState(flatProfile);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value)
    }

    useEffect(() => {
        document.body.classList.toggle("remove-scroll");
    },[state.about.opened])

    return (
        <header className={`header theme--${state.theme}`}>
            <div className="header__themes" onChange={handleChange}>
                <label className="header__themes__button">
                    <input className="theme--primary" type="radio" id="primary" name="themes" value="primary" defaultChecked={state.theme === "primary"}></input>
                </label>
                <label className="header__themes__button">
                    <input className="theme--secondary" type="radio" id="secondary" name="themes" value="secondary" defaultChecked={state.theme === "secondary"}></input>
                </label>
            </div>
            <div className={`header__profil ${state.about.opened ? "open" : ""}`}>
                <div className="header__profil__picture">
                    <img src={profile} alt="image de profile de sorcière"></img>
                    <button onClick={() => setAboutOpened(true)}>
                    </button>
                </div>
                {state.about.opened ?
                    <ShadedBackground>
                        <About></About>
                    </ShadedBackground>
                : null
            }
            </div>
            <div className="header__themes" onChange={handleChange}>
                <label className="header__themes__button">
                    <input className="theme--tertiary" type="radio" id="tertiary" name="themes" value="tertiary" defaultChecked={state.theme === "tertiary"}></input>
                </label>
                <label className="header__themes__button">
                    <input className="theme--quaternary" type="radio" id="quaternary" name="themes" value="quaternary" defaultChecked={state.theme === "quaternary"}></input>
                </label>
            </div>

        </header>
    )
}

export default Header