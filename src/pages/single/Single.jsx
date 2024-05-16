import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./Single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Details</h1>
            <div className="item">
              <img
                src="https://live.staticflickr.com/65535/49868399857_f7096b960c_b.jpg"
                alt=""
                className="imgItem"
              />
              <div className="details">
                <h1 className="itemTitle">KDB 822K</h1>
                <div className="detailItem">
                  <span className="itemKey">Trailer No:</span>
                  <span className="itemValue">ZE4434</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Model:</span>
                  <span className="itemValue">Actros 2545</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Chasis:</span>
                  <span className="itemValue">KASGT898JAKIS</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Engine No:</span>
                  <span className="itemValue">KASGT898JAKIS</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type:</span>
                  <span className="itemValue">Sub Contract</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <span className="itemValue">Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3.5 / 1} title="Truck Income Last 6 Months" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Latest Trips</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
