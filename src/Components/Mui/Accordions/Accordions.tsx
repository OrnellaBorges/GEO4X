import { useEffect, useState, useRef, SyntheticEvent } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { accordionData } from "../../../api/accordionData";

export default function Accordions() {
  //States
  const [expandedPanels, setExpandedPanels] = useState<number[]>([]);
  const [availableHeight, setAvailableHeight] = useState<number>(0);
  const [detailsHeights, setDetailsHeights] = useState<number[]>([]);
  const [accordsHeights, setAccordsHeights] = useState<number[]>([]);
  const [countBigPanels, setCountBigPanels] = useState<number>(0);
  //refs
  const accordContainerRef = useRef<HTMLDivElement | null>(null);
  const accordsRefs = useRef<(HTMLElement | null)[]>([]);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateExpandedPanels = (panelIndex: number) => {
    if (expandedPanels.includes(panelIndex)) {
      setExpandedPanels((prevExpanded) =>
        prevExpanded.filter((panel) => panel !== panelIndex)
      );
    } else {
      setExpandedPanels((prevExpanded) => [...prevExpanded, panelIndex]);
    }
  };

  const updateAvailableHeight = (panelIndex: number, newExpanded: boolean) => {
    const detailHeight = detailsHeights[panelIndex];
    if (detailHeight < availableHeight) {
      if (newExpanded) {
        setAvailableHeight((prevValue) => prevValue - detailHeight);
      } else {
        setAvailableHeight((prevValue) => prevValue + detailHeight);
      }
    }
  };

  const limitExpanded = (accordIndex: number, newExpanded: boolean) => {
    const detailHeight = detailsHeights[accordIndex];
    if (detailHeight > availableHeight) {
      if (newExpanded) setCountBigPanels((prevCount) => prevCount + 1);
      else setCountBigPanels((prevCount) => prevCount - 1);
    }
  };

  const handleChange = (panelIndex: number, newExpanded: boolean) => {
    updateExpandedPanels(panelIndex);
    updateAvailableHeight(panelIndex, newExpanded);
    limitExpanded(panelIndex, newExpanded);
  };

  useEffect(() => {
    const accordsHeights = accordsRefs.current.map(
      (ref) => ref?.offsetHeight || 0
    );
    setAccordsHeights(accordsHeights);

    const sumOfAccordsHeightsClosed = accordsHeights.reduce(
      (acc, currentHeight) => acc + currentHeight,
      0
    );
    setAvailableHeight(window.innerHeight - sumOfAccordsHeightsClosed);

    const heightDetails = detailsRefs.current.map(
      (ref) => ref?.scrollHeight || 0
    );
    setDetailsHeights(heightDetails);
  }, []);

  return (
    <div
      className="accordionContainer"
      style={{ height: "100vh", maxWidth: "300px" }}
      ref={accordContainerRef}
    >
      {accordionData.map((accordion, accordIndex) => (
        <Accordion
          ref={(el) =>
            (accordsRefs.current[accordIndex] = el as HTMLDivElement)
          }
          key={`${accordion.summary}-${accordIndex}`}
          disableGutters
          onChange={(e: SyntheticEvent, newExpanded: boolean) =>
            handleChange(accordIndex, newExpanded)
          }
          sx={{ boxShadow: "none", fontWeight: 500 }}
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
            sx={{
              maxHeight: countBigPanels
                ? availableHeight / countBigPanels
                : "none",
              overflow: "auto",
            }}
          >
            {accordion.titleTable}
            {accordion.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
