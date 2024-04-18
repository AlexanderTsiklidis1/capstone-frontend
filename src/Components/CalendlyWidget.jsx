import React from "react";
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

const CalendlyWidget = () => {



  const myCalendly = [
    "https://calendly.com/paul-chernick-fiyv/aceit-interview-test",
    "https://calendly.com/alexandertsiklidis/test",
    "https://calendly.com/tsiklidisa/mock-test"
  ];
  const [selected, setSelected] = useState(0);

  function handleClick() {
    setSelected((prevSelected) => (prevSelected + 1) % myCalendly.length);
  }
  

  return (
<div
  className="calendly-inline-widget"
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    minWidth: "100%",
    // maxWidth: "600px",
    margin: "0 auto",
    height: "850px"
  }}
>
  <Button onClick={handleClick} variant="contained" color="primary">
    Switch Calendar
  </Button>
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