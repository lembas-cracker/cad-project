import { styled } from "styled-components";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton.tsx";
import theme from "../styles/theme.ts";

const StyledAppBar = styled(AppBar)`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgb(15, 70, 124);

  @media (min-width: 1200px) {
    padding-left: 128px;
    padding-right: 128px;
    transition: all 0.4s ease;

    .MuiToolbar-root {
      padding: 0;
      transition: all 0.4s ease;
    }
    .MuiContainer-root {
      padding: 0;
      transition: all 0.4s ease;
    }
  }
`;

const Header = () => {
  return (
    <StyledAppBar>
      <Container maxWidth="xl" sx={{ display: "flex", mx: "auto" }}>
        <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
          <Button sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }} component={Link} to="/">
            Big Corp.
          </Button>
          <CustomButton
            to="/contact"
            sx={{
              border: "1px solid white",
              [theme.breakpoints.down("sm")]: {
                px: 2,
                py: 0.5,
              },
            }}
          >
            Contact Us
          </CustomButton>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
