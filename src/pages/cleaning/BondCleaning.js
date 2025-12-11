import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function BondCleaning() {
  const content = [
    {
      heading: "Bond Cleaning Brisbane - Get Your Bond Back",
      paragraphs: [
        "Vacating a rental property? The main thing we get asked is when to have the carpets cleaned when vacating a rental property and the other big question is do we guarantee our work.",
        "The simple fast answer to this is at the very end, the carpet cleaner should be the last person in your property, so this is when all the other cleaning has been completed, such as the general bond cleaning, this includes kitchens, bathrooms, walls, windows etc.",
        "You need to make sure that the house or unit is ready for another tenant or your agent will simply hold part or your entire bond in order to fix up any problems that they are not happy with."
      ]
    },
    {
      heading: "Our Bond Back Guarantee",
      paragraphs: [
        "Our guarantee is in place for one week on all carpet cleaning for empty properties, this allows sufficient time for the agent to inspect the property and pass it off and have your bond released.",
        "The idea of using a reputable company that guarantee's their work when vacating a rental, is that it gives you peace of mind knowing that if there are any problems brought up during the inspection process you are covered and have the help there to sort out and fix any issues.",
        "Real estate agents are very fussy when it comes to hand over of keys at the end of a tenancy, so be sure to use a reputable cleaning company like Astra to help you with your cleaning needs."
      ]
    }
  ];

  const process = [
    { title: "Schedule Last", description: "Book carpet cleaning as final step after all other cleaning" },
    { title: "Pre-Vacuum", description: "Ensure carpets are empty and pre-vacuumed" },
    { title: "Deep Clean", description: "Professional steam cleaning to agent standards" },
    { title: "Final Inspection", description: "Quality check before agent inspection" },
    { title: "Guarantee Period", description: "One week guarantee for peace of mind" }
  ];

  const features = [
    "Bond Back Guarantee",
    "Real Estate Approved",
    "One Week Warranty",
    "Last Person In",
    "15+ Years Experience",
    "Fast Service"
  ];

  return (
    <ServiceBlog
      title="Bond Cleaning Brisbane"
      subtitle="End of Lease Carpet Cleaning - Bond Back Guarantee"
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Get Your Bond Back", description: "Professional bond cleaning with guarantee" }}
    />
  );
}

export default BondCleaning;
