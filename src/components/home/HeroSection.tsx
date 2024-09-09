import Button from "../Button";
import HeroRectangleOne from "../../assets/images/rectangle-right.png";
import HeroRectangleTwo from "../../assets/images/rectangle-top-left.png";
import "../../styles/hero.css";
import Container from "../Container";

interface HeroSectionProps {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
}) => {
    return (
        <section id="hero">
            <span className="desktop-only">
                <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
            </span>
            <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

            <Container className="content">
                <p className="desktop-only reverse-color">Olá</p>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="flex gap-1">
                    <span>
                        <Button text={primaryButtonText} />
                    </span>
                    {secondaryButtonText && (
                        <span className="desktop-only">
                            <Button text={secondaryButtonText} secondary />
                        </span>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;