import { FC, SetStateAction, Dispatch } from "react"

type Props = {
    setDevelop: Dispatch<SetStateAction<boolean>>
}

const About: FC<Props> = ({ setDevelop }) => {
    return (
        <button className="profil__parameters" onClick={() => setDevelop(false)}>
            close
        </button>
    )
}

export default About