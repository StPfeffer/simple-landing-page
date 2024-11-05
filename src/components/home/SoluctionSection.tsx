import "../../styles/solution.css";
import Container from "../Container";
import Card from "../card/Card";
import CarIcon from "../icon/CarIcon";
import MaintenanceIcon from "../icon/MaintenaneIcon";
import PinIcon from "../icon/PinIcon";

const SolutionSection = () => {
    return (
        <section id="solution">
            <Container className="content">
                <p className="desktop-only reverse-color">Soluções</p>
                <h1>Sob medida para você</h1>
                <p>Inovação é com a gente! O <span className="reverse-color">Km Fácil</span> já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.</p>

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