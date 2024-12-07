import "./dichvu.css";

import React from "react";
import { useSelector } from "react-redux";

import "../../../../fixed.css";

function Service(props) {
  const services = useSelector((state) => state.dichvus.dichvu.data);

  const serviceList = [];
  if (services) {
    for (let i = 0; i < services.length; i++) {
      if (services[i].status === 1 && services[i].loadhome === 1) {
        serviceList.push(services[i]);
      }
    }
  }

  return (
    <div id="dichvu">
      <div className="fixed-background">
        <div className="dark">
          <div className="mb-5 tour">
            <div className="heading text-center pt-5">
              <span>Company Services</span>
              <div className="hr"></div>
              <p className="mb-4">
                Services that the company will provide during the customer's
                tour.
              </p>
            </div>
            <div className="container">
              <div className="row justify-content-center pb-5 text-center">
                {!services
                  ? ""
                  : serviceList.map((service) => (
                      <div className="col-md-4" key={service.id}>
                        <div className="icon">
                          <span className={service.icon}></span>
                        </div>
                        <div className="content-dv">
                          <strong>{service.name}</strong>
                          <p>{service.mota}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="fixed-wrap">
              <div className="fixed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {};

export default Service;
