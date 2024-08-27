import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    icon?: React.ReactNode;
}

export default function Button({ text, secondary, icon }: IButtonProps) {
    return (
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
            {icon && <span className={secondary ? "btn-secondary-icon" : "btn-primary-icon"}>
                {icon}
            </span>}
        </button>
    );
}