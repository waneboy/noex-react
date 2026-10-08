import "./AboutIntro.scss"
import { images } from "../../../../assets/images.js"

export default function AboutIntro(){
    return(
        <section className="about-intro">
            <div className="about-intro__container">
                <p className="about-intro__caption">Мы обеспечиваем качество реализации проекта</p>
                <div className="about-intro__content">
                    <p>Для реализации Вашего проекта, будь то строительство коттеджа или масштабного архитектурного сооружения, необходимы качественные инженерные изыскания. Геологические, экологические и климатические условия уникальны для каждой местности. Они способны повлиять на Ваш проект. Для изучения этих условий и прогноза возможных последствий необходимо изучить и предвидеть все возможные факторы.</p>
                    <div className="about-intro__gallery">
                        <img src={images.aboutImage1} alt="" />
                        <img src={images.aboutImage2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
