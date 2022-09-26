import { useState, useContext, useRef } from "react";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../../context/AccountProvider.js";
import Footer from "./Footer.jsx";

//components
// import Message from "./Message";
// import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledFooter = styled(Box)`
  height: 55px;
  background: #ededed;
  // position: absolute;
  width: 100%;
  // bottom: 0
`;

const Component = styled(Box)`
  height: 79vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, conversation }) => {
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [value, setValue] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const scrollRef = useRef();

  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);

  return (
    <Wrapper>
      <Component>
        {/*{messages.length > 0 &&
          messages?.map((message) => (
            <Container ref={scrollRef}>
              <Message message={message} />
            </Container>
          ))}*/}
      </Component>
      <Footer />
    </Wrapper>
  );
};

export default Messages;
