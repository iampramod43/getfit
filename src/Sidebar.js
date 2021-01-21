import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <Avatar variant="rounded" alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1207894141469786112/TQPMhvFn_400x400.jpg" />
            </div>
            <div className="sidebar__middle">
                <h3>Menu</h3>
                <div className="sidebar__menuItems">
                    <div className="sidebar__item">
                        <EventNoteIcon />
                        <p>Track</p>
                    </div>
                    <div className="sidebar__item">
                        <RestaurantMenuIcon />
                        <p>Recipes</p>
                    </div>
                    <div className="sidebar__item">
                        <EmojiFlagsIcon />
                        <p>Your Goal</p>
                    </div>
                    <div className="sidebar__item">
                        <CalendarTodayIcon />
                        <p>History</p>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <ExitToAppIcon />
            </div>
        </div>
    )
}

export default Sidebar
