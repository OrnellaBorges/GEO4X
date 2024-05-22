import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { accordionData } from "../../../Api/accordionData";

export default function Accordions() {
  return (
    <>
      {accordionData.map((accordion, accordIndex) => (
        <Accordion key={`${accordion.summary}-${accordIndex}`}>
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
