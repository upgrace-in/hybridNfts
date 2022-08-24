import React from "react";
import { useMediaQuery } from "react-responsive";

const CommonLeftText = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div>
      <div style={isTabletOrMobile ? styles.bigTextMb : styles.bigText}>
        A different kind of NFT
      </div>
      <p style={isTabletOrMobile ? styles.mText : styles.text}>
        The HyHu Network. 3 EcoSystems - 1 NFT - 10 Utilities
      </p>
    </div>
  );
};

export default CommonLeftText;

const styles = {
  bigTextMb: {
    color: "#fff",
    fontSize: 35,
    fontFamily: "Chopsic",
    fontWeight: "400",
  },
  bigText: {
    color: "#fff",
    fontSize: 44,
    fontFamily: "Chopsic",
    fontWeight: "400",
  },
  mText: {
    color: "#fff",
    fontSize: 12.5,
    fontFamily: "Poppins",
    fontWeight: "400",
  },
  text: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Poppins",
    fontWeight: "400",
  },
};
