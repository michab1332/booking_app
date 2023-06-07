import Image from "next/image";

import styles from "../../styles/home-page/HeroSection.module.css";
import Button from "@/shared-components/button";
import BlocksSVG from "../../public/blocks.svg";

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.wrapper}>
                <h2 className={styles.title}>
                    KAJA BONOWICZ <br></br> ZAPISY NA <br></br> PAZNOKCIE
                </h2>
                <p className={styles.desc}>Feel as a super star everyday, with your own <br></br> look and style</p>
                <Button text="Zarezerwuj termin" />
            </section>
            <Image className={styles.blocksSVG} src={BlocksSVG} alt="blocks svg" />
        </div>
    );
}

export default HeroSection;