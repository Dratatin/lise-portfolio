import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"

const Welcome: FunctionComponent = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/home")
    }
    return (
        <section className="welcome">
            <p className="welcome__content">
                <span className="welcome__content__sub">Lise Denis</span>
                Bonjour ! Je suis Lise, une graphiste et directrice artistique qui aime créer des expériences visuelles impactantes et singulières.
            </p>
            <button className="welcome__button" onClick={handleClick}>
                Entrer
            </button>
        </section>
    )
}

export default Welcome