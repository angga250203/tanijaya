import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { accordiondata } from "./dataaccordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        {accordiondata.map(({value,soal,jawaban}) => (
             <AccordionItem value={value} key={value}>
             <AccordionTrigger className="">{soal}</AccordionTrigger>
             <AccordionContent>
               {jawaban}
             </AccordionContent>
           </AccordionItem>
        ))}
       
      
        
      </Accordion>
    )
  }
  