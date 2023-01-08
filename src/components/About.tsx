import { FC, useState } from "react"
import useTheme from "../utils/themeContext"
import ProfilePicture from "./ProfilePicture";
import ProfileDescription from "./ProfileDescription";

const About: FC = () => {
    const { state } = useTheme();

    return (
        <div className={`about ${state.about.opened ? "open" : ""}`}>
                <ProfilePicture />
                {state.about.opened ?
                    <ProfileDescription />
                : null
            }
        </div>
    )
}

export default About