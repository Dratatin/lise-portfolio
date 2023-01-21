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
                <CrossButton type="close" onClick={() => setAboutOpened(false)}/>
                <ProfilePicture className="bigger" />
                <AboutDescription />
            </div>
        </>
    )
}

export default About