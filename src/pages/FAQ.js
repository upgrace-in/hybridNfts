import React, { useState } from "react";
import { data } from "../utills/FaqData";
import { useMediaQuery } from "react-responsive";
import MainContentBG from "../components/MainContentBG";
import CommonLeftText from "../components/CommonLeftText";
import Cards from "../components/Cards";

const FAQ = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const [cardVisible, setCardVisible] = useState(true);
  const [dropdown, setDropDown] = useState(false);
  const [openData, setOpenData] = useState();

  const changeDisplay = (e, drop) => {
    setDropDown(drop === false ? true : !dropdown);
    setOpenData(e);
  };

  const onCrossClick = () => setCardVisible(false);

  return (
    <MainContentBG displayFlex={true}>
      <div style={styles.leftColumn}>
        <CommonLeftText />
      </div>
      {cardVisible && (
        <Cards onClick={onCrossClick} image={true} title={"FAQ"}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                style={styles.drop}
                onClick={() =>
                  changeDisplay(item, dropdown && openData.id === index)
                }
              >
                <div style={styles.titleCard}>
                  <div style={styles.title}>{item.title}</div>
                  <div style={styles.setDropDown}>
                    {dropdown && openData.id === index ? (
                      <img
                        src={require("../assets/arrowUp.png")}
                        style={styles.dropdown}
                        alt="logo-text"
                      />
                    ) : (
                      <img
                        src={require("../assets/dropdown.png")}
                        style={styles.dropdown}
                        alt="logo-text"
                      />
                    )}
                  </div>
                </div>
                {dropdown && openData.id === index && (
                  <div>
                    {item.description.map((res) => {
                      return <p style={styles.des}>{res.des}</p>;
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </Cards>
      )}
    </MainContentBG>
  );
};

export default FAQ;

const styles = {
  leftColumn: {
    // paddingTop: 10,
  },
  drop: {
    width: "100%",
    borderRadius: 4,
    border: "1px solid #CAA9F5",
    marginTop: 12,
    padding: 10,
    cursor: "pointer",
  },
  titleCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    width: "90%",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#4F4F4F",
  },
  setDropDown: {
    width: "10%",
    display: "flex",
    justifyContent: "flex-end",
  },
  dropdown: {
    height: 7,
    width: 11.5,
  },
  des: {
    marginTop: 10,
    color: "#828282",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Poppins",
  },
};
