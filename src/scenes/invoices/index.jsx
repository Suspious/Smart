import { Box, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";

const LiquidTanks = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  // State for the first tank's water level
  const [waterLevel, setWaterLevel] = useState(87); 
  const [isPumpingWater, setIsPumpingWater] = useState(false); 

  // State for the second tank's liquid level
  const [tankLevel, setTankLevel] = useState(65); 
  const [isPumpingTank, setIsPumpingTank] = useState(false);

  // Effect to decrease water level when pumping
  useEffect(() => {
    let waterInterval;
    if (isPumpingWater && waterLevel > 0) {
      waterInterval = setInterval(() => {
        setWaterLevel((prevLevel) => Math.max(prevLevel - 0.1, 0));
      }, 100);
    }
    return () => clearInterval(waterInterval);
  }, [isPumpingWater, waterLevel]);

  // Effect to decrease tank level when pumping
  useEffect(() => {
    let tankInterval;
    if (isPumpingTank && tankLevel > 0) {
      tankInterval = setInterval(() => {
        setTankLevel((prevLevel) => Math.max(prevLevel - 0.1, 0));
      }, 100);
    }
    return () => clearInterval(tankInterval);
  }, [isPumpingTank, tankLevel]);

  return (
    <Box m="20px">
      <Header title="Tanks" subtitle="All liquid holding tanks" />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="flex-end"
      >
        {/* First Tank Box */}
        <Box
          height={500} 
          width={300} 
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          border="1px solid"
          borderColor={colors.grey[300]}
          borderRadius="8px"
        >
          <Box
            bgcolor={"darkBlue"} 
            color={"White"}
            height={`${waterLevel}%`} 
            width="100%"
            borderRadius="8px" 
            boxShadow={3} 
            textAlign="center" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            Water Level: {waterLevel.toFixed(2)}%
          </Box>
        </Box>

        {/* Second Tank Box */}
        <Box
          height={500} 
          width={300} 
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          border="1px solid"
          borderColor={colors.grey[300]}
          borderRadius="8px"
        >
          <Box
            bgcolor={"darkGreen"} 
            color={"White"}
            height={`${tankLevel}%`} 
            width="100%"
            borderRadius="8px" 
            boxShadow={3} 
            textAlign="center" 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
          >
            Fuel Level: {tankLevel.toFixed(2)}%
          </Box>
        </Box>
      </Box>

      {/* Buttons outside the tanks */}
      <Box display="flex" justifyContent="space-evenly" mt="20px">
        <Button 
          color={isPumpingWater ? "error" : "primary"} 
          variant="contained" 
          onClick={() => setIsPumpingWater((prev) => !prev)}
        >
          {isPumpingWater ? "Stop Pump (Water Tank)" : "Run Pump (Water Tank)"}
        </Button>
        
        <Button 
          color={isPumpingTank ? "error" : "primary"} 
          variant="contained" 
          onClick={() => setIsPumpingTank((prev) => !prev)}
        >
          {isPumpingTank ? "Stop Pump (Fuel Tank)" : "Run Pump (Fuel Tank)"}
        </Button>
      </Box>
    </Box>
  );
};

export default LiquidTanks;
