import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  AccessAlarmRounded,
  Close,
  EventRounded,
  KeyboardArrowDown,
  ListAltRounded,
  NotificationsRounded,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "../assets";
import { grey } from "@mui/material/colors";

const pages = ["Careers", "About"];
const featuresMenu = ["Todo List", "Calender", "Reminders", "Planning"];
const companyMenu = ["History", "Our Team", "Blog"];

const ResponsiveAppBar = () => {
  const [drawer, setDrawer] = useState(false);
  const [featuresMenuState, setFeaturesMenuState] = useState(null);
  const [companyMenuState, setCompanyMenuState] = useState(null);
  const [featuresMenuStateMobile, setFeaturesMenuStateMobile] = useState(false);
  const [companyMenuStateMobile, setCompanyMenuStateMobile] = useState(false);
  const featuresOpen = Boolean(featuresMenuState);
  const companyOpen = Boolean(featuresMenuState);
  const handleFeaturesClick = (e) => {
    setFeaturesMenuState(e.currentTarget);
  };
  const handleFeaturesClose = () => {
    setFeaturesMenuState(null);
  };
  const handleCompanyClick = (e) => {
    setCompanyMenuState(e.currentTarget);
  };
  const handleCompanyClose = () => {
    setCompanyMenuState(null);
  };

  const iconsloop2 = (link) => {
    if (link === "Todo List") {
      return <ListAltRounded sx={{ fill: "#726CEE" }} />;
    } else if (link === "Calender") {
      return <EventRounded sx={{ fill: "#4BB1DA" }} />;
    } else if (link === "Reminders") {
      return <NotificationsRounded sx={{ fill: "#EDD556" }} />;
    } else if (link === "Planning") {
      return <AccessAlarmRounded sx={{ fill: "#8E4CB6" }} />;
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", mb: { xs: 1, md: 0 } }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box sx={{ ml: 5, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                mt: 1.5,
                mb: 2.5,
                display: "flex",
                textTransform: "initial",
                ":hover": {
                  backgroundColor: "transparent",
                  color: grey[900],
                },
              }}
              variant="text"
              id="featuresMenuBtn"
              aria-controls={featuresOpen ? "featuresMenu" : undefined}
              aria-haspopup="true"
              aria-expanded={featuresOpen ? "true" : undefined}
              disableElevation
              onClick={handleFeaturesClick}
              endIcon={
                <KeyboardArrowDown
                  sx={{
                    transform: `rotateZ(${
                      featuresMenuState ? "-180deg" : "0deg"
                    })`,
                    transition: "transform 0.35s ease-in-out",
                  }}
                />
              }
            >
              Features
            </Button>
            {/* Menu for Features */}
            <Menu
              id="featuresMenu"
              anchorEl={featuresMenuState}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(featuresMenuState)}
              onClose={handleFeaturesClose}
              sx={{ borderRadius: 5 }}
            >
              {featuresMenu.map((link) => (
                <MenuItem
                  key={link}
                  onClick={handleFeaturesClose}
                  sx={{ padding: 0 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      textTransform: "initial",
                      justifyContent: "flex-start",
                      px: 2,
                    }}
                    startIcon={iconsloop2(link)}
                    href={`/${link.toLowerCase()}`}
                  >
                    {link}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            {/* Menu for Features */}
            <Button
              sx={{
                mt: 1.5,
                mb: 2.5,
                display: "flex",
                textTransform: "initial",
                ":hover": {
                  backgroundColor: "transparent",
                  color: grey[900],
                },
              }}
              variant="text"
              id="companyMenuBtn"
              aria-controls={companyOpen ? "companyMenu" : undefined}
              aria-haspopup="true"
              aria-expanded={companyOpen ? "true" : undefined}
              disableElevation
              onClick={handleCompanyClick}
              endIcon={
                <KeyboardArrowDown
                  sx={{
                    transform: `rotateZ(${
                      companyMenuState ? "-180deg" : "0deg"
                    })`,
                    transition: "transform 0.35s ease-in-out",
                  }}
                />
              }
            >
              Company
            </Button>
            {/* Menu for Company */}
            <Menu
              id="companyMenu"
              anchorEl={companyMenuState}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(companyMenuState)}
              onClose={handleCompanyClose}
            >
              {companyMenu.map((link) => (
                <MenuItem
                  key={link}
                  onClick={handleCompanyClose}
                  sx={{ padding: 0 }}
                >
                  <Button
                    variant="text"
                    sx={{
                      width: "100%",
                      textTransform: "initial",
                      justifyContent: "flex-start",
                      px: 2,
                    }}
                    startIcon={iconsloop2(link)}
                    href={`/${link.toLowerCase()}`}
                  >
                    {link}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
            {/* Menu for Company */}
            {pages.map((page) => (
              <Button
                key={page}
                href={`/${page.toLowerCase()}`}
                sx={{
                  mt: 1.5,
                  mb: 2.5,
                  display: "flex",
                  textTransform: "initial",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: grey[900],
                  },
                }}
                variant="text"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              sx={{
                mr: 1,
                textTransform: "initial",
                ":hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 3, textTransform: "initial" }}
            >
              Register
            </Button>
          </Box>
          {/* ------------------------------------------------ MOBILE ------------------------------------ */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                setDrawer(true);
              }}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawer}
              onClose={() => {
                setDrawer(false);
              }}
            >
              <Box sx={{ width: 250, padding: 1 }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setDrawer(false);
                    }}
                    sx={{
                      mt: 1,
                      mb: 2,
                      mr: 1,
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
                <Box>
                  <Button
                    sx={{
                      my: 2,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      textTransform: "initial",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: grey[900],
                      },
                    }}
                    variant="text"
                    onClick={() => {
                      setFeaturesMenuStateMobile(
                        featuresMenuStateMobile ? false : true
                      );
                    }}
                    endIcon={
                      <KeyboardArrowDown
                        sx={{
                          transform: `rotateZ(${
                            featuresMenuStateMobile ? "-180deg" : "0deg"
                          })`,
                          transition: "transform 0.35s ease-in-out",
                        }}
                      />
                    }
                  >
                    Features
                  </Button>
                  <Box
                    sx={{
                      overflow: "hidden",
                      height: `${featuresMenuStateMobile ? "auto" : "0px"}`,
                    }}
                  >
                    {featuresMenu.map((link) => (
                      <Button
                        key={link}
                        variant="text"
                        sx={{
                          width: "100%",
                          textTransform: "initial",
                          justifyContent: "flex-start",
                          pl: 2,
                          my: 0.5,
                        }}
                        startIcon={iconsloop2(link)}
                        href={`/${link.toLowerCase()}`}
                        onClick={() => {
                          setFeaturesMenuStateMobile(false);
                          setDrawer(false);
                        }}
                      >
                        {link}
                      </Button>
                    ))}
                  </Box>
                  <Button
                    sx={{
                      my: 2,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      textTransform: "initial",
                      ":hover": {
                        backgroundColor: "transparent",
                        color: grey[900],
                      },
                    }}
                    variant="text"
                    onClick={() => {
                      setCompanyMenuStateMobile(
                        companyMenuStateMobile ? false : true
                      );
                    }}
                    endIcon={
                      <KeyboardArrowDown
                        sx={{
                          transform: `rotateZ(${
                            companyMenuStateMobile ? "-180deg" : "0deg"
                          })`,
                          transition: "transform 0.35s ease-in-out",
                        }}
                      />
                    }
                  >
                    Company
                  </Button>
                  <Box
                    sx={{
                      overflow: "hidden",
                      height: `${companyMenuStateMobile ? "auto" : "0px"}`,
                    }}
                  >
                    {companyMenu.map((link) => (
                      <Button
                        key={link}
                        variant="text"
                        sx={{
                          width: "100%",
                          textTransform: "initial",
                          justifyContent: "flex-start",
                          pl: 2,
                          my: 0.5,
                        }}
                        href={`/${link.toLowerCase()}`}
                        onClick={() => {
                          setCompanyMenuStateMobile(false);
                          setDrawer(false);
                        }}
                      >
                        {link}
                      </Button>
                    ))}
                  </Box>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      href={`/${page.toLowerCase()}`}
                      onClick={() => {
                        setDrawer(false);
                      }}
                      sx={{
                        my: 2,
                        display: "flex",
                        textTransform: "initial",
                        justifyContent: "flex-start",
                      }}
                      variant="text"
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
