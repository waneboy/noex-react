import "./WorkScheme.scss"
import { useState } from "react"
import { images } from "../../../../assets/images.js"

const stages = [
    {title: "Подготовка", descr: "В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор"},
    {title: "Организация", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper, lorem sed pulvinar consequat, sem dui pellentesque dolor, et consequat lacus nisl a arcu. Duis ut arcu non nunc feugiat iaculis ac et magna. Praesent non enim nec nibh imperdiet. "},
    {title: "Проведение изысканий", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, nibh sit amet pharetra rutrum. "},
    {title: "Экспертиза", descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum, sapien a posuere posuere, odio magna tincidunt mauris, sit amet imperdiet mi leo nec ligula. "},
]

export default function WorkScheme(){

    const [openIndex, setOpenIndex] = useState(0)

    const toggleStage = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index))
    }

    return(
        <section className="work-scheme">
            <div className="work-scheme__container">
                <p className="work-scheme__caption">Как мы работаем</p>
                <div className="work-scheme__content">
                    <div className="work-scheme__title">
                        <h2>МЫ ПРЕДПОЧИТАЕМ РАБОТАТЬ ПО ПОНЯТНОЙ СХЕМЕ</h2>
                    </div>
                    <div className="work-scheme__stages">
                        {stages.map((stage, index) => (
                            <button
                                key={index}
                                onClick={() => toggleStage(index)}
                            >
                                <div>
                                    <img src={openIndex === index ? images.minus : images.plus} alt="" className={openIndex === index ? "is-rotated" : ""}/>
                                    <h2>{stage.title}</h2>
                                </div>
                                {openIndex === index && <p>{stage.descr}</p>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
