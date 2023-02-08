import { FC, useRef } from "react";
import { useOnLoadImages } from "../utils/useOnLoadImages";
import Loader from "./Loader";

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
    const wrapperRef = useRef<HTMLDivElement>(null);

    const imagesLoaded = useOnLoadImages(wrapperRef);

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
            {project.images.length > 0 &&
                <>
                    {!imagesLoaded && 
                        <Loader className={`${imagesLoaded ? "hide" : "show"}`} />
                    }
                    <div className="content__images" ref={wrapperRef} style={imagesLoaded ? {} : { display: 'none' }}>
                        {project.images.map((image, index) =>
                            <img className="content__images__image" key={`i-${index}`} src={image} style={{animationDelay: `${index * 0.5}s`}}></img>
                        )}
                    </div>
                </>
            }
        </section>
    )
}

export default Content