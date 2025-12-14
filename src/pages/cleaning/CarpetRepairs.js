import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function CarpetRepairs() {
  const content = [
    {
      heading: "Professional Carpet & Upholstery Repairs",
      paragraphs: [
        "Astra has the experience of one of the most respected carpet cleaning company in Brisbane. We have been in and around the carpet cleaning and carpet repairing business for over 20 years.",
        "We can help and save you money by repairing carpet instead of replacing it. We are able to do Retufting, Depilling, Restretching, Installation, Fabric Pest Damage, Tip Shearing, Fluorescent stair nosing & Door trims."
      ]
    },
    {
      heading: "Our Repair Services",
      paragraphs: [
        "Open all hours Monday to Saturday, free quotes and all work guaranteed. So if you need some advice or a carpet repair done just give the Astra team a call today."
      ],
      list: [
        "Retufting - Repair damaged carpet fibres",
        "Depilling - Remove carpet pills and restore appearance",
        "Restretching - Fix wrinkles and bumps",
        "Installation - Professional carpet laying",
        "Fabric Pest Damage - Repair moth and pest damage",
        "Tip Shearing - Restore carpet pile",
        "Fluorescent Stair Nosing - Safety installations",
        "Door Trims - Professional finishing"
      ]
    }
  ];

  const process = [
    { title: "Assessment", description: "Free quote and damage evaluation" },
    { title: "Recommendation", description: "Expert advice on repair vs replacement" },
    { title: "Professional Repair", description: "Skilled technicians perform repairs" },
    { title: "Quality Check", description: "Ensure perfect results" },
    { title: "Guarantee", description: "All work fully guaranteed" }
  ];

  const features = [
    "20+ Years Experience",
    "Free Quotes",
    "All Work Guaranteed",
    "Save Money vs Replacement",
    "Monday to Saturday",
    "Expert Advice"
  ];

  return (
    <ServiceBlog
      title="Carpet Repairs – Upholstery Repairs"
      subtitle="Professional Invisible Mending - Save Money, Don't Replace"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Need Carpet Repairs?", description: "Get a free quote today - all work guaranteed" }}
    />
  );
}

export default CarpetRepairs;
