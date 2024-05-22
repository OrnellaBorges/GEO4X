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

  const accordContainerRef = useRef<HTMLDivElement | null>(null);
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
    console.warn(
      "accordContainerRef",
      accordContainerRef.current?.offsetHeight
    );
  };

  useEffect(() => {
    console.log("UE-montage");
    console.log("screenHeight", window.innerHeight);

    const maxLimitContainer = accordContainerRef.current?.offsetHeight ?? 0; // use nullish operator to avoid undefined or null to typescript
    console.log("maxLimit", maxLimitContainer);

    // une fois que le composant est rendu le composant sont monté le useEffect arrive
    // mettre a jour tableau accordsRefs => dois avoir une liste de hauteur en nombre de chaque hauteur d'accordion au départ

    const accordsHeights = accordsRefs.current.map(
      (ref) => ref?.offsetHeight || 0
    );
    console.log("accordHeights", accordsHeights);
    //retourne un tableau de nombre => [48, 48, 48, 48]

    // faire la somme totale des accordions fermés
    //utiliser .reduce() prend le tableau des hauteurs
    const sumOfAccordsHeightsClosed = accordsHeights.reduce(
      (acc, currentHeight) => acc + currentHeight,
      0
    );
    console.log("sumOfAccordsHeightsClosed", sumOfAccordsHeightsClosed);

    //Calculer la hauteur disponible hauteur ecran - somme des hauteurs des accordions fermées

    console.log(
      "hauteur dispo =",
      maxLimitContainer - sumOfAccordsHeightsClosed
    );
  }, []);

  return (
    <div
      className="accordionContainer"
      style={{ height: "600px", border: "3px solid" }}
      ref={accordContainerRef}
    >
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
    </div>
  );
}
