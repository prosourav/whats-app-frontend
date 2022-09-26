import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { PersonContext } from "../../../context/PersonProvider";
import { setConversation } from "../../../service/api";

const Component = styled(Box)`
  display: flex;
  cursor: pointer;
  height: 45px;
  padding: 13px 0px;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0px 14px",
  objectFit: "cover",
});

const SingleContact = ({ user }) => {
  const { setPerson } = useContext(PersonContext);
  const { account } = useContext(AccountContext);

  const SelectedChat = async () => {
    setPerson(user);
    await setConversation({ senderId: account?.sub, receiverId: user?.sub });
  };

  return (
    <Component onClick={SelectedChat}>
      <Box>
        <Image src={user["picture"]} alt="" />
      </Box>
      <Box>
        <Typography> {user["name"]}</Typography>
      </Box>
    </Component>
  );
};

export default SingleContact;
