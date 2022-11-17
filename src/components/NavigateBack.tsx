import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import useTheme from "../utils/themeContext";
import arrowleft from "../assets/arrowleft.svg";

type Props = PropsWithChildren<{
    path: string,
}>

const NavigateBack: FC<Props> = ({ children, path }) => {
    const { state } = useTheme();

    return (
        <Link className={`navigateBack theme--${state.theme}`} to={path}><img className="navigateBack__icon" src={arrowleft} alt="arrow left"></img>{children}</Link>
    )
}

export default NavigateBack