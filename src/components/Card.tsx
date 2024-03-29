import { FC } from "react"
import useTheme from "../utils/themeContext"
import { Link } from "react-router-dom"

type Props = {
    index: number;
    title: string,
    preview: string,
    subtitle: string,
    date: string,
    tags: string[],
    id: number,
}

const Card: FC<Props> = ({ index, title, preview, subtitle, date, tags, id }) => {
    const { state } = useTheme();

    return (
        <article className="card" style={{animationDelay: `${index * 0.4}s`}}>
            <Link to={`/portfolio/project/${id}`} className="card__link">
                <img 
                    className="card__link__img" 
                    src={preview} 
                />
                <div className="card__link__tags">
                    {tags.map((tag, index) => (
                        <span key={`ct-${index}`} className={`card__link__tags__tag theme--${state.theme}`}>{tag}</span>
                    ))}
                </div>
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