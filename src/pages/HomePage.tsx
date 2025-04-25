import { Helmet } from "react-helmet-async";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinUs from "../components/JoinUs";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to Big Corp. | Big Corp.</title>
        <meta name="description" content="Welcome to Big Corp.!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Welcome to Big Corp.!" />
        <meta name="twitter:description" content="Big Corp. solves all your problems!" />
        <meta name="twitter:image" content="https://i.imgur.com/5h5hP9G.png" />
      </Helmet>
      <Layout>
        <Hero />
        <Features />
        <JoinUs />
      </Layout>
    </div>
  );
};

export default HomePage;
