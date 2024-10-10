import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Button, useTheme, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { RadialGauge } from "react-canvas-gauges"; // Import RadialGauge from the library
import { tokens } from "../../theme";
import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Pump = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const location = useLocation();
    const [isPumping, setIsPumping] = useState(false);
    const [expanded, setExpanded] = useState(false); // State to manage accordion
    const [expanded2, setExpanded2] = useState(false); // State to manage accordion
    const { member } = location.state || {};

    const handleAccordionChange = () => {
        setExpanded((prev) => !prev);
            
    };
    const handleAccordionChange2 = () => {
        setExpanded2((prev) => !prev);
    };

    return (
        <Box p="20px">
            {member ? (
                <>
                    {/* Align pump info on the left and button on the right */}
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" mt={2}>
                        <Box>
                            <Typography variant="h3" sx={{ mb: 1 }}>
                                {member.name} Information
                            </Typography>
                            <Typography variant="h5">
                                <strong>Name:</strong> {member.name} <br />
                                <strong>ID:</strong> {member.ID} <br />
                                <strong>Type:</strong> {member.Type} <br />
                                <strong>Status:</strong> {member.Status} <br />
                                <strong>Data:</strong> {member.Data} <br />
                            </Typography>
                        </Box>

                        <Box>
                            <Button
                                variant="contained"
                                size="large" // Changed to valid size
                                sx={{
                                    backgroundColor: isPumping ? "Darkred" : "Darkgreen",
                                    color: 'white', // Optional: set the text color
                                    mt: 1 // Add margin-top to position the button higher
                                }}
                                onClick={() => setIsPumping((prev) => !prev)}
                            >
                                {isPumping ? `Stop ${member.name}` : `Start ${member.name}`}
                            </Button>
                        </Box>
                    </Box>

                    {/* Energy consumption text above the gauge */}
                    <Typography variant="h4" display="flex" justifyContent="center" mt={2}>
                        Energy consumption:
                    </Typography>

                    {/* RadialGauge placed below the text */}
                    <Box display="flex" justifyContent="center" alignItems="flex-end" mt={2} sx={{ height: 300 }}>
                        <RadialGauge
                            width={300}
                            height={300}
                            units="Kw"
                            
                            minValue={0} // Define the minimum value
                            maxValue={35} // Define the maximum value
                            majorTicks={["0", "5", "10", "15", "20", "25", "30", "35"]} // Major tick marks
                            minorTicks={2} // Minor tick marks between major ticks
                            value={parseFloat(member.amp).toFixed(3).replace(/^0+(?=\d)/, '')} // Remove leading zeros
                            // colorZone={[
                            //     { from: 0, to: 5, color: "green" },    // Safe range
                            //     { from: 5, to: 15, color: "Orange" },  // Caution range
                            //     { from: 15, to: 20, color: "red" }      // Danger range
                            // ]}
                            colorZone = "red"
                            colorPlate={colors.grey[600]} // Background color of the gauge
                            colorNeedle="red" // Needle color
                            colorNeedleEnd="orange"
                            colorNeedleCircleOuter="black"
                            colorMajorTicks="White" // Major tick color
                            colorMinorTicks="LightGray" // Minor tick color
                            colorUnits="orange"
                            colorOuterring="primary"
                            colorRing="primary"
                            colorNumbers="White"
                            colorBorderOuter={colors.primary[700]}
                            colorBorderInner={colors.primary[700]}
                            colorBorderCenter={colors.primary[700]}
                            highlights={[
                                { from: 0, to: 10, color: "rgba(50, 200, 50, .3)" },
                                { from: 10, to: 24, color: "rgba(250, 250, 50, .3)" },
                                { from: 24, to: 35, color: "rgba(200, 50, 50, .3)" },
                              ]}
                            needleCircleSize={15} // Size of the needle's center circle
                            animationRule="linear"
                            animationDuration={1500} // Animation duration for smooth transitions
                    
                        />
                    </Box>

                    <br />
                    <br />
                    {/* Accordion to display a list */}
                    <Accordion expanded={expanded} onChange={handleAccordionChange}
                       sx={{
                        backgroundColor: expanded ? "#323232" : "#323232", // Change to your desired background color
                        color: "white" // Change text color if needed
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                            <Typography color="orange" variant="h5">Alarms</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr>
                                            <th style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Alarm</th>
                                            <th style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Description</th>
                                            <th style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Code</th>
                                            <th style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Help</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Alarm 1</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Vuur.</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>001</td>
                                            <td style={{ border: "1px solid white", padding: "8px" }}>
                                                <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: "Orange", textDecoration: "none" }}>
                                                    Help
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Alarm 2</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Low voltage.</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>002</td>
                                            <td style={{ border: "1px solid white", padding: "8px" }}>
                                                <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: "Orange", textDecoration: "none" }}>
                                                    Help
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Alarm 3</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>High temp.</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>003</td>
                                            <td style={{ border: "1px solid white", padding: "8px" }}>
                                                <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: "Orange", textDecoration: "none" }}>
                                                    Help
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Alarm 4</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>Block.</td>
                                            <td style={{ color: "Red", border: "1px solid white", padding: "8px" }}>004</td>
                                            <td style={{ border: "1px solid white", padding: "8px" }}>
                                                <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: "Orange", textDecoration: "none" }}>
                                                    Help
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion  expanded={expanded2} onChange={handleAccordionChange2}
                       sx={{
                        backgroundColor: expanded2 ? "#323232" : "#323232", // Change to your desired background color
                        color: "white" // Change text color if needed
                    }}>
                        <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                            <Typography color="orange" variant="h5">Manuals</Typography>
                        </AccordionSummary >
                        <AccordionDetails  >
                        
                            <Typography>
                                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                    <thead>
                                        <tr>
                                            <th style={{ color: "White", border: "1px solid white", padding: "8px" }}>Description</th>
                                            <th style={{ color: "White", border: "1px solid white", padding: "8px" }}>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ color: "White", border: "1px solid white", padding: "8px" }}>{member.name} manual</td>
                                            <td style={{ border: "1px solid White", padding: "8px" }}>
                                                <a href="https://example.com" target="_blank" rel="noopener noreferrer" style={{ color: "Orange", textDecoration: "none" }}>
                                                    Click.
                                                </a>
                                            </td>
                                        </tr>   
                                    </tbody>
                                </table>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </>
            ) : (
                <Typography variant="h6">No pump data available.</Typography>
            )}
        </Box>
    );
};

export default Pump;
    