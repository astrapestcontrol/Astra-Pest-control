import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function LeatherCleaning() {
  const content = [
    {
      heading: "Professional Leather Seat Cleaning",
      paragraphs: [
        "At Astra Pest Control we use the most thorough and effective cleaning techniques for everything we clean, including leather.",
        "To maintain the looks and ensure the durability of your leather products, they should be regularly cleaned and conditioned. This is particularly true for high cost, high value items such as leather furniture, which should be professionally cleaned at least once every 12 months."
      ]
    },
    {
      heading: "The Astra Way",
      paragraphs: [
        "Some companies use electric spinning brushes to clean leather. But we at Astra feels that this can result in damage to the surface of the leather: particularly if the spinning brushes are left in contact with the surface for too long. Therefore, we use purely manual methods.",
        "We carry out a routine pre-vacuum of the leather item and then massage the leather cleaning solution into the leather with a soft brush, thus ensuring that the solution penetrates into all of the creases and lines in the leather.",
        "Next, we massage the leather surface with white towels to absorb the cleaning solution, before giving a final massage with another white towel to buff the leather."
      ]
    },
    {
      heading: "Long-Term Protection",
      paragraphs: [
        "The cleaning solution that Astra uses is also a conditioner, which helps to keep the leather soft and to prevent cracking over time. To give you the Astra ultra solution, we can apply a second coat and leave part of solution/conditioner in the leather for long-term protection."
      ]
    }
  ];

  const process = [
    { title: "Pre-Vacuum", description: "Thorough vacuuming of leather surfaces" },
    { title: "Apply Solution", description: "Massage cleaning solution with soft brush into all creases" },
    { title: "Absorb & Clean", description: "Use white towels to absorb solution and lift dirt" },
    { title: "Buff & Polish", description: "Final buffing for smooth, clean finish" },
    { title: "Condition", description: "Apply conditioner to prevent cracking and maintain softness" }
  ];

  const features = [
    "Manual Cleaning Method",
    "No Spinning Brushes",
    "Conditioning Included",
    "Prevents Cracking",
    "Long-Term Protection",
    "Professional Care"
  ];

  return (
    <ServiceBlog
      title="Leather Seat Cleaning Brisbane"
      subtitle="Expert Leather Care - Manual Cleaning & Conditioning"
      heroImage="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Protect Your Leather Investment", description: "Professional leather cleaning and conditioning" }}
    />
  );
}

export default LeatherCleaning;
