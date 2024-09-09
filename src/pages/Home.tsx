import Header from "../components/header/Header"
import HeroSection from "../components/home/HeroSection"
import SolutionSection from "../components/home/SoluctionSection"

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection
        title="Gerencie e mantenha sua frota de forma simples"
        description="Gerencie veículos, rotas, manutenção preventiva, e muito mais em um único painel. Encontramos dados em suas operações diárias e os transformamos em insights."
        primaryButtonText="Cadastre-se"
        secondaryButtonText="Veja mais"
      />
      <SolutionSection title="Sob medida para você"
      description="Inovação é com a gente! O Km Fácil já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços." />
    </>
  )
}

export default HomePage