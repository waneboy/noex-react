import "./Intro.scss"
import { useState } from "react"

export default function Intro(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <section className="intro">
            <div className="intro__container">
                <h1>ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ - ЭТО НЕОТЪЕМЛЕМАЯ ЧАСТЬ ПРОЕКТНОЙ ДЕЯТЕЛЬНОСТИ, ОБЕСПЕЧИВАЮЩАЯ ВСЕСТОРОННЕЕ ИЗУЧЕНИЕ ПРИРОДНЫХ И ТЕХНОГЕННЫХ УСЛОВИЙ МЕСТНОСТИ ПЛАНИРУЕМОГО СТРОИТЕЛЬСТВА.</h1>
                <div className="intro__content">
                    <p className="intro__caption">Зачем нужны инженерные изыскания?</p>
                    <div className="intro__text">
                        <p className="intro__paragraph">Проведение инженерных работ позволяет получить объем необходимых данных для аргументирования технической возможности и экономической целесообразности проектирования и застройки на конкретной территории. Информировать о возможных рисках и изменениях геологической ситуации и окружающей среды, связанных со строительством и эксплуатацией объекта, разработать мероприятия по охране и защите природы и населения от влияния техногенных факторов.</p>
                        <p className="intro__paragraph">Проведение инженерных исследований – первый этап грамотного проектирования и строительства. Без изыскательских работ невозможно получить разрешение на строительство, разработать безупречный проект, пройти экспертизу.</p>
                        <div className={`intro__more ${isOpen ? "is-open" : ""}`}>
                            <p className="intro__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <p className="intro__paragraph">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "СВЕРНУТЬ" : "ПОДРОБНЕЕ"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
