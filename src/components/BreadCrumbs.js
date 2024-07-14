import { useLocation, Link } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      let containsNumbers = /\d/.test(crumb);
      if (!containsNumbers) {
        return (
          <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        );
      } else {
        return <div></div>;
      }
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}
