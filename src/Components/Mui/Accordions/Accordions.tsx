import { useEffect, useState, useRef } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { accordionData } from "../../../api/accordionData";

export default function Accordions() {
  //States
  const [expanded, setExpanded] = useState<number[]>([]);
  const [availableHeight, setAvailableHeight] = useState<number>(0);

  // recup refs des accordions
  const accordsRefs = useRef<(HTMLElement | null)[]>([]);
  console.log("accordsRefs", accordsRefs);

  const getBackground = (index: number) => {
    switch (index) {
      case 0:
        return "lightblue";
      case 1:
        return "green";
      case 2:
        return "yellow";
      case 3:
        return "grey";
      default:
        return "white";
    }
  };

  const handleChange = (panelIndex: number, newExpanded: boolean) => {
    console.log("hello");
    console.log("panelIndex", panelIndex, "newExpanded", newExpanded);
  };

  useEffect(() => {
    console.log("UE-montage");
    console.log("screenHeight", window.innerHeight);

    // une fois que le composant est monté le useEffect arrive en dernier
    // mettre a jour tableau accordsRefs => dois avoir une liste de hauteur en nombre de chaque hauteur d'accordion au départ

    const accordHeights = accordsRefs.current.map(
      (ref) => ref?.offsetHeight || 0
    );
    console.log("accordHeights", accordHeights);
  }, []);

  return (
    <>
      {accordionData.map((accordion, accordIndex) => (
        <Accordion
          ref={(el) => (accordsRefs.current[accordIndex] = el)}
          key={`${accordion.summary}-${accordIndex}`}
          disableGutters
          sx={{ backgroundColor: getBackground(accordIndex) }}
          onChange={(e, newExpanded) => handleChange(accordIndex, newExpanded)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {accordion.summary}
          </AccordionSummary>
          <AccordionDetails>{accordion.content}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
