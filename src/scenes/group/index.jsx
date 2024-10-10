import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Button,
    useTheme,
    Checkbox,
  } from "@mui/material";
  import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
  import { tokens } from "../../theme";
  import Header from "../../components/Header";
  import { useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  const Group = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [expandedId, setExpandedId] = useState(null);
    const [checkedItems, setCheckedItems] = useState({}); // State for checkboxes
    const navigate = useNavigate(); // Instantiate the navigate function
    const location = useLocation(); // Get the passed data
    const { groupName, members } = location.state || {}; // Destructure group name and members
  
    // Function to navigate to Pump.jsx and pass the member object
    const goToPumpPage = (member) => {
      navigate("/pump", {
        state: {
          member: member, // Pass the entire member object
        },
      });
    };
  
    // Function to handle checkbox changes
    const handleCheckboxChange = (id) => {
      setCheckedItems((prev) => ({
        ...prev,
        [id]: !prev[id], // Toggle checked state
      }));
    };
  
    // Function to handle navigation to Compare page
    const handleCompare = () => {
      const selectedMembers = members.filter((member) => checkedItems[member.id]);
      navigate("/compare", {
        state: {
          members: selectedMembers, // Pass the selected members
        },
      });
    };
  
    return (
      <Box m="20px">
        <Header title={`Group Overview: ${groupName}`} />
  
        <Grid container spacing={2} sx={{ marginTop: "40px" }}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Accordion
                sx={{
                  backgroundColor: "colors.gray[400]",
                  overflow: "hidden", // Prevent content from spilling out
                }}
                expanded={expandedId === member.id}
                onChange={() => setExpandedId(expandedId === member.id ? null : member.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlinedIcon />}
                  sx={{ border: "0.1px solid gray", backgroundColor: colors.primary[400], display: "flex", alignItems: "center" }}
                >
                  <Checkbox
                    checked={!!checkedItems[member.id]} // Check if this member is checked
                    onChange={() => handleCheckboxChange(member.id)} // Handle checkbox toggle
                    inputProps={{ 'aria-label': 'Checkbox for ' + member.name }}
                    sx={{
                      color: colors.grey[100], // Default color
                      '&.Mui-checked': {
                        color: colors.buttons[100], // Color when checked
                      },
                    }}
                  />
                  <Typography variant="h6" sx={{ color: colors.grey[100], flexGrow: 1 }}>
                    {member.name} (ID: {member.ID})
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: colors.primary[400] }}>
                  <Typography sx={{ color: colors.grey[100] }}>
                    <strong>Type:</strong> {member.Type}<br />
                    <strong>Status:</strong> {member.Status}<br />
                    <strong>Data:</strong> {member.Data}<br />
                  </Typography>
                  <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: colors.buttons[100] }}
  
                      onClick={() => goToPumpPage(member)} // Pass member when button is clicked
                    >
                      Go to {member.name}
                    </Button>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
        <br />
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: colors.buttons[100]}}
          onClick={handleCompare} // Call handleCompare on button click
        >
          Compare
        </Button>
      </Box>
    );
  };
  
  export default Group;
  