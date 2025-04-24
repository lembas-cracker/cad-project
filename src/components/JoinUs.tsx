import { Container, Typography } from "@mui/material";
import { styled } from "styled-components";
import ContactButton from "./ContactButton";

const StyledJoinUs = styled.section`
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5rem 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const JoinUs = () => {
  return (
    <StyledJoinUs>
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 4,
          }}
        >
          Become our client today
        </Typography>
        <ContactButton />
      </Container>
    </StyledJoinUs>
  );
};

export default JoinUs;
