import style from "../../styles/Button.module.css";

interface IButton {
    text: string,
    func?: () => {}
}

const Button = ({ text, func }: IButton) => {
    return (
        <button className={style.button} onClick={function () {
            if (func) func();
        }}>
            {text}
        </button>
    );
}

export default Button;