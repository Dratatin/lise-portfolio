import { FC } from "react"

const Footer: FC = () => {
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
            <div className="footer__themes">
                <label className="footer__themes__button">
                    <input type="radio" id="primary" name="themes"></input>
                </label>
                <label className="footer__themes__button">
                    <input type="radio" id="secondary" name="themes"></input>
                </label>
                <label className="footer__themes__button">
                    <input type="radio" id="tertiary" name="themes"></input>
                </label>
                <label className="footer__themes__button">
                    <input type="radio" id="quaternary" name="themes"></input>
                </label>
                <label className="footer__themes__button">
                    <input type="radio" id="quinquennial" name="themes"></input>
                </label>
            </div>
            <span className="footer__mentions">
                Mentions légales
            </span>
        </footer>
    )
}

export default Footer