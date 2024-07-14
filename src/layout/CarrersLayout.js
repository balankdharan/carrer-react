import { Outlet } from "react-router-dom";

export default function CarrersLayout() {
  return (
    <div className="carrers-layout">
      <h2>Carrers</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Outlet />
    </div>
  );
}
