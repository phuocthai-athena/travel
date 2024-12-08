import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./footer.css";
function Footer(props) {
  const footers = useSelector((state) => state.lienhes.lienhe.data);
  const socials = useSelector((state) => state.mangxahois.mangxahoi.data);

  const footer = [];
  if (footers) {
    for (let i = 0; i < footers.length; i++) {
      if (footers[i].status === 1) {
        footer.push(footers[i]);
      }
    }
  }

  const mxh = [];
  if (footers && socials) {
    for (let i = 0; i < socials.length; i++) {
      if (socials[i].status === 1) {
        mxh.push(socials[i]);
      }
    }
  }

  const navigate = (url) => {
    window.location.href = url;
  };

  return (
    <div id="footer">
      <footer className="page-footer font-small blue pt-4 container">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            {footer.map((ok) => (
              <div className="col-md-6 mt-md-0 mt-3" key={ok.id}>
                <h5 className="text-uppercase text-danger">Footer Content</h5>
                <p>{ok.content}</p>
                <h5 className="text-uppercase text-danger mt-3">Contact</h5>
                <p>
                  <strong>Email: </strong>
                  <i>{ok.email}</i>
                </p>
                <p>
                  <strong>Phone number: </strong>
                  <i>+{ok.sdt}</i>
                </p>
                <p>
                  <strong>Address: </strong>
                  <i>{ok.diachi}</i>
                </p>
              </div>
            ))}
            <hr className="clearfix w-100 d-md-none pb-3" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-danger">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    News
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="fa fa-angle-double-right mr-2"></span>
                    Discounts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3 mxh ">
              <h5 className="text-uppercase text-danger ">Social</h5>
              {mxh.map((ok) => (
                <div key={ok.id} onClick={() => navigate(ok.link)}>
                  <div
                    className="icon_footer"
                    style={{
                      background: `${ok.color}`,
                      cursor: "pointer",
                    }}
                  >
                    <i className={`${ok.icon}`}></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:&nbsp;
          <Link to="https://mdbootstrap.com/">Travel 3T&V Trading Company</Link>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
