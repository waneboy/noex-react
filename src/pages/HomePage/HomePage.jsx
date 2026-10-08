import "./HomePage.scss"
import Hero from "./sections/Hero/Hero.jsx"
import Intro from "./sections/Intro/Intro.jsx"
import SurveyTypes from "./sections/SurveyTypes/SurveyTypes.jsx"
import ProjectsShowcase from "./sections/ProjectsShowcase/ProjectsShowcase.jsx"
import WorkProcess from "./sections/WorkProcess/WorkProcess.jsx"
import DeadlineBanner from "./sections/DeadlineBanner/DeadlineBanner.jsx"
import Expertise from "./sections/Expertise/Expertise.jsx"
import Faq from "./sections/Faq/Faq.jsx"
import Estimate from "./sections/Estimate/Estimate.jsx"
import Contacts from "./sections/Contacts/Contacts.jsx"

export default function HomePage(){
    return(
        <div className="home-page">
            <Hero/>
            <Intro/>
            <SurveyTypes/>
            <ProjectsShowcase/>
            <WorkProcess/>
            <DeadlineBanner/>
            <Expertise/>
            <Faq/>
            <div className="home-page__forms">
                <Estimate/>
                <Contacts/>
            </div>
        </div>
    )
}
