import React from "react";
import Card from "./Card";
const Details = ({ details }) => {
  const detailsList = {
    name: "Name",
    country: "Country",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (num) => (num / 1000).toFixed(2);

  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between dividye-y-1">
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item]} </span>
              <span>
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}{" "}
              </span>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default Details;
