import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";
import JoinUs from "../components/JoinUs.tsx";
import Layout from "../components/Layout.tsx";

const HomePage = () => {
  return (
    <Layout home>
      <Hero />
      <Features />
      <JoinUs />
    </Layout>
  );
};

export default HomePage;
