import React, { useMemo } from "react";
import logo from "../assets/mainBG.png";
import { useMediaQuery } from "react-responsive";

const MainContentBG = ({ children, displayFlex = false }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const logoStyle = useMemo(() => {
    if (isTabletOrMobile && displayFlex) {
      return styles.mobileLogo;
    } else {
      return styles.logo;
    }
  }, [isTabletOrMobile, displayFlex]);

  return (
    <div style={logoStyle} className={displayFlex ? "mainBGFaq" : "mainBG"}>
      {children}
    </div>
  );
};

export default MainContentBG;

const styles = {
  logo: {
    backgroundImage: `url(${logo})`,
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "8%",
    paddingRight: "5%",
    alignItems: "center",
  },
  mobileLogo: {
    backgroundImage: `url(${logo})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: "8%",
    paddingRight: "5%",
    alignItems: "center",
    paddingBottom: 20,
  },
};
