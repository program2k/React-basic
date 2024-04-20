import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <button className="btn button">X</button>
      </div>
      <div class="row">
        <div class="col-2 header">
          <Link to="/home">
            <button className="btn button d-block">Home</button>
          </Link>
          <Link to="/countries">
            <button className="btn button d-block">Countries</button>
          </Link>
        </div>
        <div class="col-10">{children}</div>
      </div>
    </>
  );
};

export default Layout;
