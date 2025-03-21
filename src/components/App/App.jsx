import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import About from "../About/About";
import HowOrder from "../HowOrder/HowOrder";
import UserContent from "../UserContent/UserContent";

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
      </main>
    </Container>
  );
}
