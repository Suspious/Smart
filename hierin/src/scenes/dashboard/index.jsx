import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import LiquidTanks from "..//invoices"; // Adjust the path as necessary
import Header from "../../components/Header";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // State for water level and pumping
  const [waterLevel, setWaterLevel] = useState(75); // Starts at 75%
  const [isPumping, setIsPumping] = useState(false); // State to manage pump action

  // Effect to decrease water level when pumping
  useEffect(() => {
    let interval;
    if (isPumping && waterLevel > 0) {
      interval = setInterval(() => {
        setWaterLevel((prevLevel) => Math.max(prevLevel - 0.1, 0)); // Decrease water level
      }, 100); // Adjust speed of decrease (100ms)
    }

    return () => clearInterval(interval); // Cleanup on unmount or when isPumping changes
  }, [isPumping, waterLevel]);

  const handlePumpButtonClick = () => {
    setIsPumping((prev) => !prev); // Toggle pumping state
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SmartSwitch" subtitle="Welcome to your SmartSwitch Board!" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.grey[400]}
          display="flex"
          flexDirection="column" // Change to column to stack elements
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography variant="h6">Water Level</Typography>
          <Typography variant="h5">{waterLevel.toFixed(2)}%</Typography> {/* Display water level */}

        </Box>
        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.grey[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Other box content */}
        </Box>

        {/* Other boxes */}
      </Box>
    </Box>
  );
};

export default Dashboard;
