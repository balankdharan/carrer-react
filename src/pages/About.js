import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState("mario");
  if (!user) {
    setUser(null);
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum est eius, ullam atque repellat quos aut dicta. Consequuntur
        ratione odit aliquid velit ducimus eius aut reiciendis incidunt!
        Voluptatem, nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum est eius, ullam atque repellat quos aut dicta. Consequuntur
        ratione odit aliquid velit ducimus eius aut reiciendis incidunt!
        Voluptatem, nostrum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum est eius, ullam atque repellat quos aut dicta. Consequuntur
        ratione odit aliquid velit ducimus eius aut reiciendis incidunt!
        Voluptatem, nostrum!
      </p>
      {/* <button onClick={() => setUser(null)}>Logout</button> */}
    </div>
  );
}
