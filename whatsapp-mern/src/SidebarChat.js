import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './SidebarChat.css'

function SidebarChat() {

    const [seed,setSeed]=useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random*5000));
    }, []);

    return (
        <div className="sidebar_chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar_chat_info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
