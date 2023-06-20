import Image from "next/image";

import styles from "../../styles/shared-components/Navbar.module.css";
import Logo from "../../public/kb_logo.svg";

const Navbar: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src={Logo} alt="Kaja Bonowicz Logo" width={60} height={60} />
                <menu>
                    <ul className={styles.menuItems}>
                        <li className={styles.menuItem}>Galeria</li>
                        <li className={styles.menuItem}>Zapisy</li>
                        <li className={styles.menuItem}>Kontakt</li>
                    </ul>
                </menu>
            </header>
        </div>
    );
}

export default Navbar;