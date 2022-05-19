import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import "./Result.css";
import { Link, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  // console.log("location", location.state.age);
  const [category, setCategory] = useState();
  const [age, setAge] = useState();
  const [sum, setSum] = useState();
  const [term, setTerm] = useState();
  const [mop, setMop] = useState("yearly");
  const [userFormValues, setUserFormValues] = useState();
  const [featureCheckbox, setFeatureCheckBox] = useState();
  const [companyCheckbox, setCompanyCheckbox] = useState();

  useEffect(() => {
    if (location.state) {
      setCategory(location.state.info);
      setAge(location.state.age);
      setSum(location.state.sum);
      setTerm(location.state.term);
      setUserFormValues(location.state.userFormValues);
    }
  }, [location]);
  // console.log("category", category);

  return (
    <>
      <div class="top-navigation">
        <Link to="/">Home</Link> /
        <Link to="/calculator">Insurance Calculate</Link>/
        <Link to="#">{category}</Link>
      </div>
      <div className="filter-split">
        <div className="filter-section">
          <Filter
            term={term}
            sum={sum}
            age={age}
            setAge={setAge}
            setTerm={setTerm}
            setSum={setSum}
            mop={mop}
            setMop={setMop}
            setFeatureCheckBox={setFeatureCheckBox}
            featureCheckbox={featureCheckbox}
            companyCheckbox={companyCheckbox}
            setCompanyCheckbox={setCompanyCheckbox}
            category={category}
          />
        </div>
        <div className="table-section">
          <Table
            sum={sum}
            term={term}
            category={category}
            setAge={setAge}
            setFeatureCheckBox={setFeatureCheckBox}
            featureCheckbox={featureCheckbox}
            companyCheckbox={companyCheckbox}
            setCompanyCheckbox={setCompanyCheckbox}
            userFormValues={userFormValues}
            mop={mop}
          />
        </div>
      </div>
    </>
  );
};

export default Result;
