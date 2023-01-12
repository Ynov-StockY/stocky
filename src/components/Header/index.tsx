import React from "react";
import Menu from "../Menu";
import MenuButton from "../MenuButton";
import classes from './styles.module.css';
import Icon from "../Icon";
import logo from './logo.png';
import compte from './compte.svg';
import chats from './chats.svg';
import IconButton from "../IconButton";


export default function Header() {
    const menuItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
    ];
    const [show, setShow] = React.useState(false);
    const infos = ["Pays de livraison : France", "info2", "info3"];


    return (
        <>
            <header className={classes.header}>
                <div className={classes.headerLeft}>
                    <MenuButton setShow={setShow} show={show} />
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