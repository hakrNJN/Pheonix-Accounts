import React,{ useEffect, useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu
} from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import {
    AdminPanelSettings,
       AddModerator,
       LocalPolice,
       Person,
       Person2,
       Person3,
       Shield,
} from "@mui/icons-material";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { menuClasses } from '../../Utils/UtilityClasses'
import { useSelector } from "react-redux";
const groupIcons = {
  'SuperAdmin': <AdminPanelSettings />,
  'Admin': <Shield />,
  'Editor': <AddModerator />,
  'Manager': <LocalPolice />,
  'usergroup1': <Person />,
  'usergroup2': <Person2 />,
  'usergroup3': <Person3 />,
};

const GroupWithIcon = ({ group }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <Box display="flex" alignItems="center" justifyContent={'center'}>
        {groupIcons[group]}
        <Typography variant="h5" color={colors.greenAccent[200]} sx={{ ml: 1 }}>
          {group}
        </Typography>
      </Box>
    );
};
  
const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        component={<Link to={to} />}
        icon={icon}
        onClick={() => setSelected(title)}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
};
  
const MySidebar = ({menuContent}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [collapsed, setCollapsed] = React.useState(false);
    // const { collapseSidebar, collapsed, toggleSidebar } = useProSidebar();
    const [selected, setSelected] = useState("Dashboard");
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const user = useSelector((state) => state.auth.user);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  const rootStyles = {
    [`& > .${menuClasses.button}`]: {
      backgroundColor: ({ active }) => active ? colors.blueAccent[600] : undefined,
      color: ({ active }) => active ? colors.primary : colors.grey,
      fontWeight:({ active }) => active ?  "bold !important" :"normal !important",
      "&:hover": {
        backgroundColor: colors.blueAccent[600],
        color: colors.primary,
       
      },
    },
    [`.${menuClasses.subMenuContent}`]: {
      backgroundColor: theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary[900],
    },
    [`.${menuClasses.open}`]: {
      fontWeight: "bold !important",
      fontSize: "small !important",
    },
    [`.${menuClasses.label}`]: {
      // fontWeight: "normal !important",
      fontSize: "small !important"
    },
  };
  
    return (
      <Box>
        <ProSidebar collapsed={collapsed} backgroundColor={"rgb(249, 249, 249, 0.1)" }>
          {/* <BrowserRouter> */}
          <Menu iconShape="square"
          menuItemStyles=
          {{
            button: ({ level, active }) => {
              // if (level === 0) {
                return {
                  color: active ? colors.primary : colors.grey,
                  backgroundColor: active ? colors.blueAccent[700] : undefined,
                  fontWeight: "bold !important",
                  fontSize:active ?"large !important": "medium !important",
                  "&:hover": {
                    backgroundColor: colors.blueAccent[500],
                    color: colors.primary,
                 
                  },
                };
              // }
            },
          }}>
            
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuOutlined /> : undefined}
              rootStyles={{
                margin: "10px 0 20px 0",
                color: "#F5E1A2 !important",
              }}
            >
              {!collapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[200]}>
                    ANUSHREE
                  </Typography>
                  <IconButton onClick={() => setCollapsed(!collapsed)}>
                    <MenuOutlined />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {!collapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={'/images/DP.png'}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" ,textTransform: 'uppercase'}}
                  >
                    {user.name.toUpperCase()}
                  </Typography>
                  <GroupWithIcon group={user.permissions.group} />
                </Box>
              </Box>
            )}
            <Box sx={{ maxHeight: collapsed ? windowHeight :windowHeight - 265 , overflow: "auto" }}>
              {menuContent.map((list, index) => {
                switch (list.type) {
                  case "text":
                    return (
                      <Typography
                        key={list.id}
                        variant="h6"
                        // color={colors.grey[300]}
                        sx={{ m: "15px 0 5px 20px" }}
                      >
                        {list.label}
                      </Typography>
                    );
                  case "divider":
                    return <Divider key={list.id} />;
                  case "submenu":
                    return (
                      <SubMenu key={list.id} label={list.label} icon={list.icon}
                        rootStyles={rootStyles}>
                        {list.children.map((child) => (
                          <Item
                            key={child.id}
                            title={child.label}
                            to={child.link}
                            icon={child.icon}
                            selected={selected}
                            setSelected={setSelected}
                          />
                        ))}
                      </SubMenu>
                    );
                  default:
                    return (
                      <Item
                        key={list.id}
                        title={list.label}
                        to={list.link}
                        icon={list.icon}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    );
                }
              })}
            </Box>
          </Menu>
          {/* </BrowserRouter> */}
        </ProSidebar>
      </Box>
    );
  };
  
  export default MySidebar;
  
  
  