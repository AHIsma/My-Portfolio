import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../../contexts/loaderContext";
import lottie from 'lottie-web';
import '../../sass/bg.scss'

const Background3d = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        
        if (!isLoading) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                },
            });
        } else {
            controls.start({ opacity: 0, y: -50 });
        }

        const instance = lottie.loadAnimation({
            container: document.getElementById('image'),
            renderer: 'svg',
            autoplay: true,
            path: "./workflow.json"
          });
      
        // Return clean up function here
        return () => instance.destroy();
    }, [isLoading, controls]);

    return (
        <motion.div animate={controls} className={classes.wrapper}>
            <div className={classes.container}>
            <section className="hero">
                <figure id="image"></figure>
            </section>
            </div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
    },
    iframe: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        maxWidth: "600px",
    },
    wrapper: {
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
        zIndex: -1,
    },
    hideLogo: {
        position: "absolute",
        right: 0,
        bottom: 0,
        width: "100px",
        height: "100px",
        backgroundColor: theme.palette.background.default,
    },
}));

export default Background3d;
