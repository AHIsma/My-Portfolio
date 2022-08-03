import React, { lazy } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
const MainHome = lazy(() => import("./pages/MainHome"));
const Navbar = lazy(() => import("./components/Navbar"));
const Social = lazy(() => import("./components/Social"));
const Footer = lazy(() => import("./components/Footer"));
const Loader = lazy(() => import("./components/Loader"));

const Routes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Loader />
            <Navbar />
            {!isMobile && <Social />}
            <Switch>
                <Route exact path="/My-Portfolio" component={MainHome} />   
                <Route exact path="**">
                    <Redirect to="/My-Portfolio" />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
