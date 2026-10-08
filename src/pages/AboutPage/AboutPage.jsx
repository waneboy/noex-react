import "./AboutPage.scss"
import PageHeading from "../../components/PageHeading/PageHeading.jsx"
import AboutIntro from "./sections/AboutIntro/AboutIntro.jsx"
import AboutStats from "./sections/AboutStats/AboutStats.jsx"
import WorkScheme from "./sections/WorkScheme/WorkScheme.jsx"
import Advantages from "./sections/Advantages/Advantages.jsx"
import Certificates from "./sections/Certificates/Certificates.jsx"

export default function AboutPage(){
    return(
        <div className="about-page">
            <div className="about-page__top">
                <div className="about-page__intro">
                    <PageHeading title="О НАС" backTo="/" backText="На главную"/>
                    <AboutIntro/>
                </div>
                <AboutStats/>
            </div>
            <WorkScheme/>
            <Advantages/>
            <Certificates/>
        </div>
    )
}
