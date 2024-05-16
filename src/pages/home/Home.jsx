import React from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="vehicle" />
          <Widget type="live" />
          <Widget type="income" />
          <Widget type="reminders" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={3 / 1} title="Revenue Last 6 Months" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Trips</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
