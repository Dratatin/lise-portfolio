import { FC, SetStateAction, Dispatch } from "react"
import useTheme from "../utils/themeContext";

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Close: FC<Props> = ({ setOpen }) => {
    const { state } = useTheme();

    return (
        <div className={`close theme--${state.theme}`}>
            <button className={`close__button theme--${state.theme}`} onClick={() => setOpen(false)}>
                <i className={`close__button__icon theme--${state.theme}`}></i>
            </button>
        </div>
    )
}

export default Close