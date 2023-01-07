import { FC } from "react"
import useTheme from "../utils/themeContext";

const Close: FC = () => {
    const { state, setAboutOpened } = useTheme();

    return (
        <div className={`close theme--${state.theme}`}>
            <button className={`close__button theme--${state.theme}`} onClick={() => setAboutOpened(false)}>
                <i className={`close__button__icon theme--${state.theme}`}></i>
            </button>
        </div>
    )
}

export default Close