import "./Expertise.scss"

const points = [
    {title: "30 лет работы", descr: "Мы работаем уже 30 лет и накопили уникальный опыт. Любые трудности для нас это пустяк"},
    {title: "Выполняем комплекс работ", descr: "Мы проводим весь необходимый комплекс работ для каждого объекта. Это гарантирует 100% прохождение экспертизы"},
    {title: "Команда профессионалов", descr: "В нашей профессиональной команде 13 высококвалифицированных специалистов"},
    {title: "Отвечаем быстро", descr: "Мы даем быстрый ответ на ваше обращение. Обычно в течение часа"},
    {title: "Огромный опыт", descr: "Мы обладаем огромным опытом и собственной уникальной базой пройденных скважин. Это позволяет нам предвидеть проблемы"},
]

export default function Expertise(){
    return(
        <section className="expertise">
            <div className="expertise__container">
                <h1>ВЫСОКИЙ УРОВЕНЬ И ПРОФЕССИОНАЛЬНАЯ КОМАНДА</h1>
                <div className="expertise__content">
                    <p className="expertise__caption">Подтверждение наших компетенций в специализации</p>
                    <div className="expertise__points">
                        {points.map((point) => (
                            <div key={point.title} className="expertise__point">
                                <h2>{point.title}</h2>
                                <p>{point.descr}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
