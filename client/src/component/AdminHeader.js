import React from 'react';
import '../css/Admindetail.css';
import { Link } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Logout from "@material-ui/icons/ExitToApp";

function AdminHeader() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/adminlogin'

    }

    return (
        <div className="Adminheader">
            <div className="Adminheader_left">
                <Link to="/AdminDashboard">
                    <div className="logo" >
                        <h2 >Ride Sharing</h2>
                    </div>
                </Link>

            </div>

            <div className="Adminheader_right">
                <div className="Adminheader_info">
                    <Avatar />

                    <Link to="/AdminDashboard">
                        <h4>Admin</h4>
                    </Link>
                </div>
                <IconButton>
                    <Link to="/Driverregister">
                        <AddIcon />
                    </Link>

                </IconButton>


                <IconButton>
                    <Link to="/Admindetail">
                        <ExpandMoreIcon />
                    </Link>
                </IconButton>

                <IconButton>
                    <Link onClick={logout}>
                        <Logout />
                    </Link>
                </IconButton>
            </div>
        </div>
    )
}


export default AdminHeader