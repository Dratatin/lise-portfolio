import { FC } from "react"
import ProfilePicture from "./ProfilePicture";
import AboutDescription from "./AboutDescription";
import ShadedBackground from "../layout/ShadedBackground";
import RoundButton from "./RoundButton";
import useTheme from "../utils/themeContext";
import useDeviceType from "../utils/useDeviceType"
import useWindowHeightSize from '../utils/useWindowHeightSize';

const About: FC = () => {  
    const { setAboutOpened } = useTheme()
    const deviceType = useDeviceType()
    const windowHeightSize = useWindowHeightSize()
    
    return (
        <>
            <ShadedBackground />
            <div className="about" style={deviceType === "ios" || "android" ? { height: windowHeightSize } : {height: "100vh"}}>
                <div className="about__wrapper">
                    <div className="about__wrapper__picture">
                        <ProfilePicture />
                    </div>
                    <AboutDescription />
                    <div className="about__wrapper__button">
                        <RoundButton type="close" onClick={() => setAboutOpened(false)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About