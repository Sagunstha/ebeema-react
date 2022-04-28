import React from "react";

const Table = ({ sum, term }) => {
  return (
    <div className="compare-table">
      <div className="compare-header-info">
        <div className="sum-assured-title">
          <div className="sum-assured">
            <h1>Sum Assured</h1>
          </div>
          <div className="sum-result">
            <p>{sum}</p>
          </div>
        </div>
        <div className="term-assured-title">
          <div className="term-assured">
            <h1>Term</h1>
          </div>
          <div className="term-result">
            <p>{term}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
