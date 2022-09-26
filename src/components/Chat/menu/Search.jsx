import { Box, styled } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  margin: 2px 5px;
`;
const Wrapper = styled(Box)`
  background-color: #f0f2f5;
  position: relative;
  width: 90%;
  border-radius: 4px;
`;
const InputField = styled(InputBase)`
  width: 100%;
  height: 38px;
  padding-left: 65px;
`;
const Icon = styled(Box)`
  padding: 6px 8px;
  height: 100%;
  color: #919191;
  position: absolute;
`;

const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small" />
        </Icon>
        <InputField
          placeholder="Search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
      <FilterListIcon style={{ marginLeft: "8px" }} />
    </Component>
  );
};

export default Search;
