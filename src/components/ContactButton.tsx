import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "rgb(15, 70, 124)",
        border: "1px solid white",
        borderRadius: "15px",
        fontSize: "0.8rem",
        padding: "0.4rem 1rem",
      }}
      component={Link}
      to="/contact"
    >
      Contact Us
    </Button>
  );
};

export default ContactButton;
