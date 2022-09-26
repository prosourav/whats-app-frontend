import { AppBar, Toolbar, styled, Box } from '@mui/material';
import React, { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from '../components/Chat/ChatDialog';
import LoginDialog from '../components/LoginDialog';

  const Component = styled(Box)`
    height:100vh;
    background-color:#dcdcdc;
  `;

  const LoginHeader = styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;
  `;

  const Header = styled(AppBar)`
    height:80px;
    background-color:#00bfa5;
    box-shadow:none;
  `;


const Messenger = () => {

  const {account} = useContext(AccountContext);

  const ChatHeader = <Header position="static"><Toolbar> </Toolbar> </Header>;
  const LogInHeader = <LoginHeader position="static"><Toolbar> </Toolbar> </LoginHeader>;
 
  return (
    <Component>
        {account ? ChatHeader : LogInHeader}
        {account ?  <ChatDialog /> : <LoginDialog />}
    </Component>
    
  );
};

export default Messenger;