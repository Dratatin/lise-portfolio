import { FC, MouseEventHandler } from "react"
import useTheme from "../utils/themeContext";

export interface PropsRoundButton {
    className?: string;
    type?: "more" | "close";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const RoundButton: FC<PropsRoundButton> = ({className, type, onClick}) => {
    const { state } = useTheme();

    return (
        <button className={`round-button round-button--${type} theme--${state.theme} ${className}`} onClick={onClick}>
            <span className={`round-button__icon theme--${state.theme}`}>
                {type === "more" && 
                    <>
                        <span className={`round-button__icon__bullet theme--${state.theme}`}></span>
                        <span className={`round-button__icon__bullet theme--${state.theme}`}></span>
                        <span className={`round-button__icon__bullet theme--${state.theme}`}></span>
                    </>
                }
                </span>
        </button>
    )
}

export default RoundButton