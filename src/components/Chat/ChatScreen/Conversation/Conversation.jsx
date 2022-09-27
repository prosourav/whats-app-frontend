import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import { PersonContext } from "../../../../context/PersonProvider";
import { getConverSationId } from "../../../../service/api";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const Conversation = () => {

  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

  const { person } = useContext(PersonContext);

  const [conversation,setConversationId] = useState({});


  useEffect(()=>{
    const getCoverSationDetail = async () =>{
     const converSation =  await getConverSationId({senderId:account.sub,receiverId:person.sub});
     setConversationId(converSation);
    };
    getCoverSationDetail();
  },[person.sub]);

  return (
    <div>
      <ChatHeader />
      <Messages {...{conversation}} />
    </div>
  );
};

export default Conversation;
