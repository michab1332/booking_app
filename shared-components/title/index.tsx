import styles from "../../styles/shared-components/Title.module.css";

interface ITitle {
    text: string
}

const Title = ({ text }: ITitle) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{text}</h2>
        </div>);
}

export default Title;