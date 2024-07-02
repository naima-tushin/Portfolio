import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Navbar from "../Shared/Navbar/Navbar";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Navbar />
            <section id="home">
                <Banner />
            </section>
            <section id="about">
                <AboutMe />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <section id="experience">
                    <Experience />
                </section>
                <ContactMe />
            </section>
        </div>
    );
};

export default Home;
