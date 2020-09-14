import React, { useState, useEffect, useRef } from "react";

const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
