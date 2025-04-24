import { styled } from "styled-components";
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import ContactButton from "./ContactButton";

const StyledAppBar = styled(AppBar)`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: rgb(15, 70, 124);
`;

const Header = () => {
  return (
    <StyledAppBar>
      <Container maxWidth="xl" sx={{ display: "flex" }}>
        <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
          <Button sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }} component={Link} to="/">
            Big Corp.
          </Button>
          <ContactButton />
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
