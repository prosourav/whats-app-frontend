import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SubMenu = ({setOpenDrawer}) => {

  const [open,setOpen] = useState(null);
  const handleClose=()=>{};

  return (
    <>
      <MoreVertIcon onClick={(e)=>setOpen(e.currentTarget)}/>
      <Menu
        anchorEl={open}
        open={open}
        keepMounted
        onClose={()=>setOpen(null)}
        anchorOrigin={{vertical:'bottom',horizontal:'center'}}
        transformOrigin={{vertical:'top',horizontal:'right'}}
      >
        <MenuItem onClick={()=>{handleClose();setOpenDrawer(true)}}>Profile</MenuItem>

      </Menu>
    </>
  );
};

export default SubMenu;