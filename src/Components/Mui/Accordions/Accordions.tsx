import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { accordionData } from "../../../Api/accordionData";

export default function AccordionV1() {
  return (
    <>
      {accordionData.map((accordion, accordIndex) => (
        <Accordion>
          <AccordionSummary
            key={`${accordion.summary}-${accordIndex}`}
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
