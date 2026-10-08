import "./Hero.scss"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { images } from "../../../../assets/images.js"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
    {
        id: "surveys",
        title: "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ В СТРОИТЕЛЬСТВЕ",
        descr: "С равным успехом мы работаем на участках строительства технически сложных и ответственных объектов, и типовых сооружений. Все работы проходят государственную экспертизу.",
        button1: "ПОСМОТРЕТЬ УСЛУГИ",
        button2: "НАШИ ПРОЕКТЫ",
        note: "Выполняем инженерные изыскания в строительстве с 1988 года",
    },
    {
        id: "geology",
        title: "ГЕОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ",
        services: [
            {name: "Бурение инженерно-геологических скважин", price: "от 600₽ / п.м"},
            {name: "Штамповые испытания грунтов", price: "от 18 000₽ / опыт"},
            {name: "Лабораторные испытания со скидкой от 50% (с понижающим коэффициентом от 0.5)", price: ""},
        ],
        button1: "ПОДРОБНЕЕ",
        button2: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК",
    },
    {
        id: "ecology",
        title: "ЭКОЛОГИЧЕСКИЕ ИЗЫСКАНИЯ",
        tariffsTitle: "Комплекс инженерно-экологических изысканий:",
        tariffs: [
            {area: "0.5 Га", price: "от 50 000₽"},
            {area: "1.0 Га", price: "от 70 000₽"},
            {area: "2.0 Га", price: "от 90 000₽"},
            {area: "3.0 Га", price: "от 110 000₽"},
        ],
        button1: "ПОДРОБНЕЕ",
        button2: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК",
    },
    {
        id: "engineering",
        title: "ИНЖЕНЕРНЫЕ ИЗЫСКАНИЯ",
        services: [
            {name: "Создание инженерно-топографических планов масштаба 1:500, рельеф 0.5 метра на незастроенной территории", price: "от 10 000₽ / Га"},
            {name: "Создание опорных геодезических сетей", price: "от 50 000₽ / пункт"},
            {name: "Дендрологические исследования", price: "от 40 000₽"},
        ],
        button1: "ПОДРОБНЕЕ",
        button2: "ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК",
    },
]

export default function Hero(){

    const [activeDot, setActiveDot] = useState(0)

    const totalSlides = 4;

    const goPrev = () => {
        setActiveDot((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
    }
    const goNext = () => {
        setActiveDot((next) => (next === totalSlides - 1 ? 0 : next + 1))
    }

    return(
        <Swiper
            rewind = {true}
            className="hero-slider"
            spaceBetween={50}
            slidesPerView={1}
            navigation = {true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation, Pagination]}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} className={"hero-slider__slide hero-slider__slide--" + slide.id}>
                    <section className="hero-slide">
                        <div className="hero-slide__container">
                            <div className="hero-slide__top">
                                <div className="hero-slide__content">
                                    <h1>{slide.title}</h1>
                                    {slide.descr && <p>{slide.descr}</p>}
                                    {slide.services && (
                                        <div className="hero-slide__services">
                                            {slide.services.map((service) => (
                                                <div key={service.name}>
                                                    <h3>{service.name}</h3>
                                                    {service.price && <p>{service.price}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {slide.tariffs && (
                                        <div className="hero-slide__tariffs">
                                            <p>{slide.tariffsTitle}</p>
                                            <div className="hero-slide__tariffs-list">
                                                {slide.tariffs.map((tariff) => (
                                                    <div key={tariff.area}>
                                                        <p>{tariff.area}</p>
                                                        <span></span>
                                                        <p className="hero-slide__tariff-price">{tariff.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="hero-slide__actions">
                                    <div className="hero-slide__buttons">
                                        <Link to="/empty" className="hero-slide__button hero-slide__button--primary">{slide.button1}</Link>
                                        <Link to="/projects" className="hero-slide__button hero-slide__button--secondary">{slide.button2}</Link>
                                    </div>
                                    {slide.note && <p>{slide.note}</p>}
                                </div>
                            </div>
                            <div className="hero-slide__bottom">
                                <div className="hero-slide__dots">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={activeDot === index ? "is-active" : ""}
                                            onClick={() => setActiveDot(index)}
                                        >
                                            <div></div>
                                        </button>
                                    ))}
                                </div>
                                <div className="hero-slide__navigation">
                                    <div className="hero-slide__arrows">
                                        <button onClick={goPrev}><img src={images.arrowLeft} alt="" /></button>
                                        <button onClick={goNext}><img src={images.arrowRight} alt="" /></button>
                                    </div>
                                    <span className="hero-slide__counter"> <p>0{activeDot + 1}</p> <p>-</p> <p>04</p> </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
