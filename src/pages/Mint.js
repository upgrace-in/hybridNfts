import { mintData, mintTopList } from "../utills/MintList";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Mint = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    console.log(checked);
    setChecked(e.target.checked);
  };
  return (
    <div style={isTabletOrMobile ? styles.mobileContainer : styles.container}>
      <div style={isTabletOrMobile ? styles.mobileLeft : styles.left}>
        <div style={styles.text1}>
          Mint Date -<span style={styles.topText}>29th August 2022</span>
        </div>
        {mintTopList.map((res, index) => (
          <div
            style={isTabletOrMobile ? styles.mobileTopList : styles.topList}
            key={index}
          >
            {res.title}
          </div>
        ))}
        <div style={isTabletOrMobile ? styles.mobileChance : styles.chance}>
          Your chance to own a piece of the extraordinary
        </div>
        <div style={styles.hyhu}>The HyHu Network</div>
        <div style={styles.hybridSmall}>
          {`Creating the largest Network of web3 pay2play Ecosystems with a single
          $HyHu token and a central NFT benefiting from all public interaction.
          HyHu Public Raffles | HyHu Poker Tables | HyHu {undisclosed}`}
        </div>
        <div style={styles.hybrid}>Hybrid Humans NFT</div>
        <div style={isTabletOrMobile ? styles.mobileList : styles.list}>
          <ul>
            {mintData.map((res, index) => (
              <li style={{ paddingTop: "1vh" }} key={index}>
                {res.title}
              </li>
            ))}
          </ul>
        </div>
        <div style={isTabletOrMobile ? styles.mobileHR : styles.hr} />
        <Checkbox onChange={onChange} style={styles.Checkbox}>
          Please click on this to confirm you're a human.
        </Checkbox>
        <div id="countBox" style={{ display: 'flex' }}>
          <div id="decrease_btn" className={isTabletOrMobile ? "countdivs mint-now-mobile" : "countdivs mint-now"}>
            -
          </div>
          <div id="mint_count" className={isTabletOrMobile ? "countdivs mint-now-mobile" : "countdivs mint-now"}>
            1
          </div>
          <div id="increase_btn" className={isTabletOrMobile ? "countdivs mint-now-mobile" : "countdivs mint-now"}>
            +
          </div>
        </div>

        <div id="mint_btn" style={{display: 'none'}} className={isTabletOrMobile ? "mint-now-mobile" : "mint-now"}>
          Mint Now
        </div>
        <div id="connect_btn" className={isTabletOrMobile ? "mint-now-mobile" : "mint-now"}>
          Connect Wallet
        </div>
        {/* <div style={styles.bottomText}>
          Please click on this to confirm you're a human.
        </div> */}
      </div>
      <div style={isTabletOrMobile ? null : styles.right}>
        <img
          src={require("../assets/wolf.png")}
          style={isTabletOrMobile ? styles.mobileWolf : styles.wolf}
          alt="logo-text"
        />
      </div>
    </div>
  );
};

export default Mint;

const styles = {
  mobileContainer: {
    display: "grid",
    position: "relative",
    backgroundColor: "#000",
  },
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    backgroundColor: "#000",
  },
  left: {
    width: "60%",
    paddingLeft: "10%",
    paddingTop: 20,
    zIndex: 3,
  },
  mobileLeft: {
    width: "100vw",
    paddingLeft: "5%",
    paddingTop: 20,
    overflowY: "scroll !important",
    overflowX: "scroll !important",
    display: "block",
    backgroundColor: "transparent",
    zIndex: 3,
  },
  right: {
    width: "40%",
    height: "80vh",
    display: "flex",
    marginRight: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 2,
  },
  mobileRight: {
    // top: 10,
  },
  mobileWolf: {
    position: "absolute",
    right: 20,
    zIndex: 2,
    height: "50vh",
    width: "auto",
    top: "30%",
  },
  wolf: {
    // marginTop: "8%"
    height: "85%",
    width: "auto",
    borderRadius: 20,
  },
  text1: {
    color: "#A74B74",
    fontSize: 16,
    fontWeight: "600",
  },
  topText: {
    color: "#fff",
    paddingLeft: 20,
  },
  hyhu: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Poppins",
    textDecoration: "underline",
  },
  hybrid: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Poppins",
    marginTop: 10,
    textDecoration: "underline",
  },
  hybridSmall: {
    whiteSpace: "pre-line",
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins",
    paddingTop: 3,
    textDecoration: "unset",
  },
  // mobileHybrid: {
  //   color: "#fff",
  //   fontSize: 35,
  //   fontWeight: "600",
  //   fontFamily: "Poppins",
  // },
  chance: {
    color: "#A74B74",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    backgroundColor: "#210F17",
    width: "80%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 6.5,
    marginBottom: 15,
    marginTop: 15,
  },
  mobileChance: {
    color: "#A74B74",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins",
    backgroundColor: "#210F17",
    width: "95%",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 6.5,
    marginTop: 20,
    marginBottom: 20,
  },
  topList: {
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins",
    width: "80%",
    whiteSpace: "pre-line",
    paddingTop: "0.8vh",
  },
  mobileTopList: {
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins",
    width: "95%",
    whiteSpace: "pre-line",
    paddingTop: "1vh",
  },
  list: {
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins",
    marginLeft: -20,
    width: "75%",
    whiteSpace: "pre-line",
  },
  mobileList: {
    color: "#E0E0E0",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "Poppins",
    marginLeft: -20,
    width: "95%",
    whiteSpace: "pre-line",
  },
  hr: {
    width: "80%",
    marginLeft: 0,
    borderBottom: "1px solid #4F4F4F",
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
  },
  mobileHR: {
    width: "95%",
    marginLeft: 0,
    borderBottom: "1px solid #4F4F4F",
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
  },
  Checkbox: { color: "#FFFFFF", fontSize: 13.1 },
  mintNow: {
    color: "#fff",
    width: "80%",
    backgroundColor: "#5F2CA0",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13.01,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Poppins",
    marginTop: 20,
    marginBottom: 15,
    // cursor: "not-allowed",
  },
  mintNowChecked: {
    color: "#fff",
    width: "80%",
    backgroundColor: "#A74B74",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13.01,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "Poppins",
    marginTop: 20,
    marginBottom: 15,
    cursor: "pointer",
  },
  bottomText: {
    color: "#A74B74",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins",
    display: "flex",
    justifyContent: "center",
    width: "80%",
    paddingBottom: 20,
  },
};
