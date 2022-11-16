import { FC } from "react";
import useTheme from "../utils/themeContext";

type Props = {
    value: string,
    name: string,
}

const Tag: FC<Props> = ({ value, name }) => {
    const { state } = useTheme();

    return (
        <label className={`tag theme--${state.theme}`}>
            {value}
            <input type="radio" value={value} id={value} name={name}></input>
        </label>
    )
}

export default Tag