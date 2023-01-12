import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import Map from "./components/Map";
import Typography from "./components/Typography";

export default function Home() {

    return (
        <div className="home-container">
            <h1>Home Page</h1>
            <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati quas rem, quibusdam laudantium aspernatur veniam amet. Rem temporibus harum necessitatibus consequuntur. Debitis autem voluptate maxime, distinctio cupiditate reprehenderit optio?</Typography>
        </div>
    );
}



