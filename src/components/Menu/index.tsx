import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '../Typography';
import classes from './styles.module.css';

export default function Menu(props: {
    show: boolean,
    setShow: (show: boolean) => void,
    menuItems: { label: string, path: string }[],
    infos?: string[]
}
) {
    const navigate = useNavigate()

    return (
        <>
        <div className={classes.click_outside} hidden={!props.show} onClick={() => {props.setShow(false)}}></div>
            <div className={`${classes.menu_warper} ${props.show ? `${classes.show}` : null}`}>
                <div className={classes.close_menu} onClick={() => props.setShow(false)}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                            <g>
                                <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 
			512,452.922 315.076,256"/>
                            </g>
                        </g>
                    </svg>
                    <span>Fermer</span>
                </div>
                <div className={classes.menu_container}>
                    <ul>
                        {props.menuItems.map((menuItem, index) => {
                            return (
                                <li className={classes.link} key={index} onClick={() =>  navigate(menuItem.path)}>{menuItem.label}</li>
                            );
                        })}
                    </ul>
                </div>
                {props.infos && (
                    <>
                        <hr />
                        <div className={classes.infos_container}>
                            {props.infos.map((info, index) => {
                                return (
                                    <Typography variant="body2" key={index}>{info}</Typography>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}