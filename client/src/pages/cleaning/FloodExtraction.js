import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function FloodExtraction() {
  const content = [
    {
      heading: "24/7 Emergency Flood Water Extraction",
      paragraphs: [
        "Here at Astra Pest Control in Brisbane Queensland, our technicians are fully trained to handle any flood damage situation.",
        "Flooding can occur through many different ways, such as Washing machine overflow, Bath tub overflow, Sink overflow, Hot water system breakdown, Air conditioners, Burst water pipes, and runoff of rain or storm water & even Roof leaks.",
        "When you have wet carpets, you need to have the water extracted as soon as possible or permanent damage can be caused. No job is too hard for the Astra Carpet Restoration Flood Damage team."
      ]
    },
    {
      heading: "Our Extraction Process",
      paragraphs: [
        "The best way to extract water from carpets is to use a High Powered Truck Mounted cleaning system; this ensures the carpets dry as fast as possible. Astra then uses air movers to help the drying process.",
        "Astra also deodorises and sanitises and neutralises the affected carpets, as part of our cleaning and drying process. Because we use state of the art Truck Mounted Machines with real STEAM, we can kill the bacteria in the carpet.",
        "The faster we can get to treat a flooded carpet the better it is because if the affected area is left too long you can be left with water marks, and these types of marks can be very hard to remove from the carpet."
      ]
    }
  ];

  const process = [
    { title: "Emergency Response", description: "24/7 availability for flood emergencies" },
    { title: "Water Extraction", description: "High-powered truck-mounted system removes water" },
    { title: "Air Movers", description: "Industrial air movers speed up drying process" },
    { title: "Steam Sanitize", description: "Kill bacteria with high-temperature steam" },
    { title: "Deodorize", description: "Remove odors and neutralize affected areas" }
  ];

  const features = [
    "24/7 Emergency Service",
    "Truck Mounted Systems",
    "Fast Drying",
    "Bacteria Elimination",
    "Odor Removal",
    "Insurance Work"
  ];

  return (
    <ServiceBlog
      title="Flood Water Extraction Brisbane"
      subtitle="24/7 Emergency Carpet Restoration - Fast Response"
      heroImage="https://images.unsplash.com/photo-1547683905-f686c993aae5?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Emergency Flood Damage?", description: "Call us now for immediate assistance - 24/7 service" }}
    />
  );
}

export default FloodExtraction;
