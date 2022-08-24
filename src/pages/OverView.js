import React, { useState } from "react";
import Cards from "../components/Cards";
import CommonLeftText from "../components/CommonLeftText";
import MainContentBG from "../components/MainContentBG";
import { OverViewData } from "../utills/OverViewData";

const OverView = () => {
  const [cardVisible, setCardVisible] = useState(true);
  const onCrossClick = () => setCardVisible(false);

  return (
    <MainContentBG displayFlex={true}>
      <CommonLeftText />
      {cardVisible && (
        <Cards onClick={onCrossClick} title={"Overview"}>
          <div>
            {OverViewData.map((res) => (
              <p
                key={res.id}
                style={{
                  whiteSpace: "pre-line",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  color: "#828282",
                  fontWeight: "600",
                }}
              >
                {res.title}
              </p>
            ))}
          </div>
        </Cards>
      )}
    </MainContentBG>
  );
};

export default OverView;
