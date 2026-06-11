import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomButton from "../../components/Button";
function Newsletter() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("Subscribed Successfully!");
    resetForm();
  };

  return (
    <Box id="newsletter" sx={{ py: 8, px: 2, background: "#f5f7fb" }}>
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          mx: "auto",
          p: 4,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Subscribe to our Newsletter
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3}>
          Get latest updates about healthcare, doctors, and new features.
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <TextField
                  fullWidth
                  name="email"
                  label="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <CustomButton
                  type="submit"
                  title="Subscribe"
                />
                  

              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default Newsletter;