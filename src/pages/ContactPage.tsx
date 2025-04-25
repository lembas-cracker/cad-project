import { Helmet } from "react-helmet-async";
import Form from "../components/Form.tsx";
import Layout from "../components/Layout.tsx";

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Big Corp.</title>
        <meta name="description" content="Fill out the form and learn more about us" />
      </Helmet>
      <Layout>
        <Form />
      </Layout>
    </div>
  );
};

export default ContactPage;
