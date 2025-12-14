import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function DuoCleaning() {
  const content = [
    {
      heading: "Duo Carpet Cleaning System for High Rise Apartments",
      paragraphs: [
        "Astra has a range of different services and one of our new services we offer to our customers who live in high rise apartments is our Duo Clean. This is a combination of our low moisture fusion cleaning and hot water extraction cleaning.",
        "If you live in a high rise apartment and you're sick of carpet cleaners doing a hot water extraction carpet clean and leaving the stains in the carpet and also the carpets wet for days, it's time to change to our Duo cleaning system."
      ]
    },
    {
      heading: "Our Two-Step Process",
      paragraphs: [
        "The Astra carpet cleaning professionals in Brisbane have developed a cleaning technique like no other. We first do a thorough pre vacuum of all the carpeted areas, including the edges; this is something most carpet cleaners don't do.",
        "We then do a spot clean on any stubborn stains that may be in the carpet, then we do our low moisture fusion clean. This is a cleaning process that uses specialised cleaning solutions combined with chemistry to do the cleaning.",
        "Once we have agitated the carpet fibres and removed most of the stains, we then go over the whole carpet again with the hot water extraction unit. This process will rinse the carpet thoroughly and also deodorise and sanitise as we clean."
      ]
    },
    {
      heading: "The Final Step",
      paragraphs: [
        "After the two step cleaning process has finished, we then do a final clean with a super absorbent pad that is attached to our rotary spinning machine. This will not only leave the carpet drier but will also act as a final buff over the surface of the carpet, leaving it feeling better than ever before.",
        "Because we do our low moisture fusion clean prior to the hot water extraction, the carpets are clean so less pressure is needed. This is the key factor in us not over wetting your carpets and leaving them wet for days."
      ]
    }
  ];

  const process = [
    { title: "Pre-Vacuum", description: "Thorough vacuum including edges" },
    { title: "Spot Treatment", description: "Treat stubborn stains" },
    { title: "Low Moisture Fusion", description: "Agitate and clean fibres" },
    { title: "Hot Water Extraction", description: "Low pressure rinse and sanitize" },
    { title: "Super Absorbent Buff", description: "Final dry buff for best results" }
  ];

  const features = [
    "Perfect for High Rise",
    "No Over-Wetting",
    "Fast Drying",
    "Two-Step Process",
    "Stain Removal",
    "Unique to Astra"
  ];

  return (
    <ServiceBlog
      title="Duo Carpet Cleaning System for High Rise Apartments"
      subtitle="Specialized High Rise Apartment Cleaning - No Wet Carpets"
      heroImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "High Rise Apartment?", description: "Try our exclusive Duo cleaning system" }}
    />
  );
}

export default DuoCleaning;
