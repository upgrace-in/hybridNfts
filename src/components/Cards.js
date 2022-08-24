import React from "react";
import { useMediaQuery } from "react-responsive";

const Cards = ({ onClick, title, image = false, children }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <div style={isTabletOrMobile ? styles.cardForMobile : styles.card}>
      <div style={styles.top}>
        <p style={styles.faq}>{title}</p>
        {/* <img
          src={require("../assets/cross.png")}
          style={styles.cross}
          alt="logo-text"
          onClick={onClick}
        /> */}
      </div>

      {image && (
        <div style={styles.imageContainer}>
          <img
            src={require("../assets/cardImg.png")}
            style={styles.cardImg}
            alt="logo-text"
          />
        </div>
      )}

      {children}
    </div>
  );
};

export default Cards;

const styles = {
  cardForMobile: {
    backgroundColor: "#F1EBFA",
    height: "95%",
    width: 320,
    zIndex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    overflowY: "scroll",
    overflowX: "scroll",
    borderRadius: 20,
    border: "5px solid #5F2CA0",
  },
  card: {
    backgroundColor: "#F1EBFA",
    height: "95%",
    width: "30vw",
    zIndex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    overflowY: "scroll",
    overflowX: "scroll",
    borderRadius: 20,
    border: "5px solid #5F2CA0",
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
  },
  faq: {
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#333333",
  },
  cross: {
    height: 36,
    width: 36,
  },
  cardImg: {
    height: "auto",
    width: "65%",
    alignSelf: "center",
    marginBottom: 12,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
};
