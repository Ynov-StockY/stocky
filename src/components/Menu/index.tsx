import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

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
        <div className='click-outside' hidden={!props.show} onClick={() => {props.setShow(false)}}></div>
            <div className={`menu-warper ${props.show ? ("show") : null}`}>
                <div className="close-menu" onClick={() => props.setShow(false)}>
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
                <div className="menu-container">
                    <ul>
                        {props.menuItems.map((menuItem, index) => {
                            return (
                                <li className='link' key={index} onClick={() => navigate(menuItem.path)}>{menuItem.label}</li>
                            );
                        })}
                    </ul>
                </div>
                {props.infos && (
                    <>
                        <hr />
                        <div className="infos-container">
                            {props.infos.map((info, index) => {
                                return (
                                    <p key={index}>{info}</p>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}