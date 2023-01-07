import { FC, PropsWithChildren } from "react";
import useTheme from "../utils/themeContext";
import ShadedBackground from "./ShadedBackground";

const Main: FC<PropsWithChildren> = ({ children }) => {
    const { state } = useTheme();

    return (
        <main className={`main theme--${state.theme}`}>
            {state.about.opened ?
                <ShadedBackground />
            : null
            }
            {children}
        </main>
    )
}

export default Main