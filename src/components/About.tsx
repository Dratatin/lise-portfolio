import { FC, SetStateAction, Dispatch } from "react"
import Close from "./Close"

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const About: FC<Props> = ({ setOpen }) => {
    return (
        <div className="about">
            <div className="about-content">

            </div>
            <Close setOpen={setOpen}/>
        </div>
    )
}

export default About