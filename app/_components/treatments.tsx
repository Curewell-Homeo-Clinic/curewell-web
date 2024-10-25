import React from "react";

interface Condition {
  title: string;
  image: string;
  subtitle: string;
}

interface TreatmentCardProps extends Condition {
  className?: string;
}

const conditions = [
  {
    title: "Hair Loss",
    image: "/imgs/hair-fall.png",
    subtitle: "बालों का झड़ना",
  },
  {
    title: "Kidney Stones",
    image: "/imgs/kidney.png",
    subtitle: "गुर्दे की पथरी",
  },
  {
    title: "Women's Health Issues (PCOS/PCOD)",
    image: "/imgs/pcod.png",
    subtitle: "महिलाओं की समस्याएं",
  },
  {
    title: "Hemorrhoids/Fistula/Fissure",
    image: "/imgs/piles.png",
    subtitle: "बवासीर या गुदा रोग",
  },
  {
    title: "Joint Pain",
    image: "/imgs/arthirits.png",
    subtitle: "जोड़ों का दर्द",
  },
  {
    title: "Stomach Issues",
    image: "/imgs/gastric.png",
    subtitle: "पेट की समस्याएं",
  },
  {
    title: "Skin Problems",
    image: "/imgs/skin.png",
    subtitle: "त्वचा रोग",
  },
  {
    title: "Headache/Migraine",
    image: "/imgs/migraine.png",
    subtitle: "सर दर्द / माइग्रेन",
  },
  {
    title: "Psoriasis",
    image: "/imgs/psoriasis.png",
    subtitle: "सोरायसिस रोग",
  },
  {
    title: "Breathing Issues",
    image: "/imgs/respiratory.png",
    subtitle: "सांस की समस्याएं",
  },
  {
    title: "Patchy Hair Loss",
    image: "/imgs/alopecia.png",
    subtitle: "बालों के झड़ने के धब्बे",
  },
  {
    title: "Neck Pain",
    image: "/imgs/spondylosis.png",
    subtitle: "गर्दन की समस्या",
  },
];

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  title,
  image,
  subtitle,
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105">
    <div className="relative h-40">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {/* <div className="absolute bottom-0 right-0 bg-green-500 p-1 rounded-tl-md">
        <div className="flex space-x-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white rounded-full" />
          ))}
        </div>
      </div> */}
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </div>
);

const HomeopathicTreatments: React.FC = () => {
  return (
    <div id="treatments" className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-wrap">
          Homeopathic Remedies for Major Chronic Conditions
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
        {conditions.map((condition, index) => (
          <TreatmentCard
            key={index}
            title={condition.title}
            image={condition.image}
            subtitle={condition.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeopathicTreatments;
