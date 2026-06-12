import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import CustomButton from "../../components/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Formik, Form } from "formik";
import { contactSchema } from "../../validation/contactSchema";

function Contact() {
  const [open,setOpen]=useState(false);
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    contactMethod: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
  console.log("Form Data:", values);

  setOpen(true);

  resetForm();
};

  return (
    <Box id="contact" sx={{ py: 8, px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom >
        Contact Us
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        mb={4}
      >
        We'd love to hear from you.
      </Typography>

      <Paper elevation={4}sx={{maxWidth: 900,mx: "auto",p: 4,}}>
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <Form>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.fullName &&
                      Boolean(errors.fullName)
                    }
                    helperText={
                      touched.fullName &&
                      errors.fullName
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.email &&
                      Boolean(errors.email)
                    }
                    helperText={
                      touched.email &&
                      errors.email
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    required
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.phone &&
                      Boolean(errors.phone)
                    }
                    helperText={
                      touched.phone &&
                      errors.phone
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.subject &&
                      Boolean(errors.subject)
                    }
                    helperText={
                      touched.subject &&
                      errors.subject
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Department"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.department &&
                      Boolean(errors.department)
                    }
                    helperText={
                      touched.department &&
                      errors.department
                    }>
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="Appointment Booking">Appointment Booking</MenuItem>
                    <MenuItem value="Telemedicine Support">Telemedicine Support</MenuItem>
                    <MenuItem value="Billing & Payments">Billing & Payments</MenuItem>
                    <MenuItem value="Technical Support">Technical Support</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    select
                    label="Preferred Contact Method"
                    name="contactMethod"
                    value={values.contactMethod}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.contactMethod &&
                      Boolean(errors.contactMethod)
                    }
                    helperText={
                      touched.contactMethod &&
                      errors.contactMethod
                    }>
                    <MenuItem value="Email">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={5}
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.message &&
                      Boolean(errors.message)
                    }
                    helperText={
                      touched.message &&
                      errors.message
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <CustomButton
                    title="Submit"
                    type="submit"
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Paper>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent sx={{textAlign: "center",p: 4,}}>
          <CheckCircleIcon color="success" sx={{fontSize: 80,mb: 2,}}/>
          <Typography variant="h5"gutterBottom>Success!</Typography>
          <Typography>Contact form submitted successfully.</Typography>
        </DialogContent>
        <DialogActions sx={{justifyContent: "center",pb: 3,}}>
          <Button
          variant="contained"
          onClick={() => setOpen(false)}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Contact;