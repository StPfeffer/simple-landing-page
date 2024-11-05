import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
}

export default function Button({
    text,
    secondary,
    icon,
    onClick
}: IButtonProps) {
    return (
        <button
            onClick={onClick}
            className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
            {icon && <span>
                {icon}
            </span>}
        </button>
    );
}