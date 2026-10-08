import "./PageHeading.scss"
import { Link } from "react-router-dom"
import { images } from "../../assets/images.js"

export default function PageHeading({ title, backTo, backText }){
    return(
        <section className="page-heading">
            <div className="page-heading__container">
                <h1 className="page-heading__title">{title}</h1>
                <Link to={backTo} className="page-heading__back"><img src={images.arrowLeft} alt="" />{backText}</Link>
            </div>
        </section>
    )
}
