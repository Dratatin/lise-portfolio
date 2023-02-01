import { FC } from "react";

interface IosIconProps {
    src: string
}

const IosIcon: FC<IosIconProps> = ({src}) => {
    return (
        <span className="ios-icon">
            <img className="ios-icon__image" src={src} />
        </span>
    )
}

export default IosIcon