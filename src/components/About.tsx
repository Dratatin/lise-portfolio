import { FC, useEffect, useState } from "react"
import useTheme from "../utils/themeContext"
import ProfilePicture from "./ProfilePicture";
import ProfileDescription from "./ProfileDescription";
import Close from "./Close";

const About: FC = () => {
    const { state } = useTheme();
    const [openInterval, setOpenInterval] = useState(false); 
    
    // Give the possibility to have animation before remove DOMelement
    useEffect(() => {
        if (state.about.opened) {
            setOpenInterval(true)
        }
        else {
            const interval = setInterval(() => {
                setOpenInterval(false)
            }, 1000);
            return () => clearInterval(interval);
        }
    },[state.about.opened])

    return (
        <>
            <div className={`about ${state.about.opened === true ? "grow-in" : state.about.opened === false ? "grow-out" : ""}`}>
                <ProfilePicture />
                {openInterval ?
                    <ProfileDescription />
                    : null
                }
            </div>
            {openInterval ?
                <Close/>
                : null
            }
        </>
    )
}

export default About