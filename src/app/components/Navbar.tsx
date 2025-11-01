"use client";

// import { InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Navbar() {
    const [navWork, setNavWork] = useState(false);

    const toggleNav = () => {
        setNavWork(!navWork);
    };

    return (
        <nav className="navbar-bar h-[80px] bg-[#ebfdfe] text-black flex justify-between items-center px-4">
            <h1 className="logo-head text-[28px] font-regular ml-8 mr-8 font-semibold tracking-[2px]">ConsultCorp</h1> 

            <ul className="ml-auto mr-auto space-x-6
            hidden md:flex">
                <li className="text-[19px] hover:text-blue-600 cursor-pointer">Home</li>
                <li className="text-[19px] hover:text-blue-600 cursor-pointer">Services</li>
                <li className="text-[19px] hover:text-blue-600 cursor-pointer">Cases</li>
                <li className="text-[19px] hover:text-blue-600 cursor-pointer">Insights</li>
                <li className="text-[19px] hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>

            <div className="ml-4 mr-8 items-center space-x-3
            hidden md:flex">
                {/* <SearchIcon id="searchIcon" className="text-gray-400 cursor-pointer" style={{fontSize: "32px"}}/> */}
                {/* this search bar should be work for all devices, will adjust later */}
                {/* <div id="searchBar" className="flex absolute bg-gray-700 rounded px-3 py-1 top-[80px] right-[60px]">                
                    <InputBase
                        placeholder="Search..."
                        sx={{
                            color: "white",
                            ml: 1,
                            width: "300px",
                            height: "40px",
                            "& input::placeholder": { color: "gray" },
                        }}
                    />
                </div> */}
                <button className="bg-blue-700 text-white text-[18px] font-semibold px-10 py-2.5 rounded cursor-pointer">Login</button>
            </div>

            <div className="hamburgerIcon md:hidden mr-8">
                <MenuIcon className="text-black cursor-pointer" style={{ fontSize: "32px" }} onClick={toggleNav} />
            </div>

            <div className={`mobileMenu ${navWork ? 'block' : 'hidden'} absolute bg-gray-700 text-white top-0 w-full h-full right-0 md:hidden`}>
                <CloseIcon className="absolute right-10 top-15 cursor-pointer text-white" style={{ fontSize: 32 }} onClick={toggleNav} />

                <ul className="flex flex-col space-y-12 px-8 py-14">
                    <li className="text-[19px] text-white hover:text-blue-400 border-b-white hover:border-b-blue-400 border-b-2 w-fit cursor-pointer">Home</li>
                    <li className="text-[19px] text-white hover:text-blue-400 border-b-white hover:border-b-blue-400 border-b-2 w-fit cursor-pointer">Services</li>
                    <li className="text-[19px] text-white hover:text-blue-400 border-b-white hover:border-b-blue-400 border-b-2 w-fit cursor-pointer">Cases</li>
                    <li className="text-[19px] text-white hover:text-blue-400 border-b-white hover:border-b-blue-400 border-b-2 w-fit cursor-pointer">Insights</li>
                    <li className="text-[19px] text-white hover:text-blue-400 border-b-white hover:border-b-blue-400 border-b-2 w-fit cursor-pointer">Contact</li>
                </ul>

                <div className="px-8">
                    <button className="w-full bg-blue-700 text-white text-[18px] font-semibold px-10 py-2.5 rounded cursor-pointer">Login</button>
                </div>
            </div>
        </nav>
    )
}
