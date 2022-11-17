import { FC, Fragment } from "react";
import { useParams, Navigate } from "react-router-dom";
import datas from "../datas/projects.json";
import NavigateBack from "../components/NavigateBack";
import Content from "../components/Content";

type ParamsType = {
    id: string
}

const Project: FC = () => {
    const params = useParams<ParamsType>();
    const project = datas.find(({ id }) => id === parseInt(params.id!));

    return (
        <Fragment>
            {project ?
                <div className="project">
                    <NavigateBack path="/portfolio">Retours aux projets</NavigateBack>
                    <Content project={project} />
                </div>
                : <Navigate to="/*" />
            }
        </Fragment>
    )
}

export default Project