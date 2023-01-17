import { FC, MouseEventHandler } from "react"
import useTheme from "../utils/themeContext";

export interface PropsCrossButton {
    className?: string;
    type?: "more" | "close";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CrossButton: FC<PropsCrossButton> = ({className, type, onClick}) => {
    const { state } = useTheme();

    return (
        <button className={`cross-button theme--${state.theme} ${type} ${className}`} onClick={onClick}>
            <i className={`cross-button__icon theme--${state.theme}`}></i>
        </button>
    )
}

export default CrossButton