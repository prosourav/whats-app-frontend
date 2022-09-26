import { Divider, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { emptyChatImage } from "../../../constants/data.js";
import { PersonContext } from "../../../context/PersonProvider.js";
import Conversation from "./Conversation/Conversation.jsx";

const Component = styled(Box)`
  background: #f8f9fa;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  marginTop: 100,
  width: 400,
});

const Title = styled(Typography)`
  font-size: 32px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const ChatScreen = () => {
  const { person } = useContext(PersonContext);

  return (
    <Component>
      {Object.keys(person).length > 0 ? (
        <Conversation />
      ) : (
        <Container>
          <Image src={emptyChatImage} alt="empty" />
          <Title>WhatsApp Web</Title>
          <SubTitle>
            Now send and receive messages without keeping your phone online.
          </SubTitle>
          <SubTitle>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.{" "}
          </SubTitle>
          <StyledDivider />
        </Container>
      )}
    </Component>
  );
};

export default ChatScreen;
