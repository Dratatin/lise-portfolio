import { FC, ChangeEvent } from "react";
import Profile from "../components/Profile";
import useTheme from "../utils/themeContext";

const Header: FC = () => {
    const { setTheme, state } = useTheme();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value)
    }

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
            <Profile />
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