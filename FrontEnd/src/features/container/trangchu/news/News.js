import React from "react";
import { useSelector } from "react-redux";
import { Link, Link as Linkrt } from "react-router-dom";
import "./tintuc.css";
import SeeMore from "../../../../shared/layouts/SeeMore";

function News(props) {
  const newsList = useSelector((state) => state.tintucs.tintuc.data);

  const tintuc1 = [];
  const tintuc2 = [];
  const tintuc3 = [];

  if (newsList) {
    var sort = [];
    for (let i = 0; i < newsList.length; i++) {
      if (newsList[i].status === 1) {
        sort.unshift(newsList[i]);
      }
    }
    for (let i = 0; i < sort.length; i++) {
      if (newsList[i].status === 1) {
        if (tintuc1.length < 2) {
          tintuc1.push(sort[i]);
        } else {
          if (tintuc2.length < 2) {
            tintuc2.push(sort[i]);
          } else {
            if (tintuc3.length < 4) {
              tintuc3.push(sort[i]);
            }
          }
        }
      }
    }
  }
  const tomtat1 = (e) => {
    var chu = "";
    for (let i = 0; i < e.length; i++) {
      if (chu.length < 225) {
        chu += e[i];
      }
    }
    chu = chu + "...";
    return chu;
  };
  const tomtat2 = (e) => {
    var chu = "";
    for (let i = 0; i < e.length; i++) {
      if (chu.length < 140) {
        chu += e[i];
      }
    }
    chu = chu + "...";
    return chu;
  };
  return (
    <div id="news">
      <div className="heading text-center">
        <span>
          <Link to="/listtintuc">Travel News</Link>
        </span>
        <div className="hr"></div>
        <p className="mb-4">
          Update the latest news about domestic and international tours quickly.
        </p>
      </div>
      <div className="container">
        <div className="row mb-4">
          {tintuc1.map((ok) => (
            <div className="col-sm-6 mb-3" key={ok.id}>
              <Linkrt to={`/detail-new/${ok.id}`}>
                <div className="news-box">
                  <img src={ok.anh} width="540px" height="303px" alt="" />
                  <div className="heading p-3">
                    <strong>{ok.name}</strong>
                  </div>
                  <div className="content-news">
                    <p className="text-justify">{tomtat1(ok.tomtat)}</p>
                  </div>
                </div>
              </Linkrt>
            </div>
          ))}
        </div>
        <div className="row">
          {tintuc2.map((ok) => (
            <div className="col-md-4 col-sm-6 mb-3" key={ok.id}>
              <Linkrt to={`/detail-new/${ok.id}`}>
                <div className="news-box">
                  <div style={{ height: "190px" }}>
                    <img src={ok.anh} className="w-100 h-100" alt="" />
                  </div>
                  <div className="heading pt-1 pb-1 pl-2 pr-2">
                    <strong>{ok.name}</strong>
                  </div>
                  <div className="content-news">
                    <p className="text-justify">{tomtat2(ok.tomtat)}</p>
                  </div>
                </div>
              </Linkrt>
            </div>
          ))}
          <div className="col-md-4">
            <div className="row ">
              {tintuc3.map((ok) => (
                <div className="col-md-12" key={ok.id}>
                  <Linkrt to={`/detail-new/${ok.id}`}>
                    <div className="news-box">
                      {/* <img src={ok.anh} className="float-left" alt="" />
                      <div className="heading p-2 float-left">
                        <div style={{ paddingLeft: "1rem" }}>
                          <strong style={{ fontSize: ".9rem" }}>{ok.name}</strong>
                        </div>
                      </div> */}
                      <div className="row">
                        <div className="col-4">
                          <img src={ok.anh} className="" alt="" />
                        </div>
                        <div className="col-8">
                          <strong style={{ fontSize: ".9rem" }}>
                            {ok.name}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </Linkrt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SeeMore url="/listtintuc" className="xem-them" />
    </div>
  );
}

News.propTypes = {};

export default News;
