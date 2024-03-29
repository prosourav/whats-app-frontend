import React, { useEffect} from "react";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import { Box, styled, InputBase } from "@mui/material";
import { uploadFile } from "../../../../service/api";

const Container = styled(Box)`
  height: 57px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;
const Footer = ({ sendMsg, setWrittenMsg, writtenMsg, file, setFile, setImage }) => {
  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setWrittenMsg(e.target.files[0].name);
  };

  useEffect(() => {
    const setFile = async () => {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      let response = await uploadFile(data);
      setImage(response.data);
    };
    file && setFile();
  }, [file]);

  return (
    <Container>
      <EmojiEmotions />
      <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
        <ClipIcon />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        multiple
        onChange={(e) => handleChange(e)}
      />

      <Search>
        <InputField
          placeholder="Type a message"
          inputProps={{ "aria-label": "search" }}
          onChange={({ target }) => setWrittenMsg(target["value"])}
          onKeyPress={(e) => sendMsg(e)}
          value={writtenMsg}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
