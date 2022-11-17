import { FC } from "react";

type Props = {
    project: {
        title: string,
        date: string,
        description: string,
        subdescription: string,
        images: string[],
    }
}

const Content: FC<Props> = ({ project }) => {
    return (
        <section className="content">
            <div className="content__head">
                <h2 className="content__head__title">{project.title}</h2>
                <span className="content__head__date">{project.date}</span>
            </div>
            <div className="content__text">
                <p className="content__text__description content__text__description--highlight">{project.description}</p>
                <p className="content__text__description">{project.subdescription}</p>
            </div>
            {project.images.length > 0 ?
                <div className="content__images">
                    {project.images.map((image, index) =>
                        <img className="content__images__image" key={`i-${index}`} src={image}></img>
                    )}
                </div>
                : null
            }
        </section>
    )
}

export default Content