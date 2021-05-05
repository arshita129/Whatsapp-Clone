import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Avatar,IconButton} from '@material-ui/core';
import SidebarChat from './SidebarChat';


function Sidebar({addNewChat}) {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or Start a new Chat" type="text"></input>
                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
