import styles from "../../styles/shared-components/Title.module.css";

interface ITitle {
    text: string;
    color: string
}

const Title: React.FC<ITitle> = ({ text, color }) => {

    return (
        <div className={styles.wrapper}>
            <h2 style={{ backgroundColor: color }} className={styles.title}>{text}</h2>
        </div>
    );
}

export default Title;