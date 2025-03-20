import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";

export default function App() {
  return (
    <Container>
      <Banner />
      <Header />
      <main>
        <Hero />
        <Benefits />
      </main>
    </Container>
  );
}
