import React from "react";
import logo from "../assets/mainBG.png";

const ComingSoon = () => {
  return (
    <div style={styles.logo} className="mainBG">
      Coming Soon
    </div>
  );
};

export default ComingSoon;

const styles = {
  logo: {
    backgroundImage: `url(${logo})`,
    display: "flex",
    alignItems: "center",

    //coming soon
    justifyContent: "center",
    color: "#fff",
    fontSize: 38,
    fontFamily: "Poppins",
  },
};
