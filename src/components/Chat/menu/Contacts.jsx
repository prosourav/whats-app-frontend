import { Box, styled, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { getUsers } from "../../../service/api";
import SingleContact from "./SingleContact";
import { AccountContext } from "../../../context/AccountProvider.js";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

const Contacts = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers();
      const user = response?.filter((usr) =>
        usr.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(user);
    };
    fetchUsers();
  }, [text]);

  return (
    <Component>
      {users.map(
        (user, idx) =>
          user.sub !== account.sub && (
            <React.Fragment>
              <SingleContact key={idx} user={user} />
              <StyledDivider />
            </React.Fragment>
          )
      )}
    </Component>
  );
};

export default Contacts;
