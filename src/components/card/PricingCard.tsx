import Button from "../Button";
import CheckIcon from "../icon/CheckIcon";
import "../../styles/pricing-card.css";

interface PricingCardProps {
    name: string;
    description: string;
    price: string;
    price2?: string;
    className?: string;
    features: string[];
    premium?: boolean;
    bonusDescription?: string;
}

const PricingCard = ({
    name,
    description,
    price,
    price2,
    className,
    features,
    premium,
    bonusDescription
}: PricingCardProps) => {
    return (
        <div className={`pricing-card ${premium ? ' premium ' : ''}` + className}>
            {premium &&
                <span className="bonus">
                    <p>{bonusDescription ? bonusDescription : 'MELHOR ESCOLHA'}</p>
                </span>
            }

            <span className="plan">
                <h3>{name}</h3>
                <p>{description}</p>
            </span>

            <span className="price">
                <h2>{price}</h2>
                <p>{price2}</p>
            </span>

            <Button text="Baixar agora" secondary key="free" />

            <span className="hr" />

            <ul className="features">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                        <CheckIcon size={18} />
                        <span className="ml-2">{feature.trim()}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PricingCard;
