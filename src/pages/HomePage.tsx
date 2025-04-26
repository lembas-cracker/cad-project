import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";
import JoinUs from "../components/JoinUs.tsx";
import Layout from "../components/Layout.tsx";
import SEO from "../components/SEO.tsx";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Welcome to Big Corp. | Big Corp."
        description="Big Corp. solves all your problems!"
        name="Big Corp."
        type="website"
        image="https://i.imgur.com/5h5hP9G.png"
      />
      <Layout home>
        <Hero />
        <Features />
        <JoinUs />
      </Layout>
    </>
  );
};

export default HomePage;
