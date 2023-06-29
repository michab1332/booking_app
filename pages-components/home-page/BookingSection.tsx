import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where, getDoc } from "firebase/firestore";
import { db } from "@/firebase/init";

import styles from "../../styles/home-page/BookingSection.module.css";
import Title from "@/shared-components/title";
import Button from "@/shared-components/button";
import BookingItem from "./BookingItem";

interface IShedule {
    id: number;
    day: string;
    hours: string[];
}

const BookingSection: React.FC = () => {
    const [shedule, setShedule] = useState<IShedule[]>([]);
    const [day, setDay] = useState("");
    const [hour, setHour] = useState("");
    const [hours, setHours] = useState<string[]>([]);

    const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value);
    };

    const onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHour(e.target.value);
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "shedule"), (res) => {
            const sheduleArray: IShedule[] = res.docs.map(doc => {
                const data = doc.data();
                return {
                    id: Number(doc.id),
                    day: data.day as string,
                    hours: data.hours as string[]
                };
            });
            setDay(sheduleArray[0].day);
            setShedule(sheduleArray);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        setHour("");

        const q = query(collection(db, "shedule"), where("day", "==", day));
        const unsubscribe = onSnapshot(q, (res) => {
            const hoursArray = res.docs[0]?.data().hours;
            setHours(hoursArray);
        });

        return unsubscribe;
    }, [day]);

    return (
        <div id="booking" className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="ZAPISY" color="#F8F2F0" />
                <form className={styles.form}>
                    <p className={styles.month}>Czerwiec 2023</p>
                    <p className={styles.boxName}>Dostępne dni:</p>
                    <div className={styles.buttonsBox}>
                        {shedule.map((data, index) => {
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