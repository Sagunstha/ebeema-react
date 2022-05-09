import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllResult,
  fetchSelectedResult,
} from "../../redux/calculatorResult/resultAction";
import {
  Form,
  Input,
  Checkbox,
  Button,
  DatePicker,
  Select,
  Tooltip,
  Row,
  Col,
} from "antd";
import moment from "moment";
import SelectInput from "@material-ui/core/Select/SelectInput";
import "./Result.css";
// import uniqBy from "lodash";

const Filter = ({ age, term, sum, setAge, setTerm, setSum }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const results = useSelector((state) => state.allResults.results);
  const filterresult = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const [filtercontent, setFilterContent] = useState();
  const [selectedResult, setSelectedResult] = useState();
  console.log("filterresult", filterresult);
  const [termOption, setTermOption] = useState([]);
  const [uniqueCompany, setUniqueCompany] = useState([]);
  const [uniqueFeature, setUniqueFeature] = useState([]);
  const [modeofpayment, setModeOfPayment] = useState([]);
  const [checkBoxData, setCheckBoxData] = useState();
  console.log("uniqueCompany", uniqueCompany);
  // useEffect(() => {
  //   filtercontent?.map((item) => {
  //     console.log("item", item["company"]);

  //     Object.entries(item?.company)?.map(([key, value], i) => {
  //       console.log("value1", value, i);

  //       if (i == 2) {
  //         if (!uniqueCompany.includes(value)) {
  //           uniqueCompany.push(value);
  //         }
  //         //setUniqueCompany(uniqueCompany, [...uniqueCompany, value]);
  //       }
  //     });
  //   });
  // }, [filtercontent]);

  // useEffect(() => {});
  // console.log("uniqueCompany", uniqueCompany);

  // useEffect(() => {
  //   filtercontent?.map((item) => {
  //     console.log("feature", item["availableFeatures"]);

  //     item.availableFeatures.map((value, i) => {
  //       if (!uniqueFeature.includes(value.name)) {
  //         uniqueFeature.push(value.name);
  //       }
  //     });
  //   });
  // }, [filtercontent]);

  useEffect(() => {
    if (results?.data) {
      setFilterContent(Object.values(results.data.products));
      setTermOption(results.data.terms);
      setUniqueFeature(results.data.features);
      setModeOfPayment(results.data.mops);
    }
  }, [results]);
  useEffect(() => {
    if (filterresult?.data) {
      setSelectedResult(Object.values(filterresult?.data?.products));
      setUniqueCompany(filterresult.data.companies);
    }
  }, [filterresult]);

  useEffect(() => {
    dispatch(fetchAllResult());
    dispatch(fetchSelectedResult());
  }, []);
  // console.log("filtercontent", filtercontent);

  function onMOPChange(e) {
    console.log("e");
  }
  function onTermChange(e) {
    console.log(`m`, e);
    setTerm(e);
  }
  function onOptionclick(e) {
    // e.preventdefault();
    console.log("e");
  }
  function onDateChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    setAge(calAge);
  }
  function disabledDate(current) {
    return current && current > moment().endOf("day");
  }

  useEffect(() => {
    onDateChange();
  }, []);

  function onCompanyChange(checkedValues) {
    console.log("checked = ", checkedValues);
    dispatch(fetchAllResult(checkedValues));
    console.log("action called");
  }
  function onFeatureChange(e) {
    if (uniqueFeature === 1) {
    }
  }
  console.log("selectedResult", selectedResult);

  return (
    <div>
      <Form form={form} name="calc_modal" size="small" className="filter-form">
        <Form.Item>
          <h1 className="policy-filter">Policy filter</h1>
        </Form.Item>

        <Form.Item name="filterAge">
          <div className="compare-list">
            <h3 className="filter-dob">Date of Birth</h3>
            <DatePicker
              className="filter-datepicker"
              disabledDate={disabledDate}
              onChange={onDateChange}
              style={{ height: 40, width: "100%" }}
            />
            <Input
              value={age}
              style={{
                width: "100%",
                height: 40,
                border: "none",
                outline: "none",
              }}
            />
          </div>
        </Form.Item>

        <Form.Item
          style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}
          name="filterTerm"
        >
          <h3 className="filter-dob">Term</h3>

          <Select
            className="dropdown-category"
            value={term}
            onChange={onTermChange}
            onClick={onOptionclick}
            style={{ width: "100%" }}
          >
            {termOption?.map((item, index) => (
              <Option key={index}>{item}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}
          name="filtersum"
        >
          <h3>Sum Assured</h3>
          <input
            type="text"
            style={{
              width: "100%",
              height: 40,
              border: "none",
              outline: "none",
            }}
            value={sum}
            onChange={(e) => {
              // handleTerm(e);
              console.log(":::", e.target.value);
              setSum(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <h3>Mode of Payment</h3>
          <Select
            onChange={onMOPChange}
            onClick={onOptionclick}
            className="dropdown-category"
            placeholder="Select A Mop"
            style={{ width: "100%" }}
          >
            {modeofpayment?.map((item, index) => (
              <Option key={index}>{item}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p className="filter-subtitle">Company</p>{" "}
          <Checkbox.Group style={{ width: "100%" }} onChange={onCompanyChange}>
            {uniqueCompany?.map((item, index) => (
              <div key={item.id}>
                <Checkbox value={item.id}>{item.name}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p className="filter-subtitle">Feature</p>
          <Checkbox.Group style={{ width: "100%" }} onChange={onFeatureChange}>
            {uniqueFeature?.map((item, index) => (
              <div key={item.id}>
                <Checkbox value={item.id}>{item.name}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
