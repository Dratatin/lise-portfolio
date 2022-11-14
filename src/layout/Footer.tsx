import { FC, useContext, ChangeEvent } from "react";
import useTheme from "../utils/themeContext";


const Footer: FC = () => {
    const { state } = useTheme();

    return (
        <footer className={`footer theme--${state.theme}`}>
            <span className="footer__credits">
                Crédits
            </span>
        </footer>
    )
}

export default Footer