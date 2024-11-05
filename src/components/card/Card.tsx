import "../../styles/card.css";

interface CardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

export default function Card({
    title,
    description,
    icon
}: CardProps) {
    return (
        <div className="card">
            {icon && <div className="card-icon">{icon}</div>}
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}