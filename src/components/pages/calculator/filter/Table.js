import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResult } from "../../redux/calculatorResult/resultAction";
import { Modal } from "antd";

const Table = ({ sum, term, category, setAge }) => {
  const results = useSelector((state) => state.allResults.results);
  console.log("results", results);
  const dispatch = useDispatch();
  const [resultcontent, setResultContent] = useState([]);
  const [viewplan, setViewPlan] = useState(false);
  const [modalData, setModalData] = useState();
  const [showviewModal, setViewShowModal] = useState(false);
  const [showfaicon, setShowFaIcon] = useState(true);

  const toggleIcon = () => {
    setShowFaIcon(!showfaicon);
  };

  // function onChange(date) {
  //   const userDOB = moment(date, "YYYY/M/D");
  //   const calAge = moment().diff(userDOB, "years");
  //   setAge(calAge);
  // }
  useEffect(() => {
    if (results?.data) {
      setResultContent(Object.values(results.data.products));
    }
  }, [results]);
  useEffect(() => {
    setModalData(resultcontent);
  }, [resultcontent]);
  console.log("resultcontent", resultcontent);
  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);

  const showViewPlan = () => {
    setViewPlan(true);
  };
  const handleViewPlan = () => {
    setViewPlan(false);
  };
  const showViewModal = () => {
    setViewShowModal(true);
  };
  console.log("modalDAta", modalData);
  return (
    <div className="">
      <div className="compare-header-info">
        <div className="sumassured-items">
          <div className="sumassured-title">
            <h1>Sum Assured</h1>
          </div>
          <div className="sumassured-number-wrapper">
            <p>{sum}</p>
          </div>
        </div>
        <div className="term-items">
          <div className="term-title">
            <h1>Term</h1>
          </div>
          <div className="term-number-wrapper">
            <p>{term}</p>
          </div>
        </div>
      </div>
      <div className="compare-search-sort">
        <p className="left-sort">{category} : Plans match your search</p>
        <div className="right-sort"></div>
      </div>
      <div className="compare-plans">
        {resultcontent.map((data, index) => (
          <div>
            <table class="table compare-result-table">
              <tbody>
                <tr className="content-compare">
                  <td className="compare-parts line-rht-cmp">
                    <p>{data.company.name}</p>
                    <img
                      src={`http://ispl.ebeema.com/images/company/${data.company.logo}`}
                      width="40%"
                    />
                    <h3 style={{ fontSize: "14px" }}>{data.name}</h3>
                  </td>

                  <td className="details-box line-rht-cmp">
                    <span style={{ color: "#616161", fontSize: "13px" }}>
                      Premium Amount
                    </span>
                    <p style={{ paddingTop: "5px" }}>
                      <strong>Rs.{data.premiumAmount}</strong>
                    </p>
                    <p style={{ color: "#616161" }}>Age</p>
                    <p>
                      <strong>{data.currentAge}Y</strong>
                    </p>

                    <span style={{ color: " #337ab7" }}>
                      Payment Schedule
                      <i
                        class="fa fa-info-circle"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Payment Schedule"
                        style={{ color: "#777" }}
                      ></i>
                    </span>
                  </td>
                  <td className="prem-box line-rht-cmp">
                    <span style={{ color: "#616161", fontSize: "13px" }}>
                      Estimated Maturity value
                    </span>
                    <p style={{ paddingTop: "5px" }}>
                      <strong>Rs.{data.totalPremiumAmount}</strong>
                    </p>
                  </td>
                  <td className="prem-box line-rht-cmp">
                    <div className="box-term-pay">
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong>Term: </strong>
                        {data.currentTerm}Y
                      </p>
                      <p
                        style={{ border: "1px solid #ddd", padding: "2px 4px" }}
                      >
                        <strong>Pay Term: </strong>
                        {data.payingTerm}Y
                      </p>
                    </div>
                    <p className="benefit-lists">
                      {data.availableFeatures.map((word) => (
                        <div>
                          <p className="availablefeatures-name">
                            <span>{word.name}</span>
                            {/* <a onClick={toggleIcon}>
                              {showfaicon ? (
                                <i
                                  class="fa fa-times to-right cross-fa"
                                  aria-hidden="true"
                                />
                              ) : (
                                <i
                                  class="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                              )}
                            </a> */}
                          </p>
                        </div>
                      ))}
                    </p>
                  </td>

                  <td>
                    <div className="benefits-button">
                      <a
                        className="view-plan-button"
                        onClick={() => {
                          setModalData(data);
                          console.log("data", data);
                          showViewPlan();
                        }}
                      >
                        View Plan
                      </a>

                      <br />
                      <button className="select-plan-button">
                        Select Plan
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <Modal
          className="user-modal"
          visible={viewplan}
          title="View Plan"
          style={{ top: "1%" }}
          footer={null}
          maskClosable={false}
          onCancel={handleViewPlan}
        >
          <div>
            <div className="modal-viewplan">
              <img className="modal-logo" src="./image/logo.png" alt="" />
            </div>
            <div className="company-invoice-wrapper">
              <div style={{ width: "35%" }}>
                <img
                  src={`http://ispl.ebeema.com/images/company/${modalData?.company?.logo}`}
                  width="100%"
                />
              </div>
              <div className="invoice-company-name">
                <p className="invoice-companyy-title">
                  {modalData?.company?.name} ({modalData?.name})
                </p>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: modalData?.benefit_details }} //to remove html tag from api
            ></p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Table;
