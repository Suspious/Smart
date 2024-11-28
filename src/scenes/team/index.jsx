import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Instantiate the navigate function

  // Function to navigate to Group.jsx and pass the members of a group
  const goToGroupPage = (groupName, members) => {
    navigate("/group", {
      state: {
        groupName, // Pass the name of the group
        members, // Pass all the members belonging to this group
      },
    });
  };

  // Function to categorize members based on the first word in their name
  const categorizeMembers = (members) => {
    const categories = {};

    members.forEach((member) => {
      const firstWord = member.name.split(" ")[0]; // Get the first word of the name
      if (!categories[firstWord]) {
        categories[firstWord] = [];
      }
      categories[firstWord].push(member);
    });

    return categories;
  };

  const categorizedMembers = categorizeMembers(mockDataTeam); // Categorize members

  return (
    <Box m="20px">
      <Header title="Group overview" />

      <Grid container spacing={1} direction="column" alignItems="left" sx={{ marginTop: "40px" }}>
        {/* Iterate through each category and display a button for it */}
        {Object.keys(categorizedMembers).map((category) => (
          <Grid item key={category} sx={{ width: '100%' }}>
            <Box sx={{ backgroundColor: colors.primary[400], p: 1, textAlign: 'left' }}>

              {/* Button for the whole group */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#24292e',
                  width: '25%', // Set width to make the button shorter
                  height: '70px',
                  fontSize: '18px',
                  borderRadius: '10px', // Make the button rounder
                  border: '0.1px light gray', // Add a light grey border
                  padding: '12px 24px', // Add some padding for a nice button shape
                  mb: 1, // Add margin bottom for spacing between buttons
                  '&:hover': {
                    border: '2px solid grey', // Darken the border slightly on hover
                  }
                }}
                onClick={() => goToGroupPage(category, categorizedMembers[category])} // Navigate to group page with all members
              >
                Go to {category} Group
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
