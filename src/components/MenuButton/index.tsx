import './styles.css';

export default function MenuButton (props : { setShow: (show: boolean) => void, show: boolean}) {
    return (
        <div className="menu-button" onClick={() => {props.setShow(true)}}>
            <div className="menu-button-line"></div>
            <div className="menu-button-line"></div>
            <div className="menu-button-line"></div>
        </div>
    );
}