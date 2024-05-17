import React from "react";
import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CircleIcon from "@mui/icons-material/Circle";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AnnouncementIcon from "@mui/icons-material/Announcement";

const Widget = ({ type }) => {
  let data;

  const income = 38000;
  const diff = 20;

  switch (type) {
    case "vehicle":
      data = {
        title: "VEHICLES",
        isMoney: false,
        link: "View all Vehicles",
        icon: (
          <LocalShippingIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218,165,32,0.2)",
            }}
          />
        ),
      };
      break;
    case "live":
      data = {
        title: "ON ROAD",
        isMoney: false,
        link: "View all live vehicles",
        icon: (
          <CircleIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255,0,0,0.2)",
            }}
          />
        ),
      };
      break;
    case "income":
      data = {
        title: "INCOME",
        isMoney: true,
        link: "View Income",
        icon: (
          <PaidOutlinedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "reminders":
      data = {
        title: "REMINDERS",
        isMoney: false,
        link: "View all Reminders",
        icon: (
          <AnnouncementIcon
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(255, 192, 203, 0.322)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {income}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;