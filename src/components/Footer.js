import React from "react";
import { useMediaQuery } from "react-responsive";

const FooterView = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  return (
    <div style={isTabletOrMobile ? styles.footerMb : styles.footer}>
      <div style={isTabletOrMobile ? styles.mText : null}>
        2020-2022 hybridhumans All Rights Reserved.
      </div>
      <div style={styles.footerLogo}>
        <a
          href="https://opensea.io/collection/hybrid-humans-nft-official"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={require("../assets/Opensea.png")}
            style={isTabletOrMobile ? styles.mLogo : styles.logo}
            alt="logo"
          />
        </a>
        <a
          href="https://instagram.com/hybridhumans_nft"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={require("../assets/instagram.png")}
            style={isTabletOrMobile ? styles.mLogo : styles.logo}
            alt="logo"
          />
        </a>
        <a
          href="https://twitter.com/HybridHumans"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={require("../assets/twitter.png")}
            style={isTabletOrMobile ? styles.mLogo : styles.logo}
            alt="logo-text"
          />
        </a>
        <a
          href="https://discord.com/invite/Z8ywHDsprP"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={require("../assets/discord.png")}
            style={isTabletOrMobile ? styles.mLogo : styles.logo}
            alt="logo-text"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterView;

const styles = {
  logo: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  mLogo: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  footerMb: {
    width: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 20,
  },
  footer: {
    width: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 20,
  },
  footerLogo: {
    display: "flex",
  },
  mText: {
    fontSize: 11,
    color: "#F2F2F2",
    fontFamily: "Poppins",
  },
};
