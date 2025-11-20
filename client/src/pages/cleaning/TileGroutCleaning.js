import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function TileGroutCleaning() {
  const content = [
    {
      heading: "Tile & Grout Cleaning & Sealing Methods",
      paragraphs: [
        "Our team at Astra Pest Control has state of the art Truck Mounted machine used to steam clean your tiles & grout. Our machine heats up to 121 degrees Celsius and our pressure ranges from 1000 psi to 3000 psi. No job is too hard for us to clean!",
        "With tile & grout cleaning in Brisbane, our technicians are carefully trained to identify the type & style of your tiles. Different tiles require different cleaning techniques & it is very important that you have a well trained technician to complete your job."
      ]
    },
    {
      heading: "Our Cleaning Method",
      paragraphs: [
        "Astra Tile & Grout cleaning method is to apply specialized cleaning product to your tiles. Then using our powerful truck mount steam extraction, we use high temperature combined with high pressure to steam clean your tiles.",
        "Astra leaves your floors walk on dry. All the dirt & water from the cleaning process is sucked into the 400 liter holding tank in the van. So there is no mess, all you need to do is sit back & enjoy your new looking tiles again.",
        "With our state of the art methods, your tiles & grout are left hygienic clean. There is no mess or splash up your walls. Your tiles & grout are dry when we leave. The results are truly amazing."
      ]
    },
    {
      heading: "Tile & Grout Sealing Options",
      paragraphs: [
        "Your Astra Tile & Grout technicians also offer Tile & Grout Protection (Also known as Tile Sealing). We offer 3 different options:"
      ],
      list: [
        "Grout Sealing - Seal your grout to prevent liquids staining. Available in natural or gloss finish",
        "Tile & Grout Sealing - Seal both tiles and grout to prevent liquids, dirt and general wear. Natural or gloss finish available",
        "Grout Colouring - Change the colour of your grout with our range of shades to suit your requirements"
      ]
    },
    {
      heading: "Surfaces We Clean",
      paragraphs: [
        "Astra Tile & Grout Cleaning will treat Polished Concrete, Concrete, Granite, Limestone, Marble, Sandstone, Porcelain, Slate, Terracotta and many more."
      ]
    }
  ];

  const process = [
    {
      title: "Inspection",
      description: "Identify tile type and assess condition to determine best cleaning method"
    },
    {
      title: "Apply Cleaning Solution",
      description: "Specialized cleaning products applied to tiles and grout"
    },
    {
      title: "High-Pressure Steam Clean",
      description: "Powerful truck-mounted system with high temperature and pressure"
    },
    {
      title: "Extract & Dry",
      description: "All dirt and water extracted into holding tank, floors left walk-on dry"
    },
    {
      title: "Optional Sealing",
      description: "Apply protective sealing in natural or gloss finish"
    }
  ];

  const features = [
    "Truck Mounted Machines",
    "Heats up to 121°C",
    "1000-3000 PSI Pressure",
    "Walk-On Dry Results",
    "No Mess or Splash",
    "Grout Sealing Available",
    "Grout Colour Change Options"
  ];

  const cta = {
    title: "Transform Your Tiles Today",
    description: "Expert tile and grout cleaning with amazing results"
  };

  return (
    <ServiceBlog
      title="Tile & Grout Cleaning Brisbane"
      subtitle="Expert Tile Cleaning & Sealing - We Remove Grime & Stains Fast!"
      heroImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={cta}
    />
  );
}

export default TileGroutCleaning;
