import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import React, { useContext } from "react";
import { qrCodeImage } from "../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { AccountContext } from "../context/AccountProvider";
import jwt_decode from "jwt-decode";
import { addUser } from "../service/api";

const dialogStyle = {
  height: "90%",
  marginTop: "12%",
  width: "60%",
  maxHeight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;
const QRCode = styled("img")({
  height: "264px",
  width: "264px",
  margin: "50px 0px 0px 50px",
});
const Title = styled(Typography)`
  font-weight: 300;
  font-size: 26px;
  color: #525252;
  font-family: inherit;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const handleSuccess = async (res) => {
    const decoded = await jwt_decode(res.credential);
    setAccount(decoded);
    addUser(decoded);
  };

  const handlerError = () => {};

  return (
    <Dialog open={true} keepMounted PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer:</Title>
          <StyledList>
            <ListItem>1.Open WhatsApp on your phone</ListItem>
            <ListItem>2.Tap menu Settings and select WhatsApp web</ListItem>
            <ListItem>
              3.Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt={"Qr"} />
          <Box style={{ position: "absolute", top: "50%", marginLeft: "23%" }}>
            <GoogleLogin onSuccess={handleSuccess} onError={handlerError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
