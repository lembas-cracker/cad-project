import { Box, Container, Typography } from "@mui/material";
import { styled } from "styled-components";
import CustomButton from "./CustomButton.tsx";
import theme from "../styles/theme.ts";

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

  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 20% cover 30%;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(Box)`
  padding: 1rem;
  border-radius: 8px;
  transition: 0.4s ease;
  text-align: left;
  cursor: pointer;

  &:hover {
    -webkit-transform: scale(1.08);
    transform: scale(1.08);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    text-align: center;
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
        <Box sx={{ display: "flex", justifyContent: "center", px: "1rem" }}>
          <CustomButton
            to="contact"
            sx={{
              [theme.breakpoints.down("sm")]: {
                maxWidth: "none",
              },
              flex: 1,
              maxWidth: 1 / 4,
            }}
          >
            Contact Us
          </CustomButton>
        </Box>
      </Container>
    </StyledFeatures>
  );
};

export default Features;
