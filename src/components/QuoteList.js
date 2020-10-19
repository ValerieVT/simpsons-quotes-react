import React from "react";
import QuoteCard from "./quotecard";

const quotes = [
  {
    quote:
      "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    characterFirstName: "Homer",
    characterLastName: "Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
  },
  {
    quote: "Nothing you say can upset us. We're the MTV generation.",
    characterFirstName: "Bart",
    characterLastName: "Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
  },
  {
    quote: "That's where I saw the leprechaun...He told me to burn things.",
    characterFirstName: "Ralph",
    characterLastName: "Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
  },
  {
    quote:
      "Hello, Simpson. I'm riding the bus today because Mother hid my car keys to punish me for talking to a woman on the phone.",
    characterFirstName: "Principal",
    characterLastName: "Skinner",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460"
  }
];

const QuoteList = () => (
  <div>
    {quotes.map(item => (
      <QuoteCard 
      quote={item.quote} 
      image={item.image} 
      characterFirstName={item.characterFirstName} 
      characterLastName={item.characterLastName} 
      key={item.image} />
    ))}
  </div>
);

export default QuoteList;