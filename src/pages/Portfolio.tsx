import { FC } from "react"
import projects from "../datas/projects.json"
import Card from "../components/Card"
import useTheme from "../utils/themeContext";

const Portfolio: FC = () => {
    const { state } = useTheme();

    return (
        <section className="portfolio">
            <div className="portfolio__tag">

            </div>
            <div className="portfolio__projects">
                {projects.map((elem) => (
                    <Card key={elem.id} title={elem.title} preview={elem.preview} subtitle={elem.subtitle} date={elem.date}></Card>
                ))}
            </div>
        </section>
    )
}

export default Portfolio