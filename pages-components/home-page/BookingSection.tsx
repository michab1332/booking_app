import { useState, useEffect, ChangeEventHandler } from "react";

import styles from "../../styles/home-page/BookingSection.module.css";
import Title from "@/shared-components/title";
import Button from "@/shared-components/button";

interface ITimetable {
    day: string;
    hours: string[];
}

interface IBookingItem {
    stateValue: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

const timetable: ITimetable[] = [
    {
        day: "18 czerwca",
        hours: ["8:30", "18:00"]
    },
    {
        day: "19 czerwca",
        hours: ["11:20", "14:00"]
    },
    {
        day: "21 czerwca",
        hours: ["10:30", "15:00"]
    },
    {
        day: "24 czerwca",
        hours: ["9:00", "18:00"]
    }
]

const BookingItem: React.FC<IBookingItem> = ({ stateValue, value, onChange }) => {
    return (
        <label className={stateValue === value ? styles.label + " " + styles.checked : styles.label}>
            <p className={styles.labelText}>{value}</p>
            <input className={styles.radio} onChange={onChange} type="radio" name="day" value={value} checked={stateValue === value} />
        </label>
    );
}

const BookingSection: React.FC = () => {
    const [day, setDay] = useState("18 czerwca");
    const [hour, setHour] = useState("8:00");
    const [hours, setHours] = useState([]);

    const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value);
    }

    const onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHour(e.target.value);
    }

    useEffect(() => {
        setHour("");
        const chosedTime = timetable.filter(item => item.day === day)
        setHours(chosedTime[0].hours);
    }, [day])

    return (
        <div className={styles.container}>
            <section className={styles.wrapper}>
                <Title text="ZAPISY" color="#F8F2F0" />
                <form className={styles.form}>
                    <p className={styles.month}>Czerwiec 2023</p>
                    <div className={styles.buttonsBox}>
                        {timetable.map((data, index) => {
                            return <BookingItem key={index} stateValue={day} value={data.day} onChange={onDayChange} />
                        })}
                    </div>
                    <div className={styles.buttonsBox}>
                        {hours.map((item, index) => <BookingItem key={index} stateValue={hour} value={item} onChange={onHourChange} />)}
                    </div>
                    <Button text="Zarezerwuj" />
                </form>
            </section>
        </div>
    );
}

export default BookingSection;