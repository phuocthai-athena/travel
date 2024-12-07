import "./Tour.css";

import React from "react";
import { Link } from "react-router-dom";
import { Rate, Spin, Tooltip } from "antd";
import { useSelector } from "react-redux";

import { discount, formatDate } from "../../../../utils/helpers";
import SeeMore from "../../../../shared/layouts/SeeMore";
import SectionTitle from "../../../../shared/layouts/SectionTitle";

function DomesticTour(props) {
  const comments = useSelector((state) => state.binhluans.binhluan.data);
  const tours = useSelector((state) => state.tours.tour.data);

  const tourList = [];
  const maxDate = (e) => {
    if (e) {
      var ngayMax = formatDate(e[0].ngay);
      for (let i = 0; i < e.length; i++) {
        if (ngayMax <= formatDate(e[i].ngay)) {
          ngayMax = formatDate(e[i].ngay);
        }
      }
      return ngayMax;
    }
  };
  if (tours) {
    var sort = [];
    for (let i = 0; i < tours.length; i++) {
      sort.unshift(tours[i]);
    }
    var date = new Date();
    var today =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 > 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      (date.getDate() > 10 ? date.getDate() : "0" + date.getDate());
    for (let i = 0; i < sort.length; i++) {
      if (
        sort[i].status === 1 &&
        sort[i].vitri === 1 &&
        tourList.length < 6 &&
        maxDate(sort[i].Ngaydis) >= today
      ) {
        tourList.push(sort[i]);
      }
    }
  }

  const getPoint = (id) => {
    var commentList = [];
    if (comments) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].status === +1 && comments[i].tourId === id) {
          commentList.push(comments[i]);
        }
      }
    }
    var sumPoint = new Number();
    if (comments) {
      for (let i = 0; i < commentList.length; i++) {
        sumPoint += commentList[i].star;
      }
    }
    var point = Math.round((sumPoint / +commentList.length) * 10) / 10;
    if (isNaN(point)) {
      point = 0;
    }
    return point;
  };

  return (
    <div className="mt-5 mb-5 tour" id="tour">
      <SectionTitle
        title="Domestic travel"
        description="Domestic travel is always a great choice. Bustling cities, unique and
          fascinating cultures."
      />
      <div className="container">
        <div className="row justify-content-center">
          {tourList.length === 0 ? (
            <div className="spin">
              <Spin />
            </div>
          ) : (
            tourList.map((tour) => (
              <div className="col-md-4 mb-2" key={tour.id}>
                {tour.Khuyenmais.length === 0 ? (
                  ""
                ) : tour.Khuyenmais[0].status === 0 ? (
                  ""
                ) : (
                  <Tooltip
                    placement="right"
                    color="#0abf55"
                    title={tour.Khuyenmais[0].name}
                  >
                    <div className="ribbon-wrapper">
                      <div className="ribbon-red">
                        Discount {tour.Khuyenmais[0].khuyenmai}%
                      </div>
                    </div>
                  </Tooltip>
                )}
                <Link to={`/tour/${tour.id}`}>
                  <div className="img rounded">
                    <img src={tour.avatar} className="img-fluid" alt="" />
                  </div>
                  <div className="content_tour">
                    <div className="title_tour text-capitalize">
                      {tour.name}
                    </div>
                    <div className="star float-left">
                      <Rate value={getPoint(tour.id)} disabled />
                    </div>
                    <div className="money float-left ml-3 text-warning">
                      {tour.Khuyenmais.length === 0 ? (
                        <div>
                          {tour.gianguoilon.toLocaleString()} VNĐ
                          <br />
                        </div>
                      ) : tour.Khuyenmais[0].status === 0 ? (
                        <div>
                          {tour.gianguoilon.toLocaleString()} VNĐ
                          <br />
                        </div>
                      ) : (
                        <div>
                          {discount(
                            tour.gianguoilon,
                            tour.Khuyenmais[0].khuyenmai
                          )}
                          VNĐ
                          <br />
                          <del> {tour.gianguoilon.toLocaleString()} VNĐ</del>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <SeeMore url="/list-tour" className="xem-them mt-3" />
    </div>
  );
}

DomesticTour.propTypes = {};

export default DomesticTour;
