import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function VehicleCleaning() {
  const content = [
    {
      heading: "Cars, Caravans & Boats Cleaning",
      paragraphs: [
        "To clean Cars, Caravans & Boats, the Astra professional team uses a similar process to that of carpet cleaning. Your Cars, Caravans & Boats will be left clean, soft and ready to use once more. The results will amaze you!",
        "To begin, the Astra team can do a pre-vacuum of the floors, seats or beds. Then, unlike other cleaning companies, Astra will do a pre-stain treatment of the whole floor, seats or beds first, rather than just a spot clean."
      ]
    },
    {
      heading: "Our Cleaning Process",
      paragraphs: [
        "After the stain treatment, the floors, seats or beds are given a thorough Deep Steam Clean (NOT just hot water!) using our state of the art machines. Our smaller wands are used to ensure the utmost care is taken when cleaning.",
        "The Astra team uses our up to date products to remove lasting dirt & oils from within the seats. Your floors, seats or beds will be left free of any cleaning products and residues. It's the safest and most hygienic way to leave your items.",
        "Our final process is to Deodorise and Neutralise your floors, seats or beds to leave them with a long lasting freshness."
      ]
    },
    {
      heading: "What We Clean",
      paragraphs: [
        "The Astra Car, Caravan & Boat Cleaning will treat all Cotton, Velvet, Indian Cotton, Micro Suede, Wool and many more common fabrics. We also clean all Leather Items as well! Baby Seat cleaning also available!"
      ]
    }
  ];

  const process = [
    { title: "Pre-Vacuum", description: "Thorough vacuuming of all surfaces" },
    { title: "Pre-Treatment", description: "Complete stain treatment, not just spot cleaning" },
    { title: "Deep Steam Clean", description: "Professional steam cleaning with specialized tools" },
    { title: "Deodorize", description: "Neutralize and deodorize for lasting freshness" },
    { title: "Optional Protection", description: "Fabric protection available" }
  ];

  const features = [
    "Cars & Caravans",
    "Boats & Marine",
    "Baby Seats",
    "Leather Cleaning",
    "All Fabric Types",
    "Mobile Service"
  ];

  return (
    <ServiceBlog
      title="Car, Caravan & Boat Cleaning Brisbane"
      subtitle="Professional Vehicle Interior Cleaning - Mobile Service Available"
      heroImage="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Clean Your Vehicle Today", description: "Professional interior cleaning for all vehicles" }}
    />
  );
}

export default VehicleCleaning;
