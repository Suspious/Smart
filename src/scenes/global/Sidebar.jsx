import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ReactComponent as SensorsIcon } from './icon/house-chimney.svg'; // Corrected import


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? colors.text[200] : "#B7B7B7",
        fontSize: "18px", // Increased font size for menu items
      }}
      onClick={() => setSelected(title)}
      icon={<Box sx={{ fontSize: "30px" }}>{icon}</Box>} // Increased icon size
    >
      <Typography fontSize="18px">{title}</Typography> {/* Increased text size */}
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("SmartSwitch");

  return (
    <Box
      sx={{
        right: 0,
        top: 0,
        height: "100vh", // Full height of the viewport
        "& .pro-sidebar-inner": {
          background: colors.primary[300],
          width: isCollapsed ? "80px" : "300px", // Adjusted sidebar width
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "10px 35px 10px 20px !important", // More padding for spacing
        },
        "& .pro-inner-item:hover": {
          color: "#fff", // White on hover for better visibility
        },
        "& .pro-menu-item.active": {
          color: "#f36617 !important", // Active menu item color
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon style={{ fontSize: "30px" }} /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.text[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.text[100]} fontSize="24px"> {/* Increased font size */}
                  Van der Leun
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ fontSize: "50px" }} /> {/* Larger menu icon */}
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="SmartSwitch"
              to="/"
              icon={<HomeOutlinedIcon style={{ fontSize: "50px" }} />} // Larger icon
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Group overview"
              to="/team"
              icon={<SensorsIcon  />} // Larger icon
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.text[100]}
              sx={{ m: "15px 0 5px 20px" }}
              fontSize="18px" // Increased section header size
            >
              Pages
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon style={{ fontSize: "50px" }} />} // Larger icon
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Info"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon style={{ fontSize: "50px" }} />} // Larger icon
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
