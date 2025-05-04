import { forwardRef } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

export const AppAccordion = forwardRef<
    HTMLDivElement,
    { value: string; trigger: string; content: string }
>(({ value, trigger, content, ...props }, ref) => (
    <AccordionItem ref={ref} value={value} {...props}>
        <AccordionTrigger className="text-base cursor-pointer">{trigger}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
));

AppAccordion.displayName = 'AppAccordion';
