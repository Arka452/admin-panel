"use client";

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Cards from "./Cards";
import RightBar from "./RightBar";
import Transactions from "./Transactions";

const drawerWidth = 250;

function Sidebar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="bg-[#1A2236] text-white text-xs border-[#1A2236] border-l-0 h-full border-b-0 border-t-0 border-r-0">
      <Profile />
      <Toolbar className="border-[#1A2236]" />
      <h3 className="font-semibold ml-3">Pages</h3>
      <List>
        {["Dashboard", "Users", "Products", "Transactions"].map(
          (text, index) => (
            <ListItem key={text} >
              <ListItemButton>
                <ListItemIcon>
                  {index % 4 === 0 ? (
                    <DashboardIcon className="text-white" />
                  ) : index % 4 === 1 ? (
                    <GroupIcon className="text-white" />
                  ) : index % 4 === 2 ? (
                    <InventoryIcon className="text-white" />
                  ) : index % 4 === 3 ? (
                    <MonetizationOnIcon className="text-white" />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>

      <h3 className="font-semibold ml-3">Analytics</h3>
      <List>
        {["Revenue", "Reports", "Teams"].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {index % 3 === 0 ? (
                  <ShoppingBasketIcon className="text-white" />
                ) : index % 3 === 1 ? (
                  <AssessmentIcon className="text-white" />
                ) : index % 3 === 2 ? (
                  <GroupsIcon className="text-white" />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <h3 className="font-semibold ml-3">User</h3>
      <List>
        {["Settings", "Help"].map((text, index) => (
          <ListItem key={text} >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <SettingsIcon className=" text-white" />
                ) : (
                  <HelpIcon className=" text-white" />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon className="my-2 text-white" />
          <h3 className="font-extrabold ml-4 my-2 text-base text-white">Logout</h3>
        </ListItemIcon>
      </ListItemButton>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* code haye payin baraye navbar hast */}

      {/* navbar end */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Navbar />
        <Toolbar />
        <Cards/> 
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Sidebar;