import { useState } from "react";
import { Box, Typography, TextField, useTheme } from "@mui/material";
import { useTitleChange } from "../hooks/useTitleChange";
import nitdaHQ from "../components/static/nitda-hq.jpg";
import nitdaTextLogo from "../components/static/nitda-cropped-logo.png";
import { tokens } from "../theme";
import { primarySubmitBtnStyle } from "./partials/forms/FieldStyles";
import { EmailField, OTPField, PasswordField } from "./partials/forms/Login";

const Login = ({ title }: { title: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [formType, setFormType] = useState(title);
  const RESET_PASSWORD = "Reset Password";
  const LOGIN = "Login";
  const CHANGE_PASSWORD = "Change Password";

  useTitleChange(title);

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
        <Box>
          <Box
            component={"form"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
          >
            {formType === CHANGE_PASSWORD && (
              <OTPField iconColor={colors.gray[100]} />
            )}
            {/* Form fields for login/ change password/ reset password */}
            {[LOGIN, RESET_PASSWORD].includes(formType) && (
              <EmailField iconColor={colors.gray[100]} />
            )}
            {[CHANGE_PASSWORD, LOGIN].includes(formType) && (
              <PasswordField iconColor={colors.gray[100]} label="Password" />
            )}
            {formType === CHANGE_PASSWORD && (
              <PasswordField
                iconColor={colors.gray[100]}
                label="Confirm Password"
              />
            )}
            <Box m="2rem auto 0 auto">
              <TextField
                type="submit"
                size="small"
                value={formType}
                id="submit"
                sx={primarySubmitBtnStyle(colors.green[100], colors.gray[900])}
              />
            </Box>
            {/* Toggle Login, confirm password and Reset Password */}
            {formType === LOGIN ? (
              <Typography textAlign={"center"} mt={"2rem"}>
                Forgot Password?{" "}
                <Box
                  component={"a"}
                  fontStyle={"italic"}
                  fontWeight={500}
                  sx={{
                    ":hover": {
                      color: colors.green[300],
                      textDecoration: "underline",
                    },
                  }}
                  onClick={() => {
                    setFormType(RESET_PASSWORD);
                  }}
                >
                  Click here
                </Box>
              </Typography>
            ) : (
              <>
                <Typography textAlign={"center"} m={"3rem 0 0.5rem 0"}>
                  Return to Login?{" "}
                  <Box
                    component={"a"}
                    fontStyle={"italic"}
                    fontWeight={500}
                    sx={{
                      ":hover": {
                        color: colors.green[300],
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      setFormType(LOGIN);
                    }}
                  >
                    Click here
                  </Box>
                </Typography>
                <Typography textAlign={"center"}>
                  <Box
                    component={"a"}
                    fontStyle={"italic"}
                    sx={{
                      ":hover": {
                        color: colors.green[300],
                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      setFormType(CHANGE_PASSWORD);
                    }}
                  >
                    Have password OTP?{" "}
                  </Box>
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
