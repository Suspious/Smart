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
import { ReactComponent as SensorsIcon } from './icon/house-chimney.svg'; // Adjust SVG import path as needed

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? colors.text[200] : "#B7B7B7",
        fontSize: "18px", // Reduced font size for menu items
      }}
      onClick={() => setSelected(title)}
      icon={<Box sx={{ fontSize: "27px" }}>{icon}</Box>} // Smaller icon size
    >
      <Typography fontSize="18px">{title}</Typography> {/* Reduced text size */}
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
          width: isCollapsed ? "80px" : "270px", // Adjusted sidebar width
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "8px 25px 8px 15px !important", // Smaller padding for more compact spacing
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
            icon={isCollapsed ? <MenuOutlinedIcon style={{ fontSize: "27px" }} /> : undefined} // Smaller icon size
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
                <Typography variant="h5" color={colors.text[100]} fontSize="21px"> {/* Adjusted font size */}
                  Van der Leun
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ fontSize: "45px" }} /> {/* Adjusted menu icon size */}
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="SmartSwitch"
              to="/"
              icon={<HomeOutlinedIcon style={{ fontSize: "27px" }} />} // Smaller icon size
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Group overview"
              to="/team"
              icon={<SensorsIcon style={{ width: "24px", height: "24px" }} />} // Specific size for SVG icon
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.text[100]}
              sx={{ m: "15px 0 5px 20px" }}
              fontSize="18px" // Reduced section header size
            >
              Pages
            </Typography>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon style={{ fontSize: "27px" }} />} // Smaller icon size
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Info"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon style={{ fontSize: "27px" }} />} // Smaller icon size
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
