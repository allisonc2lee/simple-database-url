import React, { useState, useEffect } from "react";
import Results from "./Results";
import { StyledForm, Container } from "./Main.styles";

const Main = ({}) => {
  const [link, setLink] = useState(undefined);
  const [results, setResults] = useState([]);
  const [addedLink, setAddedLink] = useState("");
  const api = "http://localhost:8080/saved";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [addedLink, setAddedLink]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked", linkFormatter(link));
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full: link,
        short: linkFormatter(link),
      }),
    }).catch((e) => {
      console.log(e);
    });
  };

  const linkFormatter = (url) => {
    const name = url.replace(/^https?\:\/\//i, "");
    setAddedLink(name);

    return name;
  };

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit} action="short">
        <input
          type="text"
          name="link"
          placeholder="enter a link"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </StyledForm>
      <Results results={results} />
    </Container>
  );
};

export default Main;
