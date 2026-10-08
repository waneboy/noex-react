import "./Faq.scss"

const questions = [
    "Сколько вы работаете в этой области?",
    "Вы работаете по всей России?",
    "Какие услуги в плане инженерных изысканий Вы оказываете?",
    "Есть ли у Вас прайс-лист?",
    "Как оценивается время работ?",
    "Есть ли у Вас вакансии?",
    "Где расположен Ваш офис?",
]

export default function Faq(){
    return(
        <section className="faq">
            <div className="faq__container">
                <h1>ВЫСОКИЙ УРОВЕНЬ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА</h1>
                <div className="faq__content">
                    <p className="faq__caption">Подтверждение наших компетенций в специализации</p>
                    <div className="faq__questions">
                        {questions.map((question, index) => (
                            <div key={index} className="faq__question">
                                <h2>{question}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
