
import AccordionWrapper from './AccordionWrapper'; 
import AccordionItem from './AccordionItem';

function Accordion() {

  const data = [
    {
      "title": "Item 1",
      "description": `1. salom 

      2.alik` 
    },
    {
      "title": "Item 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
    },
    {
      "title": "Item 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
    },
    {
      "title": "Item 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    }
  ];

  return (
    <div className="App">
      <div className="content">
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>
      </div>
     
    </div>
  );
}

export default Accordion;