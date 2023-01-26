import React, { useEffect } from "react";
import Menu from "../Menu";
import MenuButton from "../MenuButton";
import classes from './styles.module.css';
import Icon from "../Icon";
import logo from './logo.svg';
import compte from './compte.svg';
import chats from './chats.svg';
import IconButton from "../IconButton";
import SearchBar from "../SearchBar";
import { useLocation } from "react-router-dom";


export default function Header() {
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Announcements", path: "/announcements"}
    ];
    const [show, setShow] = React.useState(false);
    const infos = ["Pays de livraison : France", "info2", "info3"];
    const [color, setColor] = React.useState("#fff");

    const location = useLocation();
    useEffect(() => {
    if (location.pathname === "/") {
        setColor("#ACBAC5");
    } else {
        setColor("#fff");
    }
}, [location]);

return (
    <>
        <header className={classes.header} style={{ backgroundColor: color }}>
            <div className={classes.headerLeft}>
                <MenuButton setShow={setShow} show={show} />
                <SearchBar display={"desktop"} placeholder={"Search"} />
            </div>
            <div className={classes.headerCenter}>
                <img className={classes.logo} src={logo} alt="logo" />
            </div>
            <div className={classes.headerRight}>
                <IconButton icon={<Icon src={chats} alt={"chats icon"} size={"lg"} />} onClick={() => { }} />
                <IconButton icon={<Icon src={compte} alt={"compte icon"} size={"lg"} />} onClick={() => { }} />
            </div>
        </header>
        <Menu show={show} setShow={setShow} menuItems={menuItems} infos={infos} />
    </>
);
}