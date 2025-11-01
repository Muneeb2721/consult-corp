import { InputBase } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="mx-[20px] space-x-4 border-b-1 border-gray-600 py-12
            sm:flex-row sm:gap-0
            flex flex-col gap-[40px]">
                <div className="space-y-3
                sm:w-[25%]
                w-full">
                    <h1 className="footer-head text-[28px] font-semibold tracking-[2px]">ConsultCorp</h1>
                    <span className="footer-text text-[18px]">Delivering innovative consulting solutions for modern businesses. Transform your organization with our expert guidance.</span>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/muneebnadeem/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-400 transition-transform duration-200">
                            <LinkedInIcon style={{ fontSize: 28}} />
                        </a>

                        <a href="https://github.com/Muneeb2721" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-400 transition-transform duration-200">
                            <GitHubIcon style={{ fontSize: 28}} />
                        </a>

                        <a href="https://facebook.com/muneebnadeem" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-blue-400 transition-transform duration-200">
                            <FacebookIcon style={{ fontSize: 28}} />
                        </a>
                    </div>
                </div>

                <div className="flex flex-wrap
                sm:w-[75%] sm:gap-0 sm:justify-evenly
                w-full gap-[20px] justify-between">
                
                    <div className="space-y-3">
                        <h3 className="footer-services text-[22px] font-semibold">Services</h3>
                        <ul className="space-y-2">
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#home" className="">All Services</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#about" className="">Strategic Planning</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#services" className="">Digital Transformation</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#contact" className="">Process Optimization</a></li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="footer-services text-[22px] font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#home" className="">Case Studies</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#about" className="">Insights</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#services" className="">Newsletter</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#contact" className="">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <div className="space-y-3">
                        <h3 className="footer-services text-[22px] font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#home" className="">Privacy Policy</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#about" className="">Terms of Service</a></li>
                            <li className="footer-links text-[18px] hover:text-blue-400"><a href="#services" className="">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mx-[20px] text-center space-y-2 border-b-1 border-gray-600 py-8">
                <h3 className="footer-update-head text-[24px] font-semibold">Stay Updated</h3>
                <p className="footer-update-text text-[18px]">Get the latest insights and updates delivered to your inbox.</p>
                <div className="subscribe
                sm:flex-row sm:justify-center sm:gap-0
                flex flex-col items-center gap-2">
                    <InputBase
                        placeholder="Enter your email"
                        sx={{
                            backgroundColor: "white",
                            borderRadius: "4px",
                            padding: "8px 12px",
                            width: {sm:"280px"},
                            height: "40px"
                        }}
                    />
                    <button className="bg-blue-700 text-white text-[18px] px-6 py-2 ml-2 rounded cursor-pointer">Subscribe</button>
                </div>
            </div>

            <div className="mx-[20px] py-6">
                <p className="footer-copyright text-center text-[18px]">&copy; 2024 <strong className="tracking-[3px]">WebFitJustice</strong> . All rights reserved.</p>
            </div>
        </footer>
    );
}