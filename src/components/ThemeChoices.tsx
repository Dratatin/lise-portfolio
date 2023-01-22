import { FC, ChangeEvent } from "react";
import useTheme from "../utils/themeContext";

interface ThemeChoicesProps {
    themes: string[];
    direction: string;
}

const ThemeChoices: FC<ThemeChoicesProps> = ({themes, direction}) => {
    const { setTheme, state } = useTheme();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTheme(e.target.value)
    }

    return (
        <div className={`theme-choices theme-choices--${direction}`} onChange={handleChange}>
            {themes.map((theme, index) => 
                <label key={index} className="theme-choices__button">
                    <input className={`theme--${theme}`} type="radio" id={theme} name="themes" value={theme} defaultChecked={state.theme === theme}></input>
                </label>
            )}
        </div>
    )
}

export default ThemeChoices