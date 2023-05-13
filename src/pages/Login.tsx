import { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useTitleChange } from "../hooks/useTitleChange";
import nitdaHQ from "../components/static/nitda-hq.jpg";
import nitdaTextLogo from "../components/static/nitda-cropped-logo.png";
import { tokens } from "../theme";
import {
  ConfirmPasswordChangeForm,
  LoginForm,
  RequestChangePassword,
} from "./partials/forms/Login";

interface ILoginAllFields {
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
  otpCode?: string;
}

const Login = ({ title }: { title: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentFormType, setCurrentFormType] = useState(title);

  const FORM_TYPE = {
    RESET_PASSWORD: "Reset Password",
    LOGIN: "Login",
    CHANGE_PASSWORD: "Change Password",
  };

  useTitleChange(title);
  const handleLoginFormSubmit = (values: ILoginAllFields) => {
    if (FORM_TYPE.LOGIN === currentFormType) {
      console.log("Login");
    }

    console.log(JSON.stringify(values));
  };

  return (
    // Background setup
    <Box
      height={"100vh"}
      width={"100vw"}
      position={"relative"}
      padding={"0 min(20px, 4rem, 5%)"}
      sx={{
        backgroundImage: `url(${nitdaHQ})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glassmorphism container  */}
      <Box
        sx={{
          // height: "60%",
          maxWidth: "600px",
          minHeight: "fit-content",
          background: "rgba(255, 255, 255, 0.5)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(4.1px)",
          borderRadius: "5px",
          padding: "30px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title section  */}
        <Box
          display={"flex"}
          sx={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={`${nitdaTextLogo}`}
            alt="NITDA text logo"
            height={"60rem"}
          />
          <Typography
            sx={{
              fontSize: "1.75rem",
              color: "#004E2B",
              fontWeight: "500",
              mt: "min(5px, 1rem)",
            }}
          >
            Intern Portal
          </Typography>
        </Box>
        <Box mt={"2rem"}>
          {/* Form Input and Button */}
          {currentFormType === FORM_TYPE.LOGIN && (
            <LoginForm
              iconColor={colors.gray[100]}
              textColor={colors.gray[900]}
              bgColor={colors.green[100]}
              handleLoginFormSubmit={handleLoginFormSubmit}
            />
          )}
          {currentFormType === FORM_TYPE.CHANGE_PASSWORD && (
            <ConfirmPasswordChangeForm
              iconColor={colors.gray[100]}
              textColor={colors.gray[900]}
              bgColor={colors.green[100]}
              handleLoginFormSubmit={handleLoginFormSubmit}
            />
          )}

          {currentFormType === FORM_TYPE.RESET_PASSWORD && (
            <RequestChangePassword
              iconColor={colors.gray[100]}
              textColor={colors.gray[900]}
              bgColor={colors.green[100]}
              handleLoginFormSubmit={handleLoginFormSubmit}
            />
          )}
        </Box>
        <Box mt={"4rem"}>
          {/*  Glassmorphism footer navigation */}
          {currentFormType === FORM_TYPE.LOGIN && (
            <Typography>
              Forgot password?{" "}
              <Box
                component={"a"}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    color: colors.green[300],
                  },
                  fontWeight: 700,
                  textDecoration: "underline",
                }}
                onClick={() => {
                  setCurrentFormType(FORM_TYPE.RESET_PASSWORD);
                }}
              >
                Click here
              </Box>
            </Typography>
          )}

          {currentFormType !== FORM_TYPE.LOGIN && (
            <>
              <Typography>
                <Box
                  component={"a"}
                  sx={{
                    cursor: "pointer",
                    p: "0.25rem",
                    ":hover": {
                      color: colors.green[300],
                      textDecoration: "underline",
                    },
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    setCurrentFormType(FORM_TYPE.LOGIN);
                  }}
                >
                  Back to login
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  p: "0.25rem",
                  opacity: 0.75,
                  fontStyle: "italic",
                }}
              >
                <Box
                  component={"a"}
                  sx={{
                    cursor: "pointer",
                    ":hover": {
                      color: colors.green[300],
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => {
                    setCurrentFormType(FORM_TYPE.CHANGE_PASSWORD);
                  }}
                >
                  Have OTP Code?
                </Box>
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
