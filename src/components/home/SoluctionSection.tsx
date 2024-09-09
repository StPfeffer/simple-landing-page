import "../../styles/solution.css";
import Container from "../Container";
import Card from "../card/Card";
import CarIcon from "../icon/CarIcon";
import MaintenanceIcon from "../icon/MaintenaneIcon";
import PinIcon from "../icon/PinIcon";

interface SolutionSectionProps {
    title: string;
    description: string;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({
    title,
    description,
}) => {
    return (
        <section id="solution">
            <Container className="content">
                <p className="desktop-only reverse-color">Soluções</p>
                <h1>{title}</h1>
                <p>{description}</p>

                <div className="card-container even-columns">
                    <Card
                        title="Gestão de Frota"
                        description="Gerencie sua frota sem esforço com nossas ferramentas intuitivas."
                        icon={<CarIcon />}
                    />
                    <Card
                        title="Rastreamento em Tempo Real"
                        description="Rastreie seus veículos em tempo real com dados precisos."
                        icon={<PinIcon />}
                    />
                    <Card
                        title="Alertas de Manutenção"
                        description="Fique à frente com alertas de manutenção proativos."
                        icon={<MaintenanceIcon />}
                    />
                </div>
            </Container>
        </section>
    );
};

export default SolutionSection;