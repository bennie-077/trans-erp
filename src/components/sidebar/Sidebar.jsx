import React, { useContext } from "react";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Person4Icon from "@mui/icons-material/Person4";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PlaceIcon from "@mui/icons-material/Place";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">natofleet</span>
        </Link>
      </div>
      <hr />
      <div className="centre">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">VEHICLE</p>
          <Link to="/trucks" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Trucks</span>
            </li>
          </Link>
          <li>
            <LocalShippingTwoToneIcon className="icon" />
            <span>Trips</span>
          </li>
          <li>
            <LocalGasStationIcon className="icon" />
            <span>Fuel</span>
          </li>
          <li>
            <CarRepairIcon className="icon" />
            <span>Inspection</span>
          </li>
          <li>
            <BuildIcon className="icon" />
            <span>Service</span>
          </li>
          <p className="title">ACCOUNTING</p>
          <li>
            <AccountBalanceWalletIcon className="icon" />
            <span>Income/Expense</span>
          </li>
          <li>
            <ReceiptIcon className="icon" />
            <span>Invoices</span>
          </li>
          <li>
            <AssessmentIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">MANAGE</p>
          <li>
            <InventoryIcon className="icon" />
            <span>Stock</span>
          </li>
          <li>
            <FolderIcon className="icon" />
            <span>Documents</span>
          </li>
          <li>
            <AnnouncementIcon className="icon" />
            <span>Reminders</span>
          </li>
          <li>
            <PlaceIcon className="icon" />
            <span>Location</span>
          </li>
          <p className="title">USERS</p>
          <Link to="/drivers" style={{ textDecoration: "none" }}>
            <li>
              <Person4Icon className="icon" />
              <span>Drivers</span>
            </li>
          </Link>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Customers</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person2Icon className="icon" />
              <span>Employees</span>
            </li>
          </Link>
          <p className="title">SYSTEM</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;