import { styled } from "styled-components";
import { TextField, Typography, Box, Alert, CircularProgress, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Success from "./Success.tsx";
import CustomButton from "./CustomButton.tsx";

const FormLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  "&.required:after": {
    content: '" *"',
    color: theme.palette.error.main,
  },
}));

// custom text field for the form

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    transition: "all 0.3s ease",
    backgroundColor: theme.palette.background.paper,

    // normal state
    "& fieldset": {
      borderColor: error ? theme.palette.error.main : "#e0e0e0",
      borderWidth: "1.5px",
    },

    "&:hover fieldset": {
      borderColor: error ? theme.palette.error.dark : theme.palette.primary.light,
      boxShadow: "0 0 0 3px rgba(25, 118, 210, 0.1)",
    },

    // focused state
    "&.Mui-focused fieldset": {
      borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
      borderWidth: "2px",
      boxShadow: "0 0 0 2px rgba(25, 118, 210, 0.1)",
    },

    // disabled state
    "&.Mui-disabled fieldset": {
      borderColor: theme.palette.action.disabledBackground,
      backgroundColor: theme.palette.action.hover,
    },

    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      fontSize: "0.75rem",
      "&.Mui-error": {
        color: theme.palette.error.main,
        fontWeight: 500,
      },
    },
  },
}));

const API_URL = import.meta.env.VITE_API_URL;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError("Submission failed! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return <Success name={formData.name} />;
  }

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 4 }}>
        Fill Out The Form
      </Typography>

      {submitError && <Alert severity="error">{submitError}</Alert>}

      <FormControl
        onSubmit={handleSubmit}
        component="form"
        sx={{
          maxWidth: "350px",
          boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
          padding: "2rem",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignContent: "center",
        }}
      >
        <FormLabel variant="subtitle1" className="required">
          Name
        </FormLabel>
        <StyledTextField
          name="name"
          label="e.g. Jane Doe"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
        />

        <FormLabel variant="subtitle1" className="required">
          Email
        </FormLabel>
        <StyledTextField
          name="email"
          label="e.g. jdoe@me.com"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? "Valid email is required" : ""}
        />

        <FormLabel variant="subtitle1" className="required">
          Message
        </FormLabel>
        <StyledTextField
          name="message"
          label="e.g. Hello there!"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          helperText={errors.message ? "Message is required" : ""}
        />

        <Box sx={{ mt: 2, display: "flex" }}>
          <CustomButton sx={{ flex: 1, maxWidth: "maxContent" }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Submit"}
          </CustomButton>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Form;
