import React from "react";
import Header from "../../sections/Header";
import Agency from "../../sections/Agency";
import Service from "../../sections/Service";
import Project from "../../sections/Project";
import Contact from "../../sections/Contact";
import Discount from "../../sections/Discount";
import Footer from "../../sections/Footer";

export const HomePage = ()=>{
    return <div className="app">
        <Header />
        <Agency />
        <Service />
        <Project />
        <Contact />
        <Discount />
        <Footer />
    </div>
}
