import { Box, Typography, Grid, Container, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"; 

  
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // MainComponent content (directly added here)
  const shipInfo = `
    <br/>
    <br/>
    <strong>My ship:</strong><br/>
    IMO: 9612636<br/>
    General vessel type: Cargo<br/>
    MMSI: 245179000<br/>
    Call sign: PCRR<br/>
    Gross Tonnage: 19848<br/>
    Summer DWT: 6500 t<br/>
    Length Overall x Breadth Extreme: 139.4 x 44.4 m
  `;

  const contactInfo = `
    <strong>Contact info:</strong><br/>
    Van der leun<br/>
    info@royalvanderleun.com<br/>
    +31 (0)184 413 288<br/>
    <a href="https://www.vanderleun.nl/nl/" target="_blank" rel="noopener noreferrer"style="color: Lightgray;">Website</a><br/>
    <a href="https://www.instagram.com/royalvanderleun/" target="_blank" rel="noopener noreferrer"style="color: Lightgray;">instagram</a><br/>
    <a href="https://www.facebook.com/bvvanderleun/?locale=nl_NL" target="_blank" rel="noopener noreferrer"style="color: Lightgray;">facebook</a><br/>
  `;

  const locationInfo = `
    <br/>
    <strong>Location:</strong><br/>
    Position received: 2024-01-13 14:10 LT (UTC -5)<br/>
    Area: USEC - US East Coast<br/>
    Navigational Status: Moored<br/>
    Speed/Course: 0 kn / 16 °<br/>
    Reported Destination: SOUTHFORK WINDFARM
  `;

  const formatText = (text) => (
    <div dangerouslySetInnerHTML={{ __html: text }} />
  );

  // Styling for the title box and the blue strip
  

  const BoxComponent = ({ backgroundColor, children }) => (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        width: 375,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.text[100], // Set text color to white
        fontSize: '24px',
        padding: '10px',
        paddingTop: '0px',
        borderRadius: '30px',
        textAlign: 'center',
        border: '1px solid gray',
        margin: '5px',
        boxSizing: 'border-box',
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SmartSwitch" subtitle="Welcome to your SmartSwitch Board!" />
      </Box>

      {/* GRID & CHARTS */}


      <Box sx={{ minHeight: 'calc(100vh - 120px)', paddingBottom: '100px', marginTop: '20px' }}>
        <Container>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={4}>
              <BoxComponent backgroundColor={colors.primary[400]}>
                {formatText(shipInfo)}
              </BoxComponent>
            </Grid>
            <Grid item xs={12} md={4}>
              <BoxComponent backgroundColor={colors.primary[400]}>
                {formatText(locationInfo)}
              </BoxComponent>
            </Grid>
            <Grid item xs={12} md={4}>
              <BoxComponent backgroundColor={colors.primary[400]}>
                {formatText(contactInfo)}
              </BoxComponent>
            </Grid>
          </Grid>
        </Container>
      </Box>

     
    </Box>
  );
};

export default Dashboard;
