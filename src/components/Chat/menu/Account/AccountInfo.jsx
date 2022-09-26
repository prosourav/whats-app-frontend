import { Drawer, Typography, Box, styled } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const Header = styled(Box)`
  background:#008069;
  height:107px;
  color:#fff;
  display:flex;
  & > svg, & > p {
    margin-top:auto;
    padding:15px;
    font-weight:600
  }
`;

const Component =styled(Box)`
  height:85%;
  background:#ededed;
`;

const DrawerStyle = {
  top:17,
  left:20,
  height:'95%',
  width:'31%'
};

const AccountInfo = ({openDrawer,setOpenDrawer}) => {
  // console.log({openDrawer});

  return (
         <Drawer
            open={openDrawer}
            PaperProps={{sx:DrawerStyle}}
            onClose={()=>setOpenDrawer(false)}
            style={{zIndex:1500}}
          >
            <Header>
              <ArrowBackIcon onClick={()=>setOpenDrawer(false)}/>
              <Typography >Profile</Typography>
            </Header>  
            <Component>
              <Profile />
            </Component>
          </Drawer>
  );
};



export default AccountInfo;