import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme, makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineDown } from "react-icons/ai";
import { MenuContent, NavBarLogoContent } from "../assets/NavBarMenuContent";


const themeMUI = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application!
    }
  }
});


const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    boxShadow: "none",
    width: "100vw",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      flexWrap: "wrap",
    },
  },
  menu: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("md")]: {
      flexBasis: "100%",
      justifyContent: "flex-start",
      gap: "0",
    },
    disableRipple: true
  },
  listItem: {
    opacity: "1",
    transition: "opacity 0.3s ease-in-out",
    "&:hover": {
      opacity: 0.5,
      backgroundColor: "transparent",
    },
    disableRipple: true
  },
  listItemImage: {
    "&:hover": {
      backgroundColor: "transparent",
    }
  },
  listItemText: {
    whiteSpace: "nowrap",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MuiThemeProvider theme={themeMUI}>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between m-5">
        {NavBarLogoContent.map((item) => (
          <div key={item.id}>
            <ListItem className={classes.listItemImage} button component={Link} to={item.linkTo}>
              <img className="h-20 w-60" src={item.src} alt={item.alt} />
            </ListItem>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar className={classes.toolbar}>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleNavbar}
              >
                <MenuIcon />
              </IconButton>
            )}
            {!isMobile && (
              <div>
                <div className={classes.menu}>
                  {MenuContent.map((item) => (
                    <ListItem
                      button
                      component={Link}
                      to={item.link}
                      key={item.id}
                      className={classes.listItem}
                    >
                      <ListItemText
                        primary={item.title}
                        classes={{ primary: classes.listItemText }}
                      />
                      <AiOutlineDown style={{ marginLeft: "4px" }} />
                    </ListItem>
                  ))}
                </div>
              </div>
            )}
          </Toolbar>
        </AppBar>
        {isMobile && (
          <Drawer anchor="left" open={isOpen} onClose={toggleNavbar}>
            <List>
              {MenuContent.map((item) => (
                <ListItem  className={classes.listItem} button component={Link} to={item.link} key={item.id}>
                  <ListItemText
                    primary={item.title}
                    classes={{ primary: classes.listItemText }}
                  />
                  <AiOutlineDown style={{ marginLeft: "4px" }} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </div>
    </MuiThemeProvider>
  );
};

export default Navbar;
