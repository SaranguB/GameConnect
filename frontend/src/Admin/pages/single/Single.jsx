import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import img2 from '../../assets/img2.jpg';
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={img2}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemtitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemvalue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemvalue">9291959440</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemvalue">muthupathickal house</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">country: </span>
                  <span className="itemvalue">India</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="user spending" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transaction</h1>

        <List/>
        </div>
      </div>
      single
    </div>
  )
}

export default Single