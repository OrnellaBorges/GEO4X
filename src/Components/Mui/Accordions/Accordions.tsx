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
  const [expandedPanels, setExpandedPanels] = useState<number[]>([]); // Etat de stockage des index ouverts
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const [detailsHeights, setDetailsHeights] = useState<number[]>([]);

  //refs
  const accordContainerRef = useRef<HTMLDivElement | null>(null);
  const accordsRefs = useRef<(HTMLElement | null)[]>([]);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);
  console.log("detailsRefs", detailsRefs);

  //petit fonction pour colorer temporairement les accordions
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

  // fonction pour mettre a jour le state liste des expandedPanels
  const updateExpandedPanels = (panelIndex: number) => {
    console.log("coucou", panelIndex);
    // CONDITION :
    //SI index du pannel est inclu dans la liste =>> utiliser .includes() pour retirer le panel car on le referme
    if (expandedPanels.includes(panelIndex)) {
      console.warn("je retire");
      // filtrer la liste pour retirer l'index de la liste car on referme l'accordion
      setExpandedPanels((prevExpanded) =>
        prevExpanded.filter((panel) => panel !== panelIndex)
      );
    } else {
      console.warn("j'ajoute");
      // avec ça j'ajoute dans la liste des accordion ouverts "expandedPannels"
      setExpandedPanels((prevExpanded) => [...prevExpanded, panelIndex]);
    }
  };

  //fonction pour updater la hauteur dispo  =>>> a utiliser dans le handleChange

  const updateAvailableHeight = () => {
    console.log("j'ajuste la hauteur dispo");
  };

  const handleChange = (panelIndex: number, newExpanded: boolean) => {
    console.log("hello je change");

    //au changement je dois mettre a jour ce state pour connaitre lesquels sont ouvert
    updateExpandedPanels(panelIndex);

    // recuperer la hauteur des accordions ouverts

    // updateAvailableHeight();
  };

  useEffect(() => {
    console.log("UE-montage");
    console.log("screenHeight", window.innerHeight);

    const maxLimitContainer = accordContainerRef.current?.offsetHeight ?? 0; // use nullish operator to avoid undefined or null to typescript
    console.log("maxLimitContainer", maxLimitContainer);

    const accordsHeights = accordsRefs.current.map(
      (ref) => ref?.offsetHeight || 0
    );
    console.log("accordHeights", accordsHeights);
    const sumOfAccordsHeightsClosed = accordsHeights.reduce(
      (acc, currentHeight) => acc + currentHeight,
      0
    );
    console.log(
      "hauteur dispo =",
      maxLimitContainer - sumOfAccordsHeightsClosed
    );

    // mise a jour de la place dispo
    setAvailableHeight(window.innerHeight - sumOfAccordsHeightsClosed);

    // recup hauteur des details
    const heightDetails = detailsRefs.current.map(
      (ref) => ref?.scrollHeight || 0
    );
    setDetailsHeights(heightDetails);
  }, []);

  return (
    <div
      className="accordionContainer"
      style={{ height: "100vh", border: "3px solid", width: "300px" }}
      ref={accordContainerRef}
    >
      {accordionData.map((accordion, accordIndex) => (
        <Accordion
          ref={(el) =>
            (accordsRefs.current[accordIndex] = el as HTMLDivElement)
          }
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
          <AccordionDetails
            ref={(el) =>
              (detailsRefs.current[accordIndex] = el as HTMLDivElement)
            }
            sx={{ maxHeight: "200px", overflow: "scroll" }}
          >
            {accordion.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
