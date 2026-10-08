import "./Contacts.scss"

const fields = [
    {label: "Имя", placeholder: "Введите имя"},
    {label: "Номер телефона", placeholder: "+7 (---) --- -- --"},
    {label: "Текст сообщения (необязательно)", placeholder: "Введите текст"},
]

export default function Contacts(){
    return(
        <section className="contacts">
            <div className="contacts__container">
                <h1>СВЯЗАТЬСЯ С НАМИ</h1>
                <div className="contacts__body">
                    <div className="contacts__form">
                        <div className="contacts__fields">
                            {fields.map((field) => (
                                <label key={field.label}>
                                    <p>{field.label}</p>
                                    <input type="text" placeholder={field.placeholder}/>
                                </label>
                            ))}
                        </div>
                        <button className="contacts__submit">ОТПРАВИТЬ</button>
                    </div>
                    <div className="contacts__text">
                        <p>Напишите нам, если у Вас есть вопросы. Мы ответим Вам в самое ближайшее время (в течении 1 часа). Также вы можете описать в сообщении суть вопроса, это поможет нам более оперативно справиться с вашей проблемой</p>
                        <p>Нажимая на кнопку, Вы принимаете <span>Положение</span> и <span>Согласие</span> на обработку персональных данных</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
