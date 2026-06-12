import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./FAQ.scss";

function FAQ({ data }) {
  const faqdata=data.filter(item=>item.type==="faq")
  return (
    <Box id="faq" className="faq-section">
      <SectionHeader title="Frequently Asked Questions" />

      {faqdata?.map((faq) => (
        <Accordion key={faq.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography variant="subtitle1">
              {faq.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body2">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;