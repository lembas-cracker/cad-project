import { Box, Container, Typography } from "@mui/material";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  background-color: rgb(15, 70, 124);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="body2">© {new Date().getFullYear()} Cadexchanger. All rights reserved.</Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
