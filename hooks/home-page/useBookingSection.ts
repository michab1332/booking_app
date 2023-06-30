import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/init";

interface IShedule {
    id: number;
    day: string;
    hours: string[];
}

const useBookingSection = () => {
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

    return { shedule, day, hour, hours, onDayChange, onHourChange };
}

export default useBookingSection;