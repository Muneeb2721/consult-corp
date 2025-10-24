import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Insights from "./components/Insights";
import CaseStudies from "./components/casestudies";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

export default function Project () {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Insights />
            <CaseStudies />
            <Demo />
            <Footer />

        </main>
    )
}