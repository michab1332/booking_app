import Title from "@/shared-components/title";
import styles from "../../styles/home-page/BookingSection.module.css";

const BookingSection = () => {
    return (
        <div className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="ZAPISY" color="#F8F2F0" />
                <form className={styles.form}>
                    <p>Czerwiec 2023</p>
                    <label className={styles.label}>One
                        <input type="radio" name="day" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.label}>two
                        <input type="radio" name="day" />
                        <span className={styles.checkmark}></span>
                    </label>
                </form>
            </section>
        </div>
    );
}

export default BookingSection;