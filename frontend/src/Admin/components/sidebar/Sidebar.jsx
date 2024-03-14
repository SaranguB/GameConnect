import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <div className='sidebar' >
            <div className='top' >
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <hr />
            <div className='centre' >
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li><PersonOutlineOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                <Link to="/products" style={{textDecoration:"none"}}>

                    <li><ProductionQuantityLimitsOutlinedIcon className="icon" />
                        <span>products</span>
                    </li>
                    </Link>
                    <li><LocalShippingOutlinedIcon className="icon" />
                        <span>Deliveries</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li><QueryStatsOutlinedIcon className="icon" />
                        <span>stats</span>
                    </li>
                    <li><NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li><PsychologyOutlinedIcon className="icon" />
                        <span>logs</span>
                    </li>
                    <li><SettingsOutlinedIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li><AccountCircleOutlinedIcon className="icon" />
                        <span>profile</span>
                    </li>
                    <li><LogoutOutlinedIcon className="icon" />
                        <span>logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom' >
                <div className="colorOption"></div>
                <div className="colorOption"></div>

            </div>
        </div>

    )
}

export default Sidebar