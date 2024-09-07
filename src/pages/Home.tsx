import Header from "../components/header/Header"
import HeroSection from "../components/hero/HeroSection"


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
    </>
  )
}

export default HomePage