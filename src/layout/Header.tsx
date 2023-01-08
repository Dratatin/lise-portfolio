import { FC, useEffect } from "react";
import useTheme from "../utils/themeContext";
import ThemeChoices from "../components/ThemeChoices";
import About from "../components/About";

const Header: FC = () => {
    const { state } = useTheme();

    useEffect(() => {
        document.body.classList.toggle("remove-scroll");
    },[state.about.opened])

    return (
        <header className={`header theme--${state.theme}`}>
            <ThemeChoices themes={["primary", "secondary"]} direction="left" />
            <About />
            <ThemeChoices themes={["tertiary", "quaternary"]} direction="right" />
        </header>
    )
}

export default Header