import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="user-select-none">
      <Link className="navbar-brand" to="/">
        <h1 className="h1 p-2 px-2 py-1 text-justify">
          <span className="badge bg-primary text-wrap shadow p-2">XY</span>
          <span className="fw-bold link-dark">store</span>
        </h1>
      </Link>
    </div>
  );
};
export default Logo;