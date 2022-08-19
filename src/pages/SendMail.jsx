import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik } from "formik";
import { sendMailSchema } from "../components/sendMailSchema";
import SendMailForm from "../components/SendMailForm";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SendMail = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  return (
    <Container maxWidth="sm" sx={{ mt: "1rem", textAlign: "center" }}>
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
        Contact with me
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
