import { ChangeEventHandler } from 'react';
import styles from "../../styles/home-page/BookingSection.module.css";

interface IBookingItem {
    stateValue: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

const BookingItem: React.FC<IBookingItem> = ({ stateValue, value, onChange }) => {
    return (
        <label className={stateValue === value ? styles.label + " " + styles.checked : styles.label}>
            <p className={styles.labelText}>{value}</p>
            <input className={styles.radio} onChange={onChange} type="radio" name="day" value={value} checked={stateValue === value} />
        </label>
    );
}

export default BookingItem;