import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function CarpetProtection() {
  const content = [
    {
      heading: "Fabric Protection for Carpets & Upholstery",
      paragraphs: [
        "If you are looking for the answers to stain treatment, Astra will clean and protect your carpets, rugs and upholstery. This will maintain the look and prolong the life of the fabric.",
        "Astra carpet cleaning services in Brisbane recommends our fabric protection range to keep your carpets, rugs and upholstery clean and fresh for longer. Astra guarantees your carpets and upholstery will look cleaner and fresher for longer."
      ]
    },
    {
      heading: "Benefits of Fabric Protection",
      paragraphs: [
        "Fabric Protection protects against resoiling and water-based stains, helps carpet fibres keep their colour, ensures carpet and upholstery fabrics resist stains, will keep carpet and upholstery cleaner for longer, creates a barrier between the fabric and the stains, and helps in the prevention of dirt sticking to fibres in fabrics."
      ],
      list: [
        "Protects against resoiling and water-based stains",
        "Helps carpet fibres keep their colour",
        "Ensures fabrics resist stains",
        "Keeps carpet and upholstery cleaner for longer",
        "Creates a barrier between fabric and stains",
        "Prevents dirt sticking to fibres"
      ]
    },
    {
      heading: "Less Cleaning, More Free Time",
      paragraphs: [
        "Once your carpets, rugs or upholstery have been treated with Astra's Fabric Protection Range, general vacuuming will release the dirt faster and more easily. This will reduce your vacuuming times and improve the look and feel of the carpet & upholstery fibres.",
        "Stains are removed more easily because the Fabric Protection repels liquids. Spills can be blotted up with ease. Astra's Fabric Protection invisible barrier repels liquids such as wine, cordial and oils to protect your carpets, rugs and upholstery."
      ]
    }
  ];

  const process = [
    { title: "Deep Clean First", description: "Professional cleaning before protection application" },
    { title: "Apply Protection", description: "Even application of fabric protection solution" },
    { title: "Drying Time", description: "Allow protection to bond with fibres" },
    { title: "Barrier Formation", description: "Invisible barrier forms on each fibre" },
    { title: "Long-Term Protection", description: "Ongoing protection against stains and dirt" }
  ];

  const features = [
    "Stain Resistance",
    "Repels Liquids",
    "Easier Vacuuming",
    "Prolongs Carpet Life",
    "Invisible Barrier",
    "Applied After Cleaning"
  ];

  return (
    <ServiceBlog
      title="Carpet Protection – Upholstery Protection"
      subtitle="Fabric Protection - Keep Your Carpets Cleaner for Longer"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Protect Your Investment", description: "Add fabric protection to your cleaning service" }}
    />
  );
}

export default CarpetProtection;
