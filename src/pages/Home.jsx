
import { ThemeToggle } from "../components/ThemeToggle.jsx"
import { BackgroundEffect } from "../components/BackgroundEffect.jsx"
import { Navbar } from "../components/NavBar.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import { AboutMe } from "../components/AboutMe.jsx"
import { SkillSection } from "../components/SkillSection.jsx"
import { ProjectsSection } from "../components/ProjectSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { Footer } from "../components/Footer.jsx"


export const Home = () => {
 


    return(
        <div className="min-h-screen">
        {/*theme Toggle*/}
        <ThemeToggle/>
     
        {/*Background Effects*/}
        <BackgroundEffect/>
         {/*NavBar*/}
        <Navbar/>

        {/*Main Content*/}
        <main>
            <HeroSection/>
            <AboutMe/>
            <SkillSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        {/*Footer*/}
        <Footer/>
        </div>
    )
}