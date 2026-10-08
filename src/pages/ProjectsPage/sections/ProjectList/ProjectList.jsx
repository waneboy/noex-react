import "./ProjectList.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { images } from "../../../../assets/images.js"

const years = [
    {title: "За все время", from: 0, to: 9999},
    {title: "2010-2020", from: 2010, to: 2020},
    {title: "2000-2010", from: 2000, to: 2010},
    {title: "1990-2000", from: 1990, to: 2000},
]
const projects = [
    {year: "1993-2015", from: 1993, to: 2015, image: images.project1, link: "/projects_ope1", title: "Москва-Сити", text: "Оказание полного спектра услуг на двенадцати основных объектах комплекса «Москва сити"},
    {year: "2013-2014", from: 2013, to: 2014, image: images.project2, link: "/projects_ope2", title: "АТК на Кутузовском", text: "Актуализация инженерно-геологических изысканий на участке строительства административно-торгового комплекса"},
    {year: "2012", from: 2012, to: 2012, image: images.project3, link: "/projects_ope3", title: "Завод ЗИЛ", text: "Реконструкция легендарного автогиганта, завода «ЗИЛ» Бурение инженерно-геологических скеважин до глубины 70 м, геофизические исследования"},
    {year: "2012-2013", from: 2012, to: 2013, image: images.project4, link: "/projects_ope4", title: "Станция Окская", text: "Бурение, геофизический каротаж, грунтовые и штамповые испытания, оборудование скважин, опытно-фильтрационные работы, лабораторные исследования, моделирование"},
    {year: "2010-2011", from: 2010, to: 2011, image: images.project5, link: "/projects_ope5", title: "ТРК Авиапарк", text: "Бурение, испытания грунтов методами статического зондирования, штамповые испытания, лабораторные исследования"},
    {year: "2007-2010", from: 2007, to: 2010, image: images.project6, link: "/projects_ope6", title: "Стадион Спартак", text: "Инженерно-геологические изыскания, в результате которых приняты и воплощаются в жизнь оригинальные архитектурные и инженерные решения"},
]

export default function ProjectList(){

    const [activeYear, setActiveYear] = useState(0)

    const filtered = projects.filter((project) => {
        return years[activeYear].from <= project.to && project.from <= years[activeYear].to
    })

    return(
        <section className="project-list">
            <div className="project-list__container">
                <div className="project-list__years">
                    {years.map((year, index) => (
                        <button
                            key={index}
                            className={activeYear === index ? "is-active" : ""}
                            onClick={() => setActiveYear(index)}
                        >
                            {year.title}
                        </button>
                    ))}
                </div>
                <div className="project-list__items">
                    {filtered.map((project, index) => (
                        <article key={index} className="project-list__item">
                            <p className="project-list__year">{project.year}</p>
                            <img src={project.image} alt="" />
                            <div className="project-list__info">
                                <div>
                                    <h2>{project.title}</h2>
                                    <p>{project.text}</p>
                                </div>
                                <Link to={project.link}>ПОДРОБНЕЕ</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
