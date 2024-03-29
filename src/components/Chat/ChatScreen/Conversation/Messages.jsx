import { useState, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";
import Footer from "./Footer.jsx";
import { AccountContext } from "../../../../context/AccountProvider.js";
import { PersonContext } from "../../../../context/PersonProvider.js";
import { sendMessage, fetchAllMessages } from "../../../../service/api.js";
import { useEffect } from "react";
import Message from "./Message.jsx";
import { SocketContext } from "../../../../context/SocketProvider.js";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 79vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ conversation }) => {
  const [writtenMsg, setWrittenMsg] = useState("");
  const [msgFlag, setMsgFlag] = useState(false);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState({});

  const scrollRef = useRef();

  const { account } = useContext(AccountContext);
  const { socket } = useContext (SocketContext);
  const { person } = useContext(PersonContext);

  const sendMsg = async (e) => {
    const keyPressed = e.which;
    if (keyPressed === 13) {
      let msg = {};
      if (!file) {
        msg = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation["_id"],
          type: "text",
          text: writtenMsg,
        };
      } else {
        msg = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation["_id"],
          type: "file",
          text: image,
        };
      }
      socket.current.emit('sendMessage',msg);
      await sendMessage(msg);
      setWrittenMsg("");
      setImage("");
      setFile("");
      setMsgFlag((prv) => !prv);
    }
  };

  useEffect(() => {
    // console.log('check',conversation.id);
    const fetchAllMsgs = async () => {
      const { data } = await fetchAllMessages(conversation["_id"]);
      setMessages(data);
    };
    conversation?._id && fetchAllMsgs();
  }, [msgFlag, conversation?._id, person?._id]);

  useEffect(() => {
    socket.current.on('getMessage', data => {
    setIncomingMessage({...data,createdAt: Date.now()})})
   }, []);

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
    setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({transition:"smooth"});
  },[messages])

  return (
    <Wrapper>
      <Component>
        {messages.length > 0 &&
          messages?.map((message) => (
            <Container >
              <Message  message={message} account={account} />
            </Container>
          ))}
      </Component>
      <Footer
        {...{ sendMsg, setWrittenMsg, writtenMsg, file, setFile, setImage }}
      />
    </Wrapper>
  );
};



export default Messages;
