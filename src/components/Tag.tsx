import { useState, FC } from "react";
import useTheme from "../utils/themeContext";

type Props = {
    value: string,
    name: string,
}

const Tag: FC<Props> = ({ value, name }) => {
    const { state } = useTheme();

    return (
        <div className="tag">
            <input type="checkbox" value={value} id={value} name={name} className="tag__input"></input>
            <label htmlFor={value} title={value} className={`tag__label theme--${state.theme}`}>{value}</label>
        </div>
    )
}

export default Tag