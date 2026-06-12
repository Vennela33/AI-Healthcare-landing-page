import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomButton from "../../components/Button";


function Newsletter() {
  const [open, setOpen] = useState(false);
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setOpen(true);
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
      <Dialog
  open={open}
  onClose={() => setOpen(false)}
>
  <DialogContent
    sx={{
      textAlign: "center",
      p: 4,
      minWidth: 350,
    }}
  >
    <CheckCircleIcon
      color="success"
      sx={{
        fontSize: 80,
        mb: 2,
      }}
    />

    <Typography
      variant="h5"
      fontWeight="bold"
      gutterBottom
    >
      Subscription Successful!
    </Typography>

    <Typography color="text.secondary">
      Thank you for subscribing to our newsletter.
    </Typography>
  </DialogContent>

  <DialogActions
    sx={{
      justifyContent: "center",
      pb: 3,
    }}
  >
    <Button
      variant="contained"
      onClick={() => setOpen(false)}
    >
      OK
    </Button>
  </DialogActions>
</Dialog>
    </Box>
  );
}

export default Newsletter;