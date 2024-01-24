import React from "react";
import HomeCard from "./Card";
import "./Home-Banner.css"

function HomeBanner() {
    return (
        <div className="container-fluid">
        <div className=" pt-5 my-5 text-center home-banner">
            <h1 className="display-4">Get productive today with TimeWise</h1>
            <div className="col-lg-8 mx-auto">
            <p className="lead mb-5 banner-desc">Welcome to TimeWise, your best friend when it comes to planning and productivity! Start planning or get working with one of the features below:</p>
            </div>
            <div className="overflow-hidden d-flex justify-content-evenly">
                <div className="row">
                <HomeCard img="./Timer.jpg" title="Pomodoro Timer" desc="Stop procrastinating, start the timer and structure your work/study sessions and breaks" link="Timer"/>
                <HomeCard img="./Notes.jpg" title="Notes Storage" desc="The perfect place to store your thoughts and ideas before they slip your mind" link="Notes"/>
                <HomeCard img="./Calendar.jpg" title="Event Calendar" desc="View your schedule, set daily tasks and reminders, and never miss another meeting" link="Calendar"/>
                </div>
            </div>
        </div>
    </div>

        


    )

} 

export default HomeBanner