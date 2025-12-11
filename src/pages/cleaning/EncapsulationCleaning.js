import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function EncapsulationCleaning() {
  const content = [
    {
      heading: "What is Encapsulation?",
      paragraphs: [
        "Encapsulation is a carpet and upholstery cleaning process that uses new cleaning products that wraps up or encapsulates the soil and detergent residue, allowing for it to be easily removed by dry vacuuming.",
        "At Astra carpet cleaning in Brisbane the machine we use is the Truvox Orbis. For encapsulation cleaning to be effective, the technician doing the clean should be experienced in this type of cleaning process. With this Carpet dry cleaning method, the carpets are walk on dry."
      ]
    },
    {
      heading: "Benefits of ENCAP Cleaning",
      paragraphs: [
        "The greenest carpet cleaning method available, gives great results, competitively priced, and fast drying."
      ],
      list: [
        "Environmentally friendly cleaning method",
        "Excellent cleaning results",
        "Competitive pricing",
        "Fast drying - walk on dry",
        "Ideal for commercial spaces",
        "Perfect for woolen carpets"
      ]
    },
    {
      heading: "Applications",
      paragraphs: [
        "This type of cleaning is extremely effective when done by one of our professional cleaners. It can be used on residential and commercial carpets, upholstery or rugs; and on car seats.",
        "If you have a lounge suit that states that it is not to be steam cleaned or cleaned using a hot water extraction method, then this cleaning process is the one for you. This is an ideal method for cleaning the natural fibres in woolen carpets.",
        "Encapsulation cleaning is used in hotels, restaurants, motels and function rooms."
      ]
    }
  ];

  const process = [
    { title: "Dry Vacuum", description: "Remove 85% of dry soil with initial vacuum" },
    { title: "Treat Stains", description: "Apply spotters to stubborn stains" },
    { title: "Apply Solution", description: "Cleaning solution encapsulates soil and residue" },
    { title: "Rotary Scrubber", description: "Machine works solution into fibres" },
    { title: "Final Vacuum", description: "Remove encapsulated soil - walk on dry" }
  ];

  const features = [
    "Walk-On Dry",
    "Eco-Friendly",
    "No Residual Smells",
    "Ideal for Wool",
    "Commercial Use",
    "Fast Results"
  ];

  return (
    <ServiceBlog
      title="Encapsulation Low Moisture Cleaning"
      subtitle="The Greenest Carpet Cleaning Method - Walk-On Dry Results"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Try ENCAP Cleaning Today", description: "Fast, eco-friendly, and effective cleaning" }}
    />
  );
}

export default EncapsulationCleaning;
