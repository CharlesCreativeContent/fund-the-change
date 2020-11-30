import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router";
import OrgCard from "../OrganizationCard/OrgCard";
import "./OrganizationSearch.css";

const OrganizationSearch = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const searchInput = url.split("/")[2];

  console.log("you searched for: ", searchInput);

  const [searches, setSearch] = useState([]);

  // when the page loads up, this function will run
  useEffect(() => {
    fetch("/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: searchInput,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setSearch(data.organizations);
      });
  }, []);

  console.log(searches);

  return (
    <div className="">
      <h1>Organization Search</h1>
      <p>you searched for ... {searchInput}</p>
      <div className="searchResults">
        {searches.map((search, index) => {
          return <OrgCard props={searches[index]} key={index} />;
        })}
      </div>
    </div>
  );
};

export default OrganizationSearch;
