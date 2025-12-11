import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function MattressCleaning() {
  const content = [
    {
      heading: "Professional Mattress Cleaning",
      paragraphs: [
        "Our mattress cleaning removes dust mites, plus we deodorise and sanitise using our deep steam or dry cleaning methods. Special price $88.00 and cheaper if done with carpets or seats.",
        "Astra will make your mattress look and feel like new again. Most people overlook the importance of steam cleaning a mattress. Just like carpets and upholstery the mattress is made up of fibres.",
        "Within these fibres can live all sort of things, such as bedbugs, plus the dead skin from our bodies that remains in the mattress. Without a deep steam clean, you can't get it out."
      ]
    },
    {
      heading: "Why Steam Clean Your Mattress?",
      paragraphs: [
        "There are two ways of cleaning mattresses: an ultra violet light or a steam clean. Here at Astra, we prefer the steam cleaning method. With a steam clean, we get right down deep into the fibres of the mattress, extracting all the dead skin and bacteria that live there.",
        "Those that suffer from allergies, such as asthma or dust related allergies, would find the process of a deep steam clean on a mattress very beneficial.",
        "Our pre-vacuum takes out 65% of dust particulates, which can cause damage to the fibres and reducing the life of a mattress. So care and regular vacuuming is the best way to look after your mattress."
      ]
    }
  ];

  const process = [
    { title: "Inspection", description: "Check for stains and assess mattress condition" },
    { title: "Pre-Vacuum", description: "Hospital grade filters remove 65% of dust" },
    { title: "Apply Solution", description: "Cleaning solution lifts stubborn stains" },
    { title: "Deep Steam Clean", description: "Extract dead skin and bacteria from deep fibres" },
    { title: "Sanitize & Deodorize", description: "Eliminate bacteria and leave fresh" }
  ];

  const features = [
    "Dust Mite Removal",
    "Allergen Elimination",
    "Bacteria Removal",
    "Fast Drying (1-2 hours)",
    "Hospital Grade Filters",
    "Special Price $88"
  ];

  return (
    <ServiceBlog
      title="Mattress Cleaning Brisbane"
      subtitle="Deep Sanitization - Dust Mite & Allergen Removal"
      heroImage="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Sleep Healthier Tonight", description: "Professional mattress cleaning and sanitization" }}
    />
  );
}

export default MattressCleaning;
