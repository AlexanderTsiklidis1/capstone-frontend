import React from "react";
import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

const CalendlyWidget = () => {



  const myCalendly = [
    "https://calendly.com/anthonyhuarneck/test2",
    "https://calendly.com/alexandertsiklidis/test",
    "https://calendly.com/anthonyhuarneck/interview-with-tim"
  ];
  const [selected, setSelected] = useState(0);

  function handleClick() {
    if (selected >= myCalendly.length) {
      setSelected(0);
    } else {
      setSelected(selected + 1);
    }
  }

  return (
<div
  className="calendly-inline-widget"
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: "100%",
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