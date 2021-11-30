import { FormControl, Paper, TextField, Typography, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import UserContext from "./_common/context/UserContext";

const PaperLogin = styled(Paper)({
  width: "50%",
  margin: "0 auto",
});

const BoxLogin = styled(Box)({
  padding: 20,
  display: "grid",

  width: "100%",
});

const TextLogin = styled(Typography)({
  margin: "15px 0",
});

const FieldControl = styled(FormControl)({
  margin: "15px 0",
});

function Login() {
  const { login } = React.useContext(UserContext);

  const handleSubmitForm = ({ email, password }, { setSubmitting }) => {
    login(email, password);
    setSubmitting(false);
  };

  return (
    <div>
      <PaperLogin>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = `Required`;
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = `Endereco de email invalido`;
            }
            return errors;
          }}
          onSubmit={handleSubmitForm}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <BoxLogin component="form" onSubmit={handleSubmit}>
              <TextLogin variant="h3" align="center">
                Login
              </TextLogin>
              <FieldControl sx={{ margin: "10px 0" }}>
                <TextField
                  label="email"
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                ></TextField>
                {errors.email && touched.email && errors.email}
              </FieldControl>
              <FieldControl>
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  required
                ></TextField>
                {errors.password && touched.password && errors.password}
              </FieldControl>
              <LoadingButton
                type="submit"
                variant="outlined"
                disabled={isSubmitting}
              >
                Entrar
              </LoadingButton>
            </BoxLogin>
          )}
        </Formik>
      </PaperLogin>
    </div>
  );
}

export default Login;
