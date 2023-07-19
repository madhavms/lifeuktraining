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
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { AiOutlineDown } from "react-icons/ai";
import { MenuContent, NavBarLogoContent } from "../assets/NavBarMenuContent";

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
    opacity: "0.9",
    [theme.breakpoints.down("md")]: {
      flexBasis: "100%",
      justifyContent: "flex-start",
      gap: "0",
    },
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
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between m-5">
        {NavBarLogoContent.map((item) => (
          <div key={item.id}>
            <ListItem button component={Link} to={item.linkTo}>
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
                <ListItem button component={Link} to={item.link} key={item.id}>
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
    </>
  );
};

export default Navbar;
