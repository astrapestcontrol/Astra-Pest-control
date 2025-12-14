import React from 'react';
import ServiceBlog from '../../components/ServiceBlog';

function CommercialCleaning() {
  const content = [
    {
      heading: "Commercial Carpet Cleaning Brisbane",
      paragraphs: [
        "Here at Astra Pest Control in Brisbane we are experts in cleaning commercial carpets.",
        "Because commercial carpets need a more powerful clean, Astra uses TRUCK MOUNTED cleaning systems. Astra's truck mounted machines are so powerful that they can be up to 250 meters away from the job site.",
        "We can combine this powerful system with Astra's encapsulation low moisture cleaning process (ENCAP) to leave your carpets with the best ultra clean results. Astra guarantees that when we do this type of clean, there is nothing that comes close to it, a claim that is based on Astra's 15 years of experience."
      ]
    },
    {
      heading: "Commercial Grade Cleaning",
      paragraphs: [
        "Most commercial grade carpets fitted in industrial buildings, such as shops, schools, warehouses and office blocks, are good for carpet cleaners to clean, as we can use most cleaning agents on them without risk of damage to the carpet fibres.",
        "However, in some schools and shops, there can be a lot of gum or other sticky substances stuck to the carpets, and solvents may be needed to remove them. This is where Astra can be trusted to do a quality job, with no risk to your carpet fibres.",
        "Our carpet-cleaning technicians know how to handle solvents. We also use our Last Step Injection process to flush out all the solvents and cleaning agents used to clean the carpets, thus ensuring that you get the best cleaning results."
      ]
    }
  ];

  const process = [
    { title: "Site Assessment", description: "Evaluate commercial space and carpet condition" },
    { title: "Pre-Treatment", description: "Remove gum, stains, and sticky substances" },
    { title: "Truck Mount Clean", description: "Powerful cleaning up to 250m from van" },
    { title: "ENCAP Process", description: "Low moisture encapsulation for fast drying" },
    { title: "Final Rinse", description: "Last step injection removes all cleaning agents" }
  ];

  const features = [
    "Truck Mounted Systems",
    "250m Reach",
    "ENCAP Low Moisture",
    "Walk-On Dry",
    "After Hours Available",
    "Schools & Offices"
  ];

  return (
    <ServiceBlog
      title="Commercial Carpet Cleaning Brisbane"
      subtitle="Professional Commercial Cleaning - Offices, Schools, Warehouses"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      content={content}
      process={process}
      features={features}
      cta={{ title: "Commercial Cleaning Solutions", description: "Professional service for businesses across Brisbane" }}
    />
  );
}

export default CommercialCleaning;
