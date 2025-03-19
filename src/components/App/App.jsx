import Layout from "../Layout/Layout";
import Reviews from "../Reviews/Reviews";
import Header from "../Header/Header";
import Container from "../Container/Container";
import Banner from "../Banner/Banner";

export default function App() {
  return (
    <Container>
      <Banner />
      <Layout>
        <Header />
        <Reviews />
      </Layout>
    </Container>
  );
}
