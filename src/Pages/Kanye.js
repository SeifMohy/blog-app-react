import React from "react";
import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

const Kanye = () => {
  const [quote, setQuote] = useState("");
  const [gif, setGif] = useState([]);

  useEffect(() => {
    const kanyeResp = async () => {
      const response = await fetch("https://api.kanye.rest");
      const quote = await response.json();
      setQuote(quote);
      console.log(quote);
    };
    kanyeResp();
    const giphyResp = async () => {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=EkEdX73IFmWQe4Ax2DTZ3WXUFbhmwXsd&tag=kanye&rating=g"
      );
      const img = await response.json();
      setGif(img.data.images.original.url);
      console.log(img.images.original.url);
    };
    giphyResp();
  }, []);

  return (
    <div id="Kanye">
        <Container id="Kanye" className="m-100">
      <div>
        <img className="m-3" src={gif}></img>
      </div>
      <h3 className="">{quote.quote}</h3>
      <Navbar className="stick-bottom m-8">Bonkers Co.</Navbar>
      </Container>
    </div>
  );
};

export default Kanye;
