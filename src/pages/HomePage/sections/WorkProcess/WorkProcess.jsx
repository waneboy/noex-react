import "./WorkProcess.scss"
import { useState } from "react"
import { images } from "../../../../assets/images.js"

const steps = [
    {number: "1", title: "Подготовка", descr: "В этот период происходит постановка задач инженерных изысканий, горячее обсуждение и утверждение необходимого технического задания, подготавливается договорная документация и проверяются исходные данные. После проработки этих важных моментов, заключается договор"},
    {number: "2", title: "Организация", descr: "Phasellus hendrerit ante in aliquam euismod. Nullam pretium sollicitudin mauris eu placerat. Maecenas commodo dui nec viverra tempor. Integer gravida."},
    {number: "3", title: "Проведение изысканий", descr: "Maecenas aliquet condimentum mi, et elementum arcu vestibulum a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur maximus tempor. "},
    {number: "4", title: "Экспертиза", descr: "Aenean sit amet magna at ligula tempor consequat vitae nec justo. Quisque augue lorem, porta non urna ac, mollis fringilla justo. Duis non placerat odio, cursus molestie urna. Donec feugiat aliquet sapien sit amet volutpat. "},
]

const totalSteps = steps.length

export default function WorkProcess(){

    const [currentIndex, setCurrentIndex] = useState(0)

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSteps - 1 : prev - 1))
    }
    const goNext = () => {
        setCurrentIndex((prev) => (prev === totalSteps - 1 ? 0 : prev + 1))
    }

    const currentStep = steps[currentIndex]

    return(
        <section className="work-process">
            <div className="work-process__container">
                <h1>КАК МЫ РАБОТАЕМ</h1>
                <div className="work-process__body">
                    <div className="work-process__steps">
                        {steps.map((step, index) => (
                            <button
                                key={step.number}
                                onClick={() => setCurrentIndex(index)}
                                className={currentIndex === index ? "is-active" : ""}
                            >
                                <div><h3>{step.number}</h3></div>
                                <p>{step.title}</p>
                            </button>
                        ))}
                    </div>
                    <div className="work-process__details">
                        <div className="work-process__text">
                            <h2>{currentStep.title}</h2>
                            <p>{currentStep.descr}</p>
                        </div>
                        <div className="work-process__arrows">
                            <button onClick={goPrev} className="work-process__arrow--prev"><img src={images.arrowLeft} alt="" /></button>
                            <button onClick={goNext} className="work-process__arrow--next"><img src={images.arrowRight} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
