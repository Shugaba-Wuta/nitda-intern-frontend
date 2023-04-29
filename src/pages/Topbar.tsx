import React, { useContext } from "react";
import {
  Box,
  IconButton,
  useTheme,
  Tooltip,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box display="flex" justifyContent="flex-end" p={2}>
        {/* Other icons */}
        <Box display="flex">
          <Tooltip title="Notifications">
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Settings">
            <IconButton>
              <SettingsOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Account">
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Dark Mode">
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "light" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {/* Search box */}
      <Box
        borderRadius="3px"
        sx={{
          display: "flex",
          mx: "auto",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            marginLeft: 1,
            flex: 1,
            padding: "0 5px",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            display={"flex"}
            sx={{
              outlineColor: colors.green[800],
              outline: "2px solid",
              borderRadius: "5px",
            }}
          >
            <SearchOutlinedIcon
              sx={{
                fontSize: "30px",
                color: colors.green[800],
                background: colors.gray[100],
              }}
            />
            <InputBase
              sx={{
                paddingX: "5px",
                fontWeight: "bold",
                maxWidth: "500px",
                width: "max(300px,70vw)",
              }}
              placeholder="Search..."
              name="search"
              id="search"
            />
          </Box>
          <Select
            sx={{ padding: "0", marginLeft: "10px", width: "200px" }}
            size={"small"}
            MenuProps={{ PaperProps: { style: { width: 200 } } }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbar;
