import { createTheme } from "@material-ui/core";
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "18%",
    mobileNavbarHeight: "16%",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    logo: "./My-Portfolio/logo-full-dark.png",
    palette: {
        divider: "#fff",
        background: {
            default: "#010536",
            paper:"#70798c",
            project: "#283845"
        },
        primary: {
            main: "#70798c",
            contrastText: "#fff",
        },
        secondary: {
            main: "#70798c",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    logoColor:"#fff",
    ...baseTheme
});

const lightTheme = createTheme({
    logo: "./My-Portfolio/logo-full-light.png",
    palette: {
        divider: "#0075bc",
        background: {
            default: "#fff",
            project: "#0075bc"
        },
        primary: {
            main: "#0075bc",
            contrastText: "#000",
            paper: "#9E7777"
        },
        secondary: {
            main: "#6F4C5B",
            contrastText: "rgb(230,230,230)",
        },
        text: {
            primary: "#000",
            secondary: "rgb(30,30,30)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    backgroundSecondary: {
        bg : "#6F4C5B",
        text: "rgb(230,230,230) "
    },
    logoColor:"#6F4C5B",
    ...baseTheme
});

export { darkTheme, lightTheme };
