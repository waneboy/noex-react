import "./ProjectsPage.scss"
import PageHeading from "../../components/PageHeading/PageHeading.jsx"
import ProjectList from "./sections/ProjectList/ProjectList.jsx"

export default function ProjectsPage(){
    return(
        <div className="projects-page">
            <PageHeading title="ПРОЕКТЫ" backTo="/" backText="На главную"/>
            <ProjectList/>
        </div>
    )
}
