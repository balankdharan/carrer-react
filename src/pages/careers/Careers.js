import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CareerModal from "./CareerModal";

export default function Careers() {
  const careers = useLoaderData();
  const [selectedCareer, setSelectedCareer] = useState(null);

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
  };

  const handleCloseModal = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="careers">
      {careers.map((career) => (
        <div
          key={career.id}
          onClick={() => handleCareerClick(career)}
          className="career-card"
        >
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </div>
      ))}

      {selectedCareer && (
        <CareerModal career={selectedCareer} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  if (!res.ok) {
    throw Error("Could not fetch the careers");
  }
  return res.json();
};
