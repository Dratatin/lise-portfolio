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

    // Do this to re-render all list of Project Card
    let filtersName = "all";
    filters.forEach(filter => {
        filtersName = filtersName + '-' + filter;
    });

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
                    <Tag key={index} value={elem} name="tag" />
                ))}
            </div>
            <div className="portfolio__projects" ref={wrapperRef} style={imagesLoaded ? {} : { display: 'none' }}>
                {projects.length > 0 &&
                    projects.map((elem, index) => (
                        <Card key={`${elem.id}-${filtersName}`} index={index} title={elem.title} preview={elem.preview} subtitle={elem.subtitle} date={elem.date} tags={elem.tags} id={elem.id} />
                    ))
                }
            </div>
            {
                projects.length === 0 && 
                <p className="portfolio__empty">Aucun projet ne correspond à votre recherche</p>
            }
        </section>
    )
}

export default Portfolio