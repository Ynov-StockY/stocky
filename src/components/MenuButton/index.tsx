import classes from './styles.module.css';

export default function MenuButton (props : { setShow: (show: boolean) => void, show: boolean}) {
    return (
        <div className={classes.menu_button} onClick={() => {props.setShow(true)}}>
            <div className={classes.menu_button_line}></div>
            <div className={classes.menu_button_line}></div>
            <div className={classes.menu_button_line}></div>
        </div>
    );
}