import * as React from "react";
import themeContext from "../../contexts/themeContext";

const Logo = (props) => {
    // console.log(themeContext)
    return (
        <img style={{maxWidth: "14%", margin: "auto"}} src={themeContext._currentValue.isDarkMode ? "logo-full-dark.png" : "logo-full-light.png" } alt="My Logo" />
    );
};

export default Logo;
