import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
  Tooltip,
} from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import KeyOutlined from "@mui/icons-material/KeyOutlined";
import { useTitleChange } from "../hooks/useTitleChange";
import nitdaHQ from "../components/static/nitda-hq.jpg";
import nitdaTextLogo from "../components/static/nitda-cropped-logo.png";
import { tokens } from "../theme";
import { useState } from "react";

const Login = ({ title }: { title: string }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useTitleChange(title);
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [passwordTogglable, setPasswordTogglable] = useState(false);
  const onChangePasswordField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    if (value.length) {
      setPasswordTogglable(true);
    } else {
      setPasswordTogglable(false);
    }
  };

  return (
    // Background setup
    <Box
      height={"100vh"}
      width={"100vw"}
      position={"relative"}
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
          width: "80%",
          height: "80%",
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
            <TextField
              required
              size="small"
              id="email"
              label="Email"
              type="email"
              variant="standard"
              placeholder="example@example.com"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined sx={{ color: colors.gray[100] }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                input: {
                  color: colors.gray[100],
                  fontSize: "1.2rem",
                },
                "&.MuiTextField-root > label": {
                  fontSize: "1rem",
                  color: colors.gray[100],
                },
                "&.MuiTextField-root": {
                  mb: "10px",
                },
              }}
            />

            <TextField
              required
              id="password"
              size="small"
              label="Password"
              type={passwordHidden ? "password" : "text"}
              variant="standard"
              placeholder="secret"
              onChange={(e) => {
                onChangePasswordField(e);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyOutlined sx={{ color: colors.gray[100] }} />
                  </InputAdornment>
                ),
                // ...(passwordTogglable && {
                endAdornment: (
                  <Tooltip title={passwordHidden ? "Show" : "Hide"}>
                    <IconButton
                      onClick={(e) => {
                        setPasswordHidden(!passwordHidden);
                      }}
                    >
                      {passwordHidden ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </Tooltip>
                ),
                // }),
              }}
              sx={{
                input: {
                  color: colors.gray[100],
                  fontSize: "1.2rem",
                },
                "&.MuiTextField-root > label": {
                  fontSize: "1rem",
                  color: colors.gray[100],
                },
                "&.MuiTextField-root": {
                  mb: "10px",
                },
              }}
            />

            <TextField
              type="submit"
              size="small"
              value={"Login"}
              id="submit"
              sx={{
                borderRadius: "5px",
                background: colors.green[200],
                fontWeight: "bold",
                width: "fit-content",
                p: "0px 5px",
                mx: "auto",
                color: colors.gray[900],
                "&.MuiTextField-root": {
                  fontSize: "2rem",
                  color: colors.gray[900],
                },
                input: {
                  color: colors.gray[900],
                  fontWeight: "600",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
