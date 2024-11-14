import "../styles/button.css"

interface IButtonProps {
    text: string;
    secondary?: boolean;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export default function Button({
    text,
    secondary,
    icon,
    disabled = false
}: IButtonProps) {
    return (
        <button
            disabled={disabled}
            className={
                secondary ? "btn-secondary" : "btn-primary"
            }>
            {text}
            {icon && <span>
                {icon}
            </span>}
        </button>
    );
}