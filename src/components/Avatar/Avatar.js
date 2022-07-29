import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar_2.png";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Ismail AH" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"270px",
    height:"260px",
    objectFit:'cover',
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
