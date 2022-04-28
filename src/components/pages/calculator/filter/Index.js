import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Table from "./Table";
import "./Index.css";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  // console.log("location", location.state.age);
  const [category, setCategory] = useState();
  const [age, setAge] = useState();
  const [sum, setSum] = useState();
  const [term, setTerm] = useState();

  useEffect(() => {
    if (location.state) {
      setCategory(location.state.info);
      setAge(location.state.age);
      setSum(location.state.sum);
      setTerm(location.state.term);
    }
  }, [location]);
  console.log("category", category);

  return (
    <>
      <div class="top-navigation">
        <Link to="/">Home</Link> /
        <Link to="/calculator">Insurance Calculate</Link>/
        <Link to="#">{category}</Link>
      </div>
      <div className="filter-split">
        <Filter
          term={term}
          sum={sum}
          age={age}
          setAge={setAge}
          setTerm={setTerm}
          setSum={setSum}
        />
        <Table sum={sum} term={term} />
      </div>
    </>
  );
};

export default Index;
