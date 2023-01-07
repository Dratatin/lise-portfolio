import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import useTheme from "../utils/themeContext";
import {ReactComponent as Arrowleft} from "../assets/arrowleft.svg";


type Props = PropsWithChildren<{
    path: string,
}>

const NavigateBack: FC<Props> = ({ children, path }) => {
    const { state } = useTheme();

    return (
        <Link className={`navigate-back theme--${state.theme}`} to={path}>
            <Arrowleft className={`navigate-back__icon theme--${state.theme}`}/>
            {children}
        </Link>
    )
}

export default NavigateBack