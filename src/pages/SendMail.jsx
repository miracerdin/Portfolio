import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { sendMailSchema } from "../components/sendMailSchema";
import SendMailForm from "../components/SendMailForm";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

const SendMail = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  const { t } = useTranslation(["contact"]);
  return (
    <Container maxWidth="sm" sx={{ marginY: "1rem", textAlign: "center" }}>
      {/* <Avatar
        sx={{
          backgroundColor: "primary.main",
          m: "auto",
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar> */}
      <Typography
        variant="h4"
        align="center"
        mb={4}
        color={
          toggleDark
            ? theme.palette.primary.dark
            : themeDark.palette.primary.light
        }
      >
        {t("ContactWithMe")}
      </Typography>

      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", textarea: "" }}
        validationSchema={sendMailSchema}
        onSubmit={(values, actions) => {
          alert(`firstName: ${values.firstName}
          lastName: ${values.lastName}
            email: ${values.email}
            textarea: ${values.textarea}
          `);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <SendMailForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default SendMail;
