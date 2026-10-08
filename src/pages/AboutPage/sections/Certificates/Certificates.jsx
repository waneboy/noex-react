import "./Certificates.scss"
import { images } from "../../../../assets/images.js"

const certificates = [
    {image: images.certificate, title: "Реестр АИИС"},
    {image: images.certificate, title: "Национальный реестр специалистов (1)"},
    {image: images.certificate, title: "Национальный реестр специалистов (2)"},
]

export default function Certificates(){
    return(
        <section className="certificates">
            <div className="certificates__container">
                <div className="certificates__header">
                    <p className="certificates__caption">Мы сертифицированная компания</p>
                    <h2>НАШИ СЕРТИФИКАТЫ</h2>
                </div>
                <div className="certificates__body">
                    <div className="certificates__list">
                        {certificates.map((certificate) => (
                            <div key={certificate.title} className="certificates__card">
                                <img src={certificate.image} alt="" />
                                <h2>{certificate.title}</h2>
                                <a href="https://pub.fsa.gov.ru/rss/certificate">Посмотреть в реестре</a>
                            </div>
                        ))}
                    </div>
                    <button className="certificates__button">НАШИ УСЛУГИ И ЦЕНЫ <img src={images.arrowDiagonal} alt="" /></button>
                </div>
            </div>
        </section>
    )
}
