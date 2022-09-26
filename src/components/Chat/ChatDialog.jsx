import { Box, Dialog, styled } from '@mui/material';
import React from 'react';
import ChatScreen from './ChatScreen/ChatScreen';
import Menu from './menu/Menu';

const dialogStyle = {
  height:'95%',
  margin:'20px',
  width:'100%',
  maxHeight:'100%',
  maxWidth:'100%',
  boxShadow:'none',
  overflow:'hidden'
};

const Container = styled(Box)`
  display:flex;
`;
const LeftMenu = styled(Box)`
  min-width:450px;
  height:100vh;
`;
const RightMenu = styled(Box)`
  min-width:300px;
  width:73%;
  border-left:1px solid rgba(0,0,0,0.14);
  height:100vh;
`;

const ChatDialog = () => {
  return (
    <>
       <Dialog
        open={true}
        keepMounted
        PaperProps={{ sx:dialogStyle}}
      >
        <Container>
            <LeftMenu>
              <Menu />
            </LeftMenu>
            <RightMenu>
              <ChatScreen />
            </RightMenu>
        </Container>
      </Dialog>
    </>
  );
};

export default ChatDialog;