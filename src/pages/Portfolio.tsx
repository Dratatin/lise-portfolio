import { ChangeEvent, FC } from "react";
import projects from "../datas/projects.json";
import Card from "../components/Card";
import Tag from "../components/Tag";
import useTheme from "../utils/themeContext";

const getTags = () => {
    let tags: string[] = [];
    projects.forEach(project => {
        project.tags.forEach(tag => {
            tags.push(tag)
        });
    })

    return [...new Set(tags)]
}

const Portfolio: FC = () => {
    const { state } = useTheme();

    const tags = getTags()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <section className="portfolio">
            <div className="portfolio__tags" onChange={handleChange}>
                {tags.map((elem, index) => (
                    <Tag key={`t-${index}`} value={elem} name="tag" />
                ))}
            </div>
            <div className="portfolio__projects">
                {projects.map((elem, index) => (
                    <Card key={`p-${index}`} title={elem.title} preview={elem.preview} subtitle={elem.subtitle} date={elem.date} tags={elem.tags} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio