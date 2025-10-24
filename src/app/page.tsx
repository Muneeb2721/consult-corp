import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Insights from "./components/Insights";

import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Case from "./components/Case";

export default function Project () {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Insights />
            <Case />
            <Demo />
            <Footer />

        </main>
    )
}