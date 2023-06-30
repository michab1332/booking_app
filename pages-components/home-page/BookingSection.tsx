import useBookingSection from "@/hooks/home-page/useBookingSection";

import styles from "../../styles/home-page/BookingSection.module.css";
import Title from "@/shared-components/title";
import Button from "@/shared-components/button";
import BookingItem from "./BookingItem";

const BookingSection: React.FC = () => {
    const { shedule, day, hour, hours, onDayChange, onHourChange } = useBookingSection();
    return (
        <div id="booking" className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="ZAPISY" color="#F8F2F0" />
                <form className={styles.form}>
                    <p className={styles.month}>Czerwiec 2023</p>
                    <p className={styles.boxName}>Dostępne dni:</p>
                    <div className={styles.buttonsBox}>
                        {shedule?.map((data, index) => {
                            return <BookingItem key={index} stateValue={day} value={data.day} onChange={onDayChange} />
                        })}
                    </div>
                    <p className={styles.boxName}>Dostępne godziny:</p>
                    <div className={styles.buttonsBox}>
                        {hours?.length ? hours.map((item, index) => <BookingItem key={index} stateValue={hour} value={item} onChange={onHourChange} />) : "brak wolnych godzin"}
                    </div>
                    <Button text="Zarezerwuj" />
                </form>
            </section>
        </div>
    );
}

export default BookingSection;