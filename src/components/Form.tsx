import { styled } from "styled-components";
import { TextField, Button, Typography, Box, Alert, CircularProgress, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Success from "./Success.tsx";

const FormLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(1),
  "&.required:after": {
    content: '" *"',
    color: theme.palette.error.main,
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

      const data = await response.json();
      console.log(data.message);
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
        <TextField
          name="name"
          label="e.g. Jane Doe"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Name is required" : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />

        <FormLabel variant="subtitle1" className="required">
          Email
        </FormLabel>
        <TextField
          name="email"
          label="e.g. jdoe@me.com"
          type="email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? "Valid email is required" : ""}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />

        <FormLabel variant="subtitle1" className="required">
          Message
        </FormLabel>
        <TextField
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
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />

        <Box sx={{ display: "flex", mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            sx={{
              px: 4,
              py: 1.5,
              flex: 1,
              borderRadius: "10px",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Submit"}
          </Button>
        </Box>
      </FormControl>
    </Container>
  );
};

export default Form;
