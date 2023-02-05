import { FC } from "react";
import Card from "./Card";

export interface ProjectsProps {
    projects: any
}

const Projects: FC<ProjectsProps> = ({projects}) => {

    return (
        <div>
            {
            projects.map((elem:any, index:any) => (
                <Card key={`p-${elem.id}`} index={index} title={elem.title} preview={elem.preview} subtitle={elem.subtitle} date={elem.date} tags={elem.tags} id={elem.id} />
            ))
            }
        </div>
    )
}

export default Projects