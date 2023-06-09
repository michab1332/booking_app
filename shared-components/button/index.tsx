import style from "../../styles/shared-components/Button.module.css";

interface IButton {
    text: string,
    func?: Function
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