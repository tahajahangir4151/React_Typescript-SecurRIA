import React, { useState } from "react";
import { Box } from "@mui/material";
import LogoImg from "../images/Logo.jpeg";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import {
  ForgotLink,
  ForgotPwdBox,
  FormContainer,
  FormHeading,
  FormSecondaryHeading,
  Logo,
  StyledButton,
  StyledContainer,
  StyledTextField,
} from "../styles/loginStyle";

interface loginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<loginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const navigate = useNavigate();

  //Form validation and handle submit
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let isvalid = true;

    //Email validation
    if (email === "") {
      setEmailError("Email must be required");
      isvalid = false;
      return;
    } else if (!validator.isEmail(email)) {
      setEmailError("Please Enter a valid Email");
      isvalid = false;
      return;
    } else {
      setEmailError("");
    }

    //Password validation
    if (password === "") {
      setPasswordError("Password must be required");
      isvalid = false;
      return;
    } else if (password.length < 6) {
      setPasswordError("Password at least 6 characters long");
      isvalid = false;
      return;
    } else {
      setPasswordError("");
    }

    //If Form is valid then store in the local storage and navigate
    if (isvalid) {
      localStorage.setItem("userInfo", JSON.stringify({ email, password }));
      console.log("userInfo", JSON.stringify({ email, password }));
      onLoginSuccess();
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Logo src={LogoImg} alt="Logo" />

      {/* Login Form */}
      <StyledContainer maxWidth="xs">
        <FormContainer>
          <FormHeading variant="h5">Login into your account</FormHeading>

          <FormSecondaryHeading>
            Gain access to your personalized profile and secure your digital
            identity with a single click.
          </FormSecondaryHeading>

          {/* Login Form Fields */}
          <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
            <StyledTextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailError}
              helperText={emailError}
            />

            <StyledTextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
            />

            <ForgotPwdBox>
              <Box></Box>
              <ForgotLink to={""}>Forgot Password?</ForgotLink>
            </ForgotPwdBox>

            <StyledButton type="submit" fullWidth variant="contained">
              LOGIN
            </StyledButton>
          </form>
        </FormContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
