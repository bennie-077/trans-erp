import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Trips</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Total trips this month</p>
        <p className="amount">124</p>
        <p className="desc">
          Latest trips processing. They may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">200</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small" />
              <div className="resultAmount">223</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Previous Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">168</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
