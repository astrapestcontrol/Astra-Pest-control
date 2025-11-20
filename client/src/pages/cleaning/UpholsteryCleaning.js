import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function UpholsteryCleaning() {
  const content = [
    {
      heading: "Professional Upholstery Cleaning Brisbane",
      paragraphs: [
        "To clean upholstery/lounge suites, the Astra professional team uses a similar process to that of carpet cleaning. Your lounge suites will be left clean, soft and ready to sit on once more. The results will amaze you!",
        "To begin, the Astra team can do a pre-vacuum of the seats. Then, unlike other cleaning companies, Astra will do a pre-stain treatment of the whole seats first, rather than just a spot clean.",
        "Spot cleaning is ineffective in the sense that it often leaves the treated areas looking cleaner than the rest of the seats, creating an uneven look. A test is done on the reverse side of your upholstery to ensure no running or fading will occur on the fabric."
      ]
    },
    {
      heading: "Our Cleaning Method",
      paragraphs: [
        "After the stain treatment, the upholstery/lounge suite is given a thorough Deep Steam Clean (NOT just hot water!). Astra have a special upholstery tool – these smaller wands are used to clean lounge suites to ensure the utmost care is taken when cleaning your furniture.",
        "Our state of the art upholstery tool ensures we can't over wet your fabric. The tool is designed in such a way that there is no over spray of steam, ensuring all excess water is sucked up into the machine.",
        "The Astra team uses our up to date products to remove lasting dirt & oils from within the seats. Your seats will be left free of any cleaning products and residues. It's the safest and most hygienic way to leave your upholstery/lounge suites."
      ]
    }
  ];

  const process = [
    { title: "Pre-Vacuum", description: "Thorough vacuuming of all upholstered surfaces" },
    { title: "Fabric Test", description: "Test on reverse side to ensure no color running or fading" },
    { title: "Pre-Treatment", description: "Complete stain treatment of entire surface, not just spots" },
    { title: "Deep Steam Clean", description: "Specialized upholstery tools prevent over-wetting" },
    { title: "Deodorize", description: "Final deodorizing for long-lasting freshness" }
  ];

  const features = [
    "Specialized Upholstery Tools",
    "No Over-Wetting",
    "All Fabric Types",
    "Leather Cleaning Available",
    "Fabric Protection Available",
    "Same Day Service"
  ];

  return (
    <ServiceBlog
      title="Upholstery Cleaning Brisbane"
      subtitle="Professional Couch & Sofa Cleaning - Expert Care for Your Furniture"
      heroImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Refresh Your Furniture Today", description: "Professional upholstery cleaning with amazing results" }}
    />
  );
}

export default UpholsteryCleaning;
