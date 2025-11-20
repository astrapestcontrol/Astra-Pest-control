import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function CarpetCleaning() {
  const content = [
    {
      heading: "Professional Carpet Cleaning Brisbane",
      paragraphs: [
        "Professional, quality carpet cleaning service in Brisbane, Gold Coast and Sunshine Coast at the right price. We know the safest and most effective way to clean your carpet is through a Deep Steam Clean or Dry Clean.",
        "Astra Pest Control will Deep Steam or Dry Clean your Carpet to the highest standard as it is the only way to clean carpets! We take pride in our work and have worked hard to make your cleaning experience as easy and pleasant as possible.",
        "No more wet carpets for days, not with Astra! Our Truck Mounted Steam cleaning machines are the best in the business, with the latest last step injection process. We take out all of the cleaning agents used to clean your carpets/rug/upholstery."
      ]
    },
    {
      heading: "Our Carpet Cleaning Process",
      paragraphs: [
        "To begin, the Astra team can do a pre-vacuum of the carpet. Then, unlike other cleaning companies, Astra will do a pre-stain treatment of the whole carpet area rather than spot cleaning. Spot cleaning is ineffective in the sense that it often leaves the treated areas looking cleaner than the rest of the carpet, creating an uneven look.",
        "After the stain treatment, the carpet is given a thorough Deep Steam Clean (NOT just hot water!) using our state of the art machines. The Astra team uses our up to date cleaning products to remove lasting dirt from within the carpet.",
        "Our machine pressure ranges from 250-3000 psi; this varies depending on the carpet type, state and condition. Your carpets will be left free of any cleaning products and residues. It's the safest and most hygienic way to leave your carpets."
      ]
    },
    {
      heading: "Carpet Protection",
      paragraphs: [
        "Why not protect your carpets/rugs/upholstery after you have fully cleaned it by having the Astra Team apply a carpet protection to all your carpets & upholstery?",
        "There are so many different types of fabric protection these days for carpets/upholstery. We have products that can be applied after the cleaning process is completed. But now we have new products that can be applied whilst cleaning.",
        "The way it works is the product has a two-step process. As we are extracting the cleaning part of the solution, a residual part is left in the fabric and it is this that helps to protect the fabric just the same as if it was applied after the clean."
      ]
    },
    {
      heading: "Safe & Environmentally Friendly",
      paragraphs: [
        "Our processes, equipment and products have been tried and tested for premium results and customer satisfaction. We operate with state of the art truck mount & portable machines.",
        "It is recommended that your carpets & upholstery be cleaned at least every 12 months to keep them hygienically clean. Astra keeps up to date with the way the different products change from month to month, so that we can use the best products on the market in your home.",
        "We like to use environmentally friendly products as they are safe for you the customer and also for us the cleaner."
      ]
    }
  ];

  const process = [
    {
      title: "Pre-Vacuum",
      description: "Thorough vacuuming to remove loose dirt and debris from carpet fibres"
    },
    {
      title: "Pre-Treatment",
      description: "Complete stain treatment of entire carpet area, not just spot cleaning"
    },
    {
      title: "Deep Steam Clean",
      description: "Professional steam cleaning using truck-mounted machines at optimal pressure"
    },
    {
      title: "Final Rinse",
      description: "Last step injection process removes all cleaning agents and residues"
    },
    {
      title: "Deodorize & Protect",
      description: "Neutralize and deodorize carpets, optional fabric protection available"
    }
  ];

  const features = [
    "15+ Years Experience",
    "Truck Mounted Machines",
    "Fast Drying Times",
    "100% Satisfaction Guarantee",
    "Eco-Friendly Products",
    "Bond Back Guarantee",
    "Same Day Service Available"
  ];

  const cta = {
    title: "Ready for Professional Carpet Cleaning?",
    description: "Get a free quote today and experience the Astra difference"
  };

  return (
    <ServiceBlog
      title="Carpet Cleaning Brisbane"
      subtitle="Expert Cleaning & Powerful Truck Mounted Machines - Fast Drying - Quality Service"
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={cta}
    />
  );
}

export default CarpetCleaning;
