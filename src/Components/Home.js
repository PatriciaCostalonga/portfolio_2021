import React from "react";
import image from "../Assets/images/sky.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="blue skies with pink clouds"
            className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-8xl text-white font-bold leading-none lg:leading-snug home-name">Hello, I'm Patricia Costalonga</h1>
            </section>
        </main>
    )
}