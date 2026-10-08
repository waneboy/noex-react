import "./ProjectPage.scss"
import PageHeading from "../../components/PageHeading/PageHeading.jsx"
import ProjectObjects from "./sections/ProjectObjects/ProjectObjects.jsx"

export default function ProjectPage({ title }){
    return(
        <div className="project-page">
            <PageHeading title={title} backTo="/projects" backText="К проектам"/>
            <ProjectObjects/>
        </div>
    )
}
