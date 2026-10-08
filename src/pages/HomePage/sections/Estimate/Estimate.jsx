import "./Estimate.scss"
import { images } from "../../../../assets/images.js"

export default function Estimate(){
    return(
        <section className="estimate">
            <div className="estimate__container">
                <h1>НЕОБХОДИМО РАСЧИТАТЬ СМЕТУ?</h1>
                <div className="estimate__body">
                    <div className="estimate__info">
                        <div className="estimate__phone-info">
                            <p>Номер телефона</p>
                            <p>Не заполнено</p>
                        </div>
                        <div className="estimate__file-info">
                            <p>Загрузите техническое задание (если есть)</p>
                            <p>DOC, DOCX, TXT, OFC</p>
                        </div>
                    </div>
                    <div className="estimate__form">
                        <input type="text" placeholder="+7 (---) --- -- --"/>
                        <div className="estimate__upload">
                            <button className="estimate__upload-button">
                                <img src={images.download} alt="" />
                                <p>Загрузить файл</p>
                            </button>
                            <div className="estimate__files">
                                <span>
                                    <p>ТЗ_Технониколь.doc</p>
                                    <img src={images.remove} alt="" />
                                </span>
                                <span>
                                    <p>ТЗ-2_Технониколь.doc</p>
                                    <img src={images.remove} alt="" />
                                </span>
                            </div>
                            <button className="estimate__submit">РАССЧИТАТЬ СМЕТУ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
