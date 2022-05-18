import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="user-select-none ">
      <Link to="/" className="text-decoration-none">
        <div className="h2 text-justify">
          <span className="badge bg-primary text-wrap shadow p-2">XY</span>
          <span className="fw-bold link-dark">store</span>
        </div>
      </Link>
    </div>
  );
};
export default Logo;
