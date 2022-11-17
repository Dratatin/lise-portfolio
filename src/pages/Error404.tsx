import { FC } from "react";
import { Link } from "react-router-dom";

const Error404: FC = () => {
    return (
        <div>
            Error404
            <Link to="/portfolio">Retourner aux projets</Link>
        </div>
    )
}

export default Error404