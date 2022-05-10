import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllResult,
  fetchSelectedResult,
} from "../../redux/calculatorResult/resultAction";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";

const Table = ({
  sum,
  term,
  category,
  setAge,
  setFeatureCheckBox,
  featureCheckbox,
  companyCheckbox,
  setCompanyCheckbox,
}) => {
  const results = useSelector((state) => state.allResults.results);
  const filterresult = useSelector((state) => state.result);
  console.log("results", results);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resultcontent, setResultContent] = useState([]);
  const [viewplan, setViewPlan] = useState(false);
  const [modalData, setModalData] = useState();
  console.log("Checkbox", companyCheckbox);
  useEffect(() => {
    if (results?.data) {
      setResultContent(Object.values(results.data.products));
    }
  }, [results.data]);
  useEffect(() => {
    if (filterresult?.data) {
      setResultContent(Object.values(filterresult?.data?.products));
    }
  }, [filterresult?.data]);

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
  const confirmation = () => {
    if (sum) {
      navigate("/confirm", {
        state: { sum, term, category },
      });
    } else {
      console.log("error");
    }
  };
  function onclickcheckbox() {}

  // console.log("featureCheckbox", featureCheckbox);
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
                            <span style={{ color: "#616161", fontSize: 13 }}>
                              {word.name}
                            </span>
                            {featureCheckbox?.includes(word.id) ? (
                              <div className="fa-icon">
                                <i
                                  class="fa fa-check-circle"
                                  aria-hidden="true"
                                />
                              </div>
                            ) : (
                              <div className="fa-icon">
                                <i
                                  class="fa fa-times to-right cross-fa"
                                  aria-hidden="true"
                                />
                              </div>
                            )}
                            <a></a>
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
                          // console.log("data", data);
                          showViewPlan();
                        }}
                      >
                        View Plan
                      </a>

                      <br />
                      <button
                        className="select-plan-button"
                        onClick={() => {
                          confirmation();
                        }}
                      >
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
          className="view-modal"
          visible={viewplan}
          title="View Plan"
          style={{ top: "5%", right: 100 }}
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
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.42857143,
          color: "#333",
          paddingTop: 20,
        }}
      >
        *Maturity Value is subject to change as per each year's bonus rate
        published by Beema Samiti.
      </p>
    </div>
  );
};

export default Table;
