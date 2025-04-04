import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import About from "../About/About";
import HowOrder from "../HowOrder/HowOrder";
import UserContent from "../UserContent/UserContent";
import Faq from "../Faq/Faq";
import Info from "../Info/Info";
import Final from "../Final/Final";

export default function App() {
  return (
    <Container>
      <Banner />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <HowOrder />
        <UserContent />
        <Faq />
        <Info />
        <Final />
      </main>
    </Container>
  );
}
