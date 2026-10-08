import "./ProjectsShowcase.scss"
import { useState } from "react"
import { images } from "../../../../assets/images.js"

const projects = [
    {image: images.showcase1, title: "Москва-Сити", year: "2006"},
    {image: images.showcase2, title: "Стадион «Спартак»", year: "2006"},
    {image: images.showcase3, title: "ТРК «Авиапарк»", year: "2004"},
    {image: images.showcase4, title: "АТК на Кутузовском", year: "2003-2004"},
    {image: images.showcase5, title: "Завод «ЗИЛ»", year: "2001"},
    {image: images.showcase6, title: "Станция «Окская»", year: "1996-2015"},
]

export default function ProjectsShowcase(){

    const [current, setCurrent] = useState(0)
    const [openProject, setOpenProject] = useState(null)

    const totalSlides = 6;

    const toggleProject = (project) => {
        setOpenProject((prev) => (prev === project ? null : project))
    }
    const goPrev = () => {
        setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setCurrent((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }

    const currentProject = projects[current]
    const nextProject = projects[current === totalSlides - 1 ? 0 : current + 1]

    return(
        <section className="projects-showcase">
            <div className="projects-showcase__container">
                <div className="projects-showcase__header">
                    <h1>ВЫСОКОЕ КАЧЕСТВО РАБОТЫ В НАШИХ ПРОЕКТАХ</h1>
                    <span className="projects-showcase__stat"><p>Более</p><h1>6</h1><p>Крупных проектов</p></span>
                </div>
                <div className="projects-showcase__body">
                    <div className="projects-showcase__sidebar">
                        <div className="projects-showcase__places">
                            {projects.map((project, index) => (
                                <button
                                    key={index}
                                    className={current === index ? "is-active" : ""}
                                    onClick={() => setCurrent(index)}
                                >{project.title}</button>
                            ))}
                        </div>
                        <div className="projects-showcase__arrows">
                            <button onClick={goPrev} className="projects-showcase__arrow--prev"><img src={images.arrowLeft} alt="" /></button>
                            <button onClick={goNext} className="projects-showcase__arrow--next"><img src={images.arrowRight} alt="" /></button>
                        </div>
                    </div>
                    <div className="projects-showcase__cards">
                        <article className="projects-showcase__card">
                            <img src={currentProject.image} alt="" onClick={() => toggleProject(currentProject)}/>
                            <h2>{currentProject.title}</h2>
                            <p>{currentProject.year}</p>
                            <p className={openProject === currentProject ? "projects-showcase__card-more is-open" : "projects-showcase__card-more"}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                            <button onClick={() => toggleProject(currentProject)}>{openProject === currentProject ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                        </article>
                        <article className="projects-showcase__card">
                            <img src={nextProject.image} alt="" onClick={() => toggleProject(nextProject)}/>
                            <h2>{nextProject.title}</h2>
                            <p>{nextProject.year}</p>
                            <p className={openProject === nextProject ? "projects-showcase__card-more is-open" : "projects-showcase__card-more"}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                            <button onClick={() => toggleProject(nextProject)}>{openProject === nextProject ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
