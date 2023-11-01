import { React, useState } from "react";
import Api from "../helper/api";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("searching for", searchTerm);
      let api = new Api();
      api.getSynonyms(searchTerm).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
