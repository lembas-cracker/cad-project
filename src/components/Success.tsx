import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "styled-components";

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

interface FormData {
  name: string;
}

const Success = ({ name }: FormData) => {
  return (
    <Container maxWidth="md">
      <SuccessMessage>
        <Typography variant="h4" component="h2" gutterBottom>
          Thank you for your interest, {name}!
        </Typography>
        <Typography variant="body1">We've received your message and will get back to you soon.</Typography>
      </SuccessMessage>
    </Container>
  );
};

export default Success;
