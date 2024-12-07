import "./camnang.css";

import React, { Component } from "react";
import { useSelector } from "react-redux";

import SectionTitle from "../../../../shared/layouts/SectionTitle";

function TravelGuide(props) {
  const travelGuides = useSelector(
    (state) => state.camnangdulichs.camnangdulich.data
  );

  let travelGuideList = [];
  if (travelGuides) {
    for (let i = 0; i < travelGuides.length; i++) {
      if (travelGuides[i].status === 1) {
        travelGuideList.push(travelGuides[i]);
      }
    }
  }
  return (
    <div className="mt-3" id="camnang">
      <SectionTitle
        title="Travel Guide"
        description="All the useful information you need to add to your travel kit"
      />
      <div className="container">
        <div className="row justify-content-center ">
          {!travelGuideList
            ? ""
            : travelGuideList.map((travelGuide) => (
                <div className="col-md-3" key={travelGuide.id}>
                  <div className="head_cn">
                    <i className={travelGuide.icon}></i>
                  </div>
                  <div className="content_cn text-center">
                    <p className="text-center">{travelGuide.name}</p>
                    <span>{travelGuide.content}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

TravelGuide.propTypes = {};

export default TravelGuide;
