import { FC, Fragment } from "react";
import useTheme from "../utils/themeContext";
import { Link } from "react-router-dom"

type Props = {
    title: string,
    preview: string,
    subtitle: string,
    date: string,
    tags: string[],
    id: number,
}

const Card: FC<Props> = ({ title, preview, subtitle, date, tags, id }) => {
    const { state } = useTheme();

    return (
        <article className="card">
            <Link to={`/project/${id}`} className="card__link">
                <Fragment>
                    <img className="card__link__img" src={preview}></img>
                    <div className="card__link__tags">
                        {tags.map((tag, index) => (
                            <span key={`ct-${index}`} className={`card__link__tags__tag theme--${state.theme}`}>{tag}</span>
                        ))}
                    </div>
                </Fragment>
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