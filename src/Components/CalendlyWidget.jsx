import React from "react";
import { useState } from "react";

const CalendlyWidget = () => {
  const myCalendly = [
    "https://calendly.com/alexandertsiklidis/test"
    
  ];
  const [selected, setSelected] = useState(0);

  function handleClick() {
    if (selected < 1) {
      setSelected(selected + 1);
    } else {
      setSelected(0);
    }
  }

  return (
    <div
      className="calendly-inline-widget"
      style={{ minWidth: "320px", height: "630px" }}
    >
      <button onClick={handleClick}>change</button>
      <iframe
        src={`${myCalendly[selected]}?embed_domain=${window.location.hostname}&embed_type=Inline`}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default CalendlyWidget;