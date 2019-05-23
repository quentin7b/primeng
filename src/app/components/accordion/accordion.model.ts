/**
 * Interface used to describe the events in Accordion component
 * See Accordion#onOpen and Accordion#onClose
 */
export interface AccordionEvent {
    originalEvent: any;
    index: number;
}
