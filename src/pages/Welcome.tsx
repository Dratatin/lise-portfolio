import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import useTheme from "../utils/themeContext";

const Welcome: FunctionComponent = () => {
    const { state } = useTheme();

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/portfolio")
    }
    return (
        <section className={`welcome theme--${state.theme}`}>
            <p className={`welcome__content theme--${state.theme}`}>
                <span className={`welcome__content__sub theme--${state.theme}`}>Lise Denis</span>
                Bonjour !<br></br>
                Je suis Lise, une graphiste
                et directrice artistique, bienvenue sur mon portfolio.
            </p>
            <button className={`welcome__button theme--${state.theme}`} onClick={handleClick}>
                Entrer
            </button>
        </section>
    )
}

export default Welcome