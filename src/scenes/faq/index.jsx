import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Info and Help" subtitle="Contacts and files" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Contact Info
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Royal Van der Leun<br/>
          Mail: info@royalvanderleun.com<br/>
          Phone: <a href = {`tel:${"0184413288"}`} target="blank" rel="noopener noreferrer" > 0184 413 288</a> <br/>
          Instagram: <a href="https://www.instagram.com/royalvanderleun/" target="_blank" rel="noopener noreferrer">instagram</a><br/>
          Facebook: <a href="https://www.facebook.com/bvvanderleun/?locale=nl_NL" target="_blank" rel="noopener noreferrer">facebook</a><br/>
          Website: <a href="https://www.vanderleun.nl/nl/" target="_blank" rel="noopener noreferrer">Website</a><br/>
          
          of kom langs bij Trapezium 170 in Sliedrecht!
    
         


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            FAQ and anwsers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Where can i find the closest maccie.
          </Typography>
        </AccordionDetails>

      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Manuals
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          B&R X20 series:  <a href="https://download.br-automation.com/BRP44400000000000000739501/MAX20-en_V4.20.pdf?px-hash=2b4032303175b40996c84a9473c0cd47&px-time=1727176155" target="_blank" rel="noopener noreferrer" > Manual</a><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
           Reset
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Reset device: <a href="http://localhost:3000/" rel="noopener noreferrer"> Click</a><br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
