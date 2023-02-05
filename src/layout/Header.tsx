import { FC, useEffect } from "react";
import useTheme from "../utils/themeContext";
import ThemeChoices from "../components/ThemeChoices";
import ProfilePicture from "../components/ProfilePicture";
import About from "../components/About";
import RoundButton from "../components/RoundButton";

const Header: FC = () => {
    const { state, setAboutOpened } = useTheme();

    useEffect(() => {
        if (state.about.opened === true) {
            document.body.classList.add("remove-scroll");
        }
        else {
            document.body.classList.remove("remove-scroll");
        }
    },[state.about.opened])

    return (
        <header className={`header theme--${state.theme}`}>
            <ThemeChoices themes={["primary", "secondary"]} direction="left" />
                <div className="header__picture">
                    <div className="header__picture__container">
                        <ProfilePicture />
                    </div>
                    <div className="header__picture__button">
                        <RoundButton type="more" onClick={() => setAboutOpened(true)}/>
                    </div>
                </div>
            <ThemeChoices themes={["tertiary", "quaternary"]} direction="right" />
            {state.about.opened &&
                <About />
            }
        </header>
    )
}

export default Header