import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import HomePage from "./pages/HomePage/HomePage.jsx"
import AboutPage from "./pages/AboutPage/AboutPage.jsx"
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.jsx"
import ProjectPage from "./pages/ProjectPage/ProjectPage.jsx"
import ZeroPage from "./pages/ZeroPage/ZeroPage.jsx"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/projects_ope1" element={<ProjectPage title="МОСКВА-СИТИ"/>} />
        <Route path="/projects_ope2" element={<ProjectPage title="АТК НА КУТУЗОВСКОМ"/>} />
        <Route path="/projects_ope3" element={<ProjectPage title="ЗАВОД ЗИЛ"/>} />
        <Route path="/projects_ope4" element={<ProjectPage title="СТАНЦИЯ ОКСКАЯ"/>} />
        <Route path="/projects_ope5" element={<ProjectPage title="ТРК АВИАПАРК"/>} />
        <Route path="/projects_ope6" element={<ProjectPage title="СТАДИОН СПАРТАК"/>} />
        <Route path="/empty" element={<ZeroPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App