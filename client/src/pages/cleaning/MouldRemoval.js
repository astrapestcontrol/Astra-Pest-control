import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function MouldRemoval() {
  const content = [
    {
      heading: "Mould on Carpets",
      paragraphs: [
        "Mould can be a big problem if left on carpets for too long as the mould spores can permanently stain the fibres leaving unsightly marks over the surface of the carpet.",
        "Not only can a permanent mark be left, but also ill health from the mould, it can bring on asthma attacks in asthmatics. So it best to remove all traces of mould as soon as possible."
      ]
    },
    {
      heading: "Professional Mould Removal",
      paragraphs: [
        "The most effective way to remove mould would be to call a trained professional carpet cleaner. With the aid of steam and a selection of cleaning solutions the mould can be taken out of the carpet, before any further damage is caused.",
        "The surface mould, if already formed a covering over the affected area would be extracted with a steam cleaning machine, after this the area is treated with a specialised cleaning solution this will remove the rest of the mould from the affected area.",
        "After the cleaning process the area should be left as dry as possible. To do this, a quality carpet cleaning company is required with well-maintained equipment, this will help to prevent the mould from reforming."
      ]
    },
    {
      heading: "Treatment Process",
      paragraphs: [
        "After the cleaning process and the application of the mould inhibitor and some deodoriser, the area should be left to completely dry and no furniture should be place back there until dry.",
        "Mould can also leave carpets smelly and making the affected area almost unbearable to be around. This is where a well trained professional carpet cleaner would be able to explain the best possible way to solve the problem."
      ]
    }
  ];

  const process = [
    { title: "Assessment", description: "Inspect affected area and assess mould severity" },
    { title: "Extract Surface Mould", description: "Steam extraction removes visible mould" },
    { title: "Apply Treatment", description: "Specialized cleaning solution eliminates remaining mould" },
    { title: "Dry Thoroughly", description: "Ensure area is completely dry to prevent regrowth" },
    { title: "Apply Inhibitor", description: "Mould inhibitor and deodorizer application" }
  ];

  const features = [
    "Steam Cleaning Method",
    "Specialized Solutions",
    "Mould Inhibitor Applied",
    "Odour Removal",
    "Health Safe",
    "Prevents Regrowth"
  ];

  return (
    <ServiceBlog
      title="Mould Removal Brisbane"
      subtitle="Professional Mould Treatment - Safe & Effective Removal"
      heroImage="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Remove Mould Safely Today", description: "Professional mould removal and prevention" }}
    />
  );
}

export default MouldRemoval;
