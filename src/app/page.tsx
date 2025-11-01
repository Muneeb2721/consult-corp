import Case from "./components/Case";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Insights from "./components/Insights";

export default function Project () {
    return (
        <main className="">
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