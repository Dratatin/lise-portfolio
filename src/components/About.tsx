import { FC } from "react"
import ProfilePicture from "./ProfilePicture";
import AboutDescription from "./AboutDescription";
import ShadedBackground from "../layout/ShadedBackground";
import CrossButton from "./CrossButton";
import useTheme from "../utils/themeContext";

const About: FC = () => {  
    const { setAboutOpened } = useTheme();
    
    return (
        <>
            <ShadedBackground />
            <div className="about">
                <div className="about__picture">
                    <ProfilePicture />
                    <CrossButton type="close" onClick={() => setAboutOpened(false)}/>
                </div>
                <AboutDescription />
            </div>
        </>
    )
}

export default About