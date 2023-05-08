import React, { useContext, useEffect } from "react";
import { Typography, Button } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import { useTranslation } from "react-i18next";
import loaderContext from "../../contexts/loaderContext";
import './Home.scss';

const Home = () => {
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();
    const { t } = useTranslation();

    useEffect(() => {
        if (!isLoading) {
            controls.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.1 + 1.2 },
            }));
        } else {
            controls.start({ opacity: 0, y: 5 });
        }
    }, [isLoading, controls]);

    return (
        <HomeContainer id="home">
            <div>
                <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "0px" }}
                >
                    {t("home_welcome")}
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    , {t("home_i")}
                </Typography>
                <motion.div animate={controls} custom={1}>
                    <div className="input-wrapper">
                      <input aria-label="Name" />
                      <span className="placeholder"></span>
                    </div>
                </motion.div>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={3}
                    variant="body2"
                    color="initial"
                    style={{ marginBottom: "0" }}
                >
                    {t("home_job")}
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={4}
                    variant="body1"
                    color="initial"
                    style={{ marginBottom: "30px" }}
                >
                    {t("home_location")}
                </Typography>
                <motion.div animate={controls} custom={5}>
                    <Button
                        component={Link}
                        spy
                        smooth
                        href="/My-Portfolio"
                        offset={0}
                        duration={500}
                        to="contact"
                        variant="outlined"
                        color="primary"
                        size="large"
                    >
                        {t("home_contact_btn")}
                    </Button>
                </motion.div>
            </div>
        </HomeContainer>
    );
};

export default Home;
