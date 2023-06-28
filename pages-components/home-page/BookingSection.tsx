import { useState, useEffect } from "react";
import { collection, getDocs, query, onSnapshot } from "firebase/firestore";
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
    const [day, setDay] = useState("28 czerwca");
    const [hour, setHour] = useState("8:00");
    const [hours, setHours] = useState<string[]>([]);

    const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value);
    };

    const onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHour(e.target.value);
    };

    const setHoursState = (arr: IShedule[]) => {
        const chosedTime = arr.filter(item => item.day === day);
        setHours(chosedTime[0]?.hours);
    }

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
            setHoursState(sheduleArray);
            setShedule(sheduleArray);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        setHour("");
        const chosedTime = shedule.filter(item => item.day === day);
        setHours(chosedTime[0]?.hours);
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