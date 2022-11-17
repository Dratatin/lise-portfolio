import { FC, useEffect } from "react";
import datas from "../datas/projects.json";
import { useParams, useNavigate } from "react-router-dom";

type ParamsType = {
    id: string
}

const Project: FC = () => {
    const params = useParams<ParamsType>();
    const project = datas.find(({ id }) => id === parseInt(params.id!));

    let navigate = useNavigate();

    useEffect(() => {
        if (project === undefined) {
            navigate("/*")
        }
    }, [])

    return (
        <div>coucou</div>
    )
}

export default Project