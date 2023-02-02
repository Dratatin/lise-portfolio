import { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import datas from "../datas/projects.json";
import Card from "../components/Card";
import Tag from "../components/Tag";
import { useOnLoadImages } from "../utils/useOnLoadImages";

const getTags = () => {
    let tags: string[] = [];
    datas.forEach(project => {
        project.tags.forEach(tag => {
            tags.push(tag)
        });
    })

    return [...new Set(tags)]
}

const Portfolio: FC = () => {
    const tags = getTags()
    const [projects, setProjects] = useState(datas)
    const [filters, setFilters] = useState<string[]>([])
    const wrapperRef = useRef<HTMLDivElement>(null);

    const imagesLoaded = useOnLoadImages(wrapperRef);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (filters.some(filter => filter === e.target.value)) {
            setFilters(filters.filter(filter => filter !== e.target.value))
        }
        else {
            setFilters(current => [...current, e.target.value])
        }
    }

    useEffect(() => {
        let filteredDatas = datas;
        filters.forEach((filter) => {
            filteredDatas = filteredDatas.filter(project => {
                return project.tags.find(tag => tag === filter)
            })
        })
        setProjects(filteredDatas);
    }, [filters])

    return (
        <section className="portfolio">
            <div className="portfolio__tags" onChange={handleChange}>
                {tags.map((elem, index) => (
                    <Tag key={`t-${index}`} value={elem} name="tag" />
                ))}
            </div>
            <div className="portfolio__projects" ref={wrapperRef} style={imagesLoaded ? {} : { display: 'none' }}>
                {projects.length > 0 ?
                    projects.map((elem, index) => (
                        <Card key={`p-${index}`} title={elem.title} preview={elem.preview} subtitle={elem.subtitle} date={elem.date} tags={elem.tags} id={elem.id} />
                    ))
                    :
                    <p className="portfolio__projects__empty">Aucun projet ne correspond à votre recherche</p>
                }
            </div>
        </section>
    )
}

export default Portfolio