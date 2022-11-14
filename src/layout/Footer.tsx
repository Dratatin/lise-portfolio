import { FC, useContext, ChangeEvent } from "react";
import useTheme from "../utils/themeContext";


const Footer: FC = () => {
    const { state, setTheme } = useTheme();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value)
    }

    return (
        <footer className="footer">
            <ul className="footer__social-list">
                <li className="footer__social-list__item">in</li>
                <li className="footer__social-list__item">be</li>
            </ul>
            <ul className="footer__theme-list">
                <li className="footer__theme-list__item"><button className="primary"></button></li>
                <li className="footer__theme-list__item"><button className="secondary"></button></li>
                <li className="footer__theme-list__item"><button className="tertiary"></button></li>
                <li className="footer__theme-list__item"><button className="quaternary"></button></li>
                <li className="footer__theme-list__item"><button className="quinquennial" ></button></li>
            </ul>
            <div className="footer__themes" onChange={handleChange}>
                <label className="footer__themes__button">
                    <input className="theme--primary" type="radio" id="primary" name="themes" value="primary" defaultChecked></input>
                </label>
                <label className="footer__themes__button">
                    <input className="theme--secondary" type="radio" id="secondary" name="themes" value="secondary"></input>
                </label>
                <label className="footer__themes__button">
                    <input className="theme--tertiary" type="radio" id="tertiary" name="themes" value="tertiary"></input>
                </label>
                <label className="footer__themes__button">
                    <input className="theme--quaternary" type="radio" id="quaternary" name="themes" value="quaternary"></input>
                </label>
            </div>
            <span className="footer__mentions">
                Mentions légales
            </span>
        </footer>
    )
}

export default Footer