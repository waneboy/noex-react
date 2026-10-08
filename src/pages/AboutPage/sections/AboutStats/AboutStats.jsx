import "./AboutStats.scss"

const stats = [
    {value: "0", text: "Отрицательных заключений экспертизы"},
    {value: "100%", text: "Соблюдения сроков договоров"},
    {value: "2.5", text: "Тонны и терабайты архивной информации"},
    {value: "1000", text: "Более 1000 крупных объектов"},
    {value: "100", text: "Более 100 уникальных объектов"},
    {value: "", text: ""},
]

export default function AboutStats(){
    return(
        <section className="about-stats">
            <div className="about-stats__container">
                <p className="about-stats__caption">Инженерные изыскания</p>
                <div className="about-stats__content">
                    <div className="about-stats__header">
                        <h2>МЫ ЗНАЕМ ОБ ЭТОМ ВСЕ!</h2>
                        <p>Мы стоим за крупнейшими и самыми сложными проектами столицы: все высотные здания комплекса «Москва сити», Стадион «Спартак Арена», станция метро «Окская», и многие другие работы.</p>
                    </div>
                    <div className="about-stats__grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="about-stats__cell">
                                <h2>{stat.value}</h2>
                                <p>{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
