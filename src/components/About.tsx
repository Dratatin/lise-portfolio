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
                <div className="about__wrapper">
                    <div className="about__wrapper__picture">
                        <ProfilePicture />
                    </div>
                    <AboutDescription />
                    <CrossButton type="close" onClick={() => setAboutOpened(false)}/>
                </div>
            </div>
        </>
    )
}

export default About