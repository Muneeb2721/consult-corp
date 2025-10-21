import Navbar from "./components/Navbar";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import About from "./components/About";
import CaseStudies from "./components/casestudies";

export default function Project () {
    return (
        <main>
            <Navbar />
            <About />
            <CaseStudies />
            <Demo />
            <Footer />

        </main>
    )

}