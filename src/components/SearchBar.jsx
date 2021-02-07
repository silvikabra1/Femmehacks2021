import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";

const SearchContainer = styled.div`
  width: 100%;
  resize: none;
  white-space: nowrap;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const SearchButton = styled.button`
  background-color: MediumSpringGreen;
  display: inline-block;
  text-align: center;
  font: Helvetica Neue;
  vertical-align: top;
  border: none;
  border-radius: 8px;
  margin-top: 3px;
  padding: 12px 24px;
  transition-duration: 0.4s;
`;


const SearchBar = () => {
    const history = useHistory();
    const [input, setInput] = useState("");
  
    function performRedirect() {
      if (!input || input === "") return;
      const cleanedInput = input.trim();
      history.push(`/stocks/${cleanedInput}`);
    }
  

return (
    <>
      <SearchContainer>
        <TextInput
          style={{ margin: "3px 8px", resize: "none", size: "17px", height: 40, width: "20%", borderRadius: "4px" }}
          trigger=""
          className="input"
          placeholder="Search stock ticker, i.e., AMC"
          fontSize="30px"
          onChange={(e) => setInput(e)}
          value={input}
        />
        <SearchButton className="button" onClick={performRedirect}>
          Find Stock
        </SearchButton>
      </SearchContainer>
    </>
  );
};
export default SearchBar;