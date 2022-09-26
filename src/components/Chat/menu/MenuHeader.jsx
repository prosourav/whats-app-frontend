import { Box, styled } from '@mui/system';
import React, { useContext, useState } from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import ChatIcon from '@mui/icons-material/Chat';
import SubMenu from './SubMenu';
import AccountInfo from './Account/AccountInfo';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
  height:44px;
  background-color:#ededed;
  padding:8px 16px;
  display:flex;
  align-items:center;
  
`;
const Image = styled('img')({
  height:40,
  width:40,
  borderRadius:'50%'
});

const Wrapper = styled(Box)`
  margin-left:auto;
  & > *{
    margin-left:2px;
    padding:8px;
    color:#000;
  };
`; 

const MenuHeader = () => {

  const [openDrawer,setOpenDrawer] = useState(false);
  const {account} = useContext(AccountContext);

  return (
    <>
      <Component>
        <Image src={account?.picture} alt='user' onClick={()=>setOpenDrawer(true)}/>
        <AccountInfo openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <Wrapper>
          <CachedIcon />
          <ChatIcon />
          <SubMenu setOpenDrawer={setOpenDrawer}/>
        </Wrapper>
      </Component>
    </>
  );
};

export default MenuHeader;