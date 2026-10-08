import "./SurveyTypes.scss"
import { useState } from "react"
import { images } from "../../../../assets/images.js"

const surveyTypes = [
    {image: images.stone, title: "Геологические", descr: "Получение востребованных материалов исследований для обоснования возможностей проектирования и стройки в существующей геологической ситуации"},
    {image: images.camera, title: "Геодезические", descr: "Комплексные мероприятия по изучению и анализу ситуационных данных о рельефе земельного участка, его гидросети, растительности, текущем использовании, наличии и расположении зданий и сооружений, линейных объектов, наземных и подземных коммуникаций"},
    {image: images.tree, title: "Экологические", descr: "Мероприятия по изучению и мониторингу текущего состояния окружающей среды, прогнозирование вероятных негативных изменений экосистемы от социально-экономических факторов и техногенной нагрузки"},
]

export default function SurveyTypes(){

    const [openType, setOpenType] = useState(null)

    const toggleType = (type) => {
        setOpenType((prev) => (prev === type ? null : type))
    }

    return(
        <section className="survey-types">
            <div className="survey-types__container">
                <h1>ОСНОВНЫЕ ВИДЫ ИНЖЕНЕРНЫХ ИЗЫСКАНИЙ</h1>
                <div className="survey-types__content">
                    <p className="survey-types__caption">Главные направления деятельности</p>
                    <div className="survey-types__list">
                        {surveyTypes.map((type) => (
                            <article key={type.title} className="survey-types__item">
                                <img src={type.image} alt="" />
                                <div className="survey-types__item-text">
                                    <h3>{type.title}</h3>
                                    <p>{type.descr}</p>
                                    <p className={openType === type ? "survey-types__item-more is-open" : "survey-types__item-more"}>Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida. </p>
                                    <button onClick={() => toggleType(type)}>{openType === type ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
