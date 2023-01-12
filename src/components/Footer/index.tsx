import classes from "./styles.module.css";

export default function Footer() {
    return (
        <div className= {classes.footer}>
            <div className={classes.footer_container}>
                <li><a>France</a></li>
                <li><a>Newsletter</a></li>
                <li><a>Politique de confidentialité</a></li>
                <li><a>Suivez-nous</a></li>
                <li><a>Cookies</a></li>
                <li><a>Termes de conditions</a></li>
                <li><a>Plan du site</a></li>
            </div>
        </div>
    );
}
