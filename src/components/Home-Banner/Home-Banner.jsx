import React from "react";
import HomeCard from "./Card";

function HomeBanner() {
    return (
        <div className="container-fluid">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Get productive today with Name</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Welcome to Name, your best friend when it comes to planning and productivity! Start planning or get working with one of the features below:</p>
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