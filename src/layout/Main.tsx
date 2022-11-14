import { FC, PropsWithChildren } from "react";
import useTheme from "../utils/themeContext";

const Main: FC<PropsWithChildren> = ({ children }) => {
    const { state } = useTheme();

    return (
        <main className={`main theme--${state.theme}`}>
            {children}
        </main>
    )
}

export default Main