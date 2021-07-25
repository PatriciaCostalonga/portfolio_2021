import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-indigo-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-rose-300" 
                    className="inflex-flex 
                    items-center py-6 px-3 mr-4 
                    text-rose-100 
                    hover:text-blue-200
                    text-4xl font-bold tracking-widest">
                        Patricia Costalonga
                    </NavLink>
                    <NavLink to="/post"  
                    activeClassName="text-rose-300 bg-indigo-600"
                    className="inflex-flex 
                    items-center py-3 px-3 my-6 
                    text-rose-100 
                    rounded
                    hover:text-blue-200
                    text-2xl font-bold">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"  
                    activeClassName="text-rose-300 bg-indigo-600"
                    className="inflex-flex 
                    items-center py-3 px-3 my-6 
                    text-rose-100 
                    rounded
                    hover:text-blue-200
                    text-2xl font-bold">
                        Projects
                    </NavLink>
                    <NavLink to="/about"  
                    activeClassName="text-rose-300 bg-indigo-600" 
                    className="inflex-flex 
                    items-center py-3 px-3 my-6 
                    text-rose-100 
                    rounded
                    hover:text-blue-200
                    text-2xl font-bold">
                        About me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3  my-6">
                    <SocialIcon url="https://www.linkedin.com/in/patricia-costalonga/" 
                    className="mr-4" 
                    target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                    <SocialIcon url="https://github.com/PatriciaCostalonga" 
                    className="mr-4" 
                    target="_blank" fgColor="#fff" style={{ height:35, width:35 }}/>
                </div>
            </div>
        </header>
    )
};