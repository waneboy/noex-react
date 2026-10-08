import "./Footer.scss"
import { Link } from "react-router-dom"
import { images } from "../../assets/images.js"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__info">
                        <button><img src={images.logoFooter} alt="" /></button>
                        <p>Инженерные изыскания в строительстве</p>
                        <div><img src={images.phone} alt="" /><p>+7 (495) 755-02-29</p></div>
                    </div>
                    <div className="footer__nav">
                        <div className="footer__nav-column">
                            <Link to="/projects">Проекты</Link>
                            <Link to="/about">О нас</Link>
                            <Link to="/empty">Услуги</Link>
                        </div>
                        <div className="footer__nav-column footer__nav-column--central">
                            <Link to="/empty">Цены</Link>
                            <Link to="/empty">Статьи</Link>
                            <Link to="/empty">Вакансии</Link>
                        </div>
                        <div className="footer__nav-column">
                            <Link to="/empty">Контакты</Link>
                        </div>
                    </div>
                    <div className="footer__socials">
                        <button onClick={() => window.open('https://facebook.com', '_blank')}><img src={images.facebook} alt="" /></button>
                        <button onClick={() => window.open('https://vk.ru', '_blank')}><img src={images.vk} alt="" /></button>
                        <button onClick={() => window.open('https://instagram.com', '_blank')}><img src={images.instagram} alt="" /></button>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>НОЭКС. Все права защищены 2021©. Инженерные изыскания с 1999 года.</p>
                </div>
            </div>
        </footer>
    )
}
