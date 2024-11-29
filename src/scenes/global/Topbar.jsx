import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Handles 11th-13th
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const formatDate = (date) => {
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const year = date.getFullYear();
    const ordinalSuffix = getOrdinalSuffix(day);
    return `${weekday}, ${day}${ordinalSuffix} ${month} ${year}`;
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>

      {/* CURRENT DATE & TIME */}
      <Box display="flex" alignItems="center">
        <Typography variant="h4" color={colors.grey[100]} sx={{ mr: 2 }}>
          {formatDate(dateTime)}
        </Typography>
        <Typography variant="h4" color={colors.grey[100]}>
          {formatTime(dateTime)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Topbar;
