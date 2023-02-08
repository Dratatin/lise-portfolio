import { FC } from "react"

export interface LoaderProps {
    className: string
}

const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={`loader-container ${className}`}>
            <span className="loader"></span>
        </div>
    )
}

export default Loader