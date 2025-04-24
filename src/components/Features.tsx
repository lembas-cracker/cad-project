import { Box, Container, Typography } from "@mui/material";
import { styled } from "styled-components";
import ContactButton from "./ContactButton";

const StyledFeatures = styled.section`
  padding: 3rem 0;
  margin: 3rem 0;
  background-color: #fff;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0 2rem 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(Box)`
  padding: 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const Features = () => {
  const features = [
    {
      title: "Order Groceries",
      description: "Sometimes you need to eat. We got you covered.",
    },
    {
      title: "Hail A Cab",
      description:
        "Just open our app and choose your driver. They will arrive to pick you up and drive you to an undisclosed location.",
    },
    {
      title: "Evaluate Your Mental State",
      description:
        "Are you feeling depressed? We partnered with areyoucrazy.com to deliver the best quizzes for you to diagnose yourself with extreme precision.",
    },
    {
      title: "Babysit Your Pet",
      description:
        "We offer babysitting services to help you take care of your pets while you're away. No need to leave your house key, our team we'll break in and take care of your furry one's needs.",
    },
    {
      title: "Get Rich",
      description:
        "Somehow we'll help you get rich in no time, with no effort involved. Only requirement: believe in yourself.",
    },
    {
      title: "Call Your Mom",
      description:
        "Sometimes moms are overbearing. We'll call your mom pretending to be you. No more questions about potential grandchildren or marriage!",
    },
  ];

  return (
    <StyledFeatures>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 2,
          }}
        >
          What We Offer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto" }}>
          Our comprehensive suite of services is designed to meet all your needs
        </Typography>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.description}
              </Typography>
            </FeatureItem>
          ))}
        </FeaturesGrid>
        <ContactButton />
      </Container>
    </StyledFeatures>
  );
};

export default Features;
