import Form from "../components/Form.tsx";
import Layout from "../components/Layout.tsx";
import SEO from "../components/SEO.tsx";

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us | Big Corp."
        description="Fill out the form and learn more about us!"
        name="Big Corp."
        type="website"
        image="https://i.imgur.com/aMLlgd7.png"
      />
      <Layout>
        <Form />
      </Layout>
    </>
  );
};

export default ContactPage;
