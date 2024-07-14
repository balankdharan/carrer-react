import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  //   const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary :{career.salary}</p>
      <p>Location :{career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          error dicta quis provident hic ex aspernatur. Iusto animi earum saepe
          veritatis laboriosam in quaerat voluptates, doloremque, officiis
          laudantium consequuntur sequi!
        </p>
      </div>
    </div>
  );
}
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
