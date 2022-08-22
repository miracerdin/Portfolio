import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/system";
import { Form } from "formik";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const SendMailForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const { toggleDark } = useContext(ThemeContext);
  const { t } = useTranslation(["contact"]);

  return (
    <div>
      <Form action="https://formsubmit.co/miracerdin@gmail.com" method="POST">
        <Container component="main" maxWidth="xs">
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            action="https://formsubmit.co/miracerdin@gmail.com"
            method="POST"
            // eslint-disable-next-line
            sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("firstName")}
                  name="firstName"
                  id="firstName"
                  type="text"
                  variant="outlined"
                  className={toggleDark ? "darkTextField" : "lightTextField"}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.firstName && errors.firstName}
                  error={touched.firstName && Boolean(errors.firstName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label={t("lastName")}
                  name="lastName"
                  id="lastName"
                  type="text"
                  variant="outlined"
                  className={toggleDark ? "darkTextField" : "lightTextField"}
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.lastName && errors.lastName}
                  error={touched.lastName && Boolean(errors.lastName)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("Email")}
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  className={toggleDark ? "darkTextField" : "lightTextField"}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={t("YourText")}
                  placeholder="Write your message"
                  name="textarea"
                  id="textarea"
                  type="textarea"
                  variant="outlined"
                  multiline
                  rows={8}
                  maxRows={8}
                  className={toggleDark ? "darkTextField" : "lightTextField"}
                  value={values.textarea}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.textarea && errors.textarea}
                  error={touched.textarea && Boolean(errors.textarea)}
                />
              </Grid>
            </Grid>
            <Grid>
              <TextField
                type="hidden"
                name="_captcha"
                value="false"
                sx={{ border: "none", display: "none" }}
              />
            </Grid>
            <Button
              className={toggleDark ? "darkTextField" : "lightTextField"}
              type="submit"
              variant="contained"
              size="large"
            >
              {t("SendMail")}
            </Button>
          </Box>
        </Container>
      </Form>
    </div>
  );
};

export default SendMailForm;
