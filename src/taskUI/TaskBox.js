import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TimeIcon from "../images/icons/time.svg";
import CalendarIcon from "../images/icons/calendar.svg";
import moment from 'moment';

export default function TaskBox(props){
    var dateFormat =  moment(props.date).format('LL');

    //Menu on navbar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    
    //Show edit task modal
    function show_edit_Task(){
        document.getElementsByClassName("edit_task_modal_container")[0].style.display = "flex";
                
        document.getElementById("edit_task_title").value = props.title;
        document.getElementById("edit_task_description").value = props.description;
        document.getElementById("edit_task_link").value = props.link;
        document.getElementById("edit_task_date").value = props.date;
        var dt = moment(props.time, ["h:mm A"]).format("HH:mm");
        document.getElementById("edit_task_time").value = dt;
        document.getElementById("edit_task_id").value = props.id;
    }

    function show_delete_task(){
        document.getElementsByClassName("delete_task_modal_container")[0].style.display = "flex";
        document.getElementById("id_delete_key").value = props.id;
    }

    return(
        <div className="task_box_container">
        <MoreHorizIcon sx={{float : 'right', marginRight: "5%", marginTop:"3%", color:"#ffff"}} className={"MoreHorizIcon"}  onClick={handleClick}/>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
        },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
        <MenuItem style={{display:"none"}}></MenuItem>
        <MenuItem  onClick={() => { show_edit_Task();}}>
            <ListItemIcon>
                <EditIcon fontSize="small" />
            </ListItemIcon>
            Edit Task
        </MenuItem>
        <MenuItem onClick={() => { show_delete_task();}}>
            <ListItemIcon>
                <DeleteIcon fontSize="small" />
            </ListItemIcon>
            Delete
        </MenuItem>
    </Menu>
    
        <div className="date_container">
            <img src={CalendarIcon}/>
            {dateFormat}
        </div>

        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="link"><a href={props.link} target="_blank">{props.link}</a></p>

        <div className="date_container" style={{marginTop: "0"}}>
            <img src={TimeIcon}/>
            {props.time}
        </div>
    </div>
    )
}