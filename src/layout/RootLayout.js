import { NavLink, Outlet } from "react-router-dom";
// import BreadCrumbs from "../components/BreadCrumbs";

export default function RootLayout() {
  return (
    <div>
      <header className="floating-header">
        <nav className="floating-nav">
          <h1>Router</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </div>
        </nav>
        {/* <BreadCrumbs /> */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
