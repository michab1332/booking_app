import Link from "next/link";
import styles from "../../styles/home-page/Contact.module.css";

const Contact: React.FC = () => {
    return (
        <div className={styles.container}>
            <p>LUB</p>
            <h3 className={styles.text}>Skontaktuj się ze mną przez instagram <Link href="https://www.instagram.com/kaja.bonowicz/">kaja.bonowicz</Link></h3>
        </div>
    );
}

export default Contact;