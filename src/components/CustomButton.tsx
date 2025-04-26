import { Button, SxProps, Theme } from "@mui/material";
import { Link } from "react-router-dom";

interface CustomButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const CustomButton = ({
  children,
  to,
  type = "button",
  isLoading = false,
  disabled = false,
  sx = {},
}: CustomButtonProps) => {
  const baseStyles: SxProps<Theme> = {
    borderRadius: "15px",
    fontSize: "0.9rem",
    fontWeight: 600,
    backgroundColor: "rgb(15, 70, 124)",
    color: "white",
    px: 3,
    py: 1,
    textTransform: "none",
    "&:hover": {
      opacity: 0.9,
    },
    ...sx,
  };

  return (
    <Button
      component={to ? Link : "button"}
      to={to}
      type={type}
      disabled={disabled || isLoading}
      variant={to ? "text" : "contained"}
      sx={{
        ...baseStyles,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
