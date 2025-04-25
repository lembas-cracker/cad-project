import { styled } from "styled-components";
import { TextField, Button, Typography, Box, Alert, CircularProgress, FormControl } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
    } catch (error) {}
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "2.5rem" }, mb: 4 }}>
        Fill Out The Form
      </Typography>

      {submitError && <Alert>{submitError}</Alert>}

      <FormControl
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
        <Typography variant="subtitle1" component="label" gutterBottom>
          Full Name
        </Typography>
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

        <Typography variant="subtitle1" component="label" gutterBottom>
          Email
        </Typography>
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

        <Typography variant="subtitle1" component="label" gutterBottom>
          Message
        </Typography>
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
