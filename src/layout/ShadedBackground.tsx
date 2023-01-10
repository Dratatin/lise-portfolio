import { FC } from "react"
import useTheme from "../utils/themeContext";

const ShadedBackground: FC = () => {
    const { state } = useTheme();

    return (
        <div className={`shaded-background ${state.about.opened ? "appears" : "disappears"}`}>
        </div>
    )
}

export default ShadedBackground