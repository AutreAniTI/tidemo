import AccordionItem from "./AccordionItem";
const arr = [
    {
        summary: "text1",
        content: "A longer anser to summary"
    },
    {
        summary: "text2",
        content: "A longer anser to summary"
    },
    {
        summary: "text3",
        content: "A longer anser to summary"
    },
    {
        summary: "text4",
        content: "A longer anser to summary"
    },
]

const Accordion = () => {
    const list = arr.map((elem, index) => (
        <AccordionItem
            summary={elem.summary}
            content={elem.content}
            key={index} />
    ));

    return (
        <div
            className="accordion">
            {list}
        </div>
    );
}

export default Accordion;