import { FC } from "react";
import useTheme from "../utils/themeContext";
import { Link } from "react-router-dom"

type Props = {
    title: string,
    preview: string,
    subtitle: string,
    date: string,
}

const Card: FC<Props> = ({ title, preview, subtitle, date }) => {
    const { state } = useTheme();

    return (
        <article className="card">
            <Link to="/" className="card__link">
                <img className="card__link__img" src={preview}></img>
            </Link>
            <div className="card__details">
                <div className="card__details__wrapper">
                    <h3 className="card__details__wrapper__title">{title}</h3>
                    <span className="card__details__wrapper__date">{date}</span>
                </div>
                <p>{subtitle}</p>
            </div>
        </article>
    )
}

export default Card