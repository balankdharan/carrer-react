import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
        doloribus saepe incidunt veniam nam tempore ducimus excepturi quas autem
        inventore numquam, ullam facere modi corporis soluta architecto
        provident quo animi!
      </p>
      <p>
        Go to the <Link to="/"> Homepage</Link>
      </p>
    </div>
  );
}
