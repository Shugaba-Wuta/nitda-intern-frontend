import { useState } from "react";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import KeyOutlined from "@mui/icons-material/KeyOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

import { inputFieldStyle as sx } from "./FieldStyles";

export const EmailField = (props: { iconColor: string }) => {
  const { iconColor } = props;
  let inputFieldStyle = sx(iconColor);

  return (
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
            <EmailOutlined sx={{ color: iconColor }} />
          </InputAdornment>
        ),
      }}
      sx={inputFieldStyle}
    />
  );
};
export const OTPField = (props: { label?: string; iconColor: string }) => {
  const { iconColor, label = "OTP Code" } = props;
  const inputFieldStyle = sx(iconColor);

  return (
    <TextField
      required
      id="otpField"
      size="small"
      label={label}
      variant="standard"
      placeholder="123abc"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <KeyOutlined sx={{ color: iconColor }} />
          </InputAdornment>
        ),
      }}
      sx={inputFieldStyle}
    />
  );
};
export const PasswordField = (props: { label: string; iconColor: string }) => {
  const { label, iconColor } = props;
  const [passwordHidden, setPasswordHidden] = useState(true);
  const inputFieldStyle = sx(iconColor);

  return (
    <TextField
      required
      id="password"
      size="small"
      label={label}
      type={passwordHidden ? "password" : "text"}
      variant="standard"
      placeholder={label}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <KeyOutlined sx={{ color: iconColor }} />
          </InputAdornment>
        ),
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
      }}
      sx={inputFieldStyle}
    />
  );
};
