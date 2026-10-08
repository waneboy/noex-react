import "./Header.scss"
import { Link } from "react-router-dom"
import { images } from "../../assets/images.js"

export default function Header(){
    return(
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__logo"><img src={images.logo} alt="" /></Link>
                <ul className="header__menu">
                    <Link to="/projects" className="header__link">Проекты</Link>
                    <Link to="/about" className="header__link">О нас</Link>
                    <Link to="/empty" className="header__link">Услуги</Link>
                    <Link to="/empty" className="header__link">Цены</Link>
                    <Link to="/empty" className="header__link">Статьи</Link>
                    <Link to="/empty" className="header__link">Вакансии</Link>
                    <Link to="/empty" className="header__link">Контакты</Link>
                </ul>
                <div className="header__phone">
                    <span className="header__phone-icon"></span>
                    <p>+7 (495) 755-02-29</p>
                </div>
            </nav>
        </header>
    )
}
