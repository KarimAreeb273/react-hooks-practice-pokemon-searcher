import React from "react";

function Search({search, setSearch}) {
  function handleChange (e) {
    setSearch(search = e.target.value);
    console.log(search);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange = {handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
