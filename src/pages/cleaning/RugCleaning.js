import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function RugCleaning() {
  const content = [
    {
      heading: "Professional Rug Cleaning",
      paragraphs: [
        "When choosing a rug cleaning company make sure you choose a professional, with experience in cleaning all types of different rugs, from Persians to Orientals, wool and synthetic.",
        "A rug cleaning company with state of the art steam cleaning machines and techniques is important so you get the most out of your valuable rug for years to come."
      ]
    },
    {
      heading: "Onsite Rug Cleaning",
      paragraphs: [
        "To clean a rug on site at a customer's home requires a fully trained technician, the fibres of the rug need to be identified before applying any cleaning solutions. Fibre identification is an important process this ensures the correct cleaning product for the type of rug to be cleaned are used.",
        "A good deep vacuum with a power head vacuum cleaner is best to get deep down into the base of the rug, this will release the dust and grit before the cleaning process. Releasing the dust and grit will prolong the life of the rug.",
        "After the vacuum and steam clean is done, this will clean each fibre of the rug if done properly and make the rug feel and look clean again."
      ]
    },
    {
      heading: "Fabric Protection",
      paragraphs: [
        "Also a protective coating, called a fabric protection can be applied to the rug after the cleaning process; this will help to prevent little accidents, with spills from drinks or if a cat or dog urinates on the rug.",
        "The fabric protection will also help protect the fibres from wear and tear prolonging the life of the rug."
      ]
    }
  ];

  const process = [
    { title: "Fibre Identification", description: "Test to identify rug type and appropriate cleaning method" },
    { title: "Deep Vacuum", description: "Power head vacuum removes dust and grit from base" },
    { title: "Steam Clean", description: "Deep clean each fibre with appropriate solutions" },
    { title: "Dry Naturally", description: "Proper drying to maintain rug integrity" },
    { title: "Optional Protection", description: "Fabric protection application available" }
  ];

  const features = [
    "Persian & Oriental Rugs",
    "Wool & Synthetic",
    "Fibre Safe Methods",
    "Pickup & Delivery Available",
    "Fabric Protection",
    "Color Safe Cleaning"
  ];

  return (
    <ServiceBlog
      title="Rug Cleaning Brisbane"
      subtitle="Expert Care for Persian, Oriental & All Rug Types"
      heroImage="https://images.unsplash.com/photo-1600166898405-da9535204843?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Restore Your Valuable Rugs", description: "Professional rug cleaning with expert care" }}
    />
  );
}

export default RugCleaning;
