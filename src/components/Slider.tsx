import { FC, useState, useRef } from "react";
import useTheme from "../utils/themeContext";

type Project = {
    id: number,
    preview: string,
}

type Props = {
    projects: Project[]
}

const Slider: FC<Props> = ({ projects }) => {
    const { state } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = projects.length - 1;
        } else if (newIndex >= projects.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex)
    }

    const handleClick = (type: string) => {
        switch (type) {
            case "before":
                updateIndex(activeIndex - 1)
                break
            case "after":
                updateIndex(activeIndex + 1)
                break
            default:
                return
        }
    }

    return (
        <div className={`slider theme--${state.theme}`}>
            <h4 className="slider__title">Autres Projets</h4>
            <div className="slider__container">
                <button className="slider__container__button slider__container__button--previous" onClick={() => handleClick("before")}>Avant</button>
                <div className="slider__container__carousel">
                    <div className="slider__container__carousel__inner" style={{ transform: `translateX(-${activeIndex * 85}%)` }}>
                        {projects.map((project, index) => (
                            <div key={`s-${project.id}`} className="slider__container__carousel__inner__item">
                                <img src={project.preview}></img>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="slider__container__button slider__container__button--next" onClick={() => handleClick("after")}>Après</button>
            </div>
        </div>
    )
}

export default Slider