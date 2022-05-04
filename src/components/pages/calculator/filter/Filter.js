import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllResult } from "../../redux/calculatorResult/resultAction";
import {
  Form,
  Input,
  Checkbox,
  Button,
  DatePicker,
  Select,
  Tooltip,
} from "antd";
import moment from "moment";
import SelectInput from "@material-ui/core/Select/SelectInput";
import "./Index.css";
// import uniqBy from "lodash";

const Filter = ({ age, term, sum, setAge, setTerm, setSum }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  const results = useSelector((state) => state.allResults.results);
  const dispatch = useDispatch();
  const [filtercontent, setFilterContent] = useState();

  const [uniqueCompany, setUniqueCompany] = useState([]);
  const [uniqueFeature, setUniqueFeature] = useState([]);

  useEffect(() => {
    filtercontent?.map((item) => {
      console.log("item", item["company"]);

      Object.entries(item?.company)?.map(([key, value], i) => {
        console.log("value1", value, i);

        if (i == 2) {
          if (!uniqueCompany.includes(value)) {
            uniqueCompany.push(value);
          }
          //setUniqueCompany(uniqueCompany, [...uniqueCompany, value]);
        }
      });
    });
  }, [filtercontent]);
  console.log("uniqueCompany", uniqueCompany);

  useEffect(() => {
    filtercontent?.map((item) => {
      console.log("feature", item["availableFeatures"]);

      item.availableFeatures.map((value, i) => {
        if (!uniqueFeature.includes(value.name)) {
          uniqueFeature.push(value.name);
        }
      });
    });
  }, [filtercontent]);
  console.log("uniqueFeature", uniqueFeature);
  useEffect(() => {
    if (results?.data) {
      setFilterContent(Object.values(results.data.products));
    }
  }, [results]);

  useEffect(() => {
    dispatch(fetchAllResult());
  }, []);
  // console.log("filtercontent", filtercontent);
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  function onTermChange(e) {
    console.log(`eeeeeee = ${e}`);
    setTerm(e);
  }
  function onclick(e) {
    e.preventdefault();
    console.log("e");
  }
  function onChange(date) {
    const userDOB = moment(date, "YYYY/M/D");
    const calAge = moment().diff(userDOB, "years");
    setAge(calAge);
  }
  function disabledDate(current) {
    return current && current > moment().endOf("day");
  }

  useEffect(() => {
    onChange();
  }, []);

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
              disabledDate={disabledDate}
              onChange={onChange}
              style={{ height: 40, width: 222 }}
            />
            <Input
              value={age}
              style={{
                height: 40,
                width: 110,
                marginLeft: 20,
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
            value={term}
            style={{
              // bordered: "false",
              outline: "none",
            }}
            onChange={onTermChange}
            onclick={onclick}
          >
            <Option value="5">5</Option>
            <Option value="10">10</Option>
            <Option value="15">15</Option>
            <Option value="20">20</Option>
            <Option value="25">25</Option>
            <Option value="30">30</Option>
            <Option value="35">35</Option>
          </Select>
        </Form.Item>

        <Form.Item
          style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}
          name="filtersum"
        >
          <h3>Sum Assured</h3>
          {sum}
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <h3>Mode of Payment</h3>
          <Select
            onChange={onChange}
            onclick={onclick}
            className="dropdown-category"
            placeholder="Select A Mop"
          >
            <Option>Yearly</Option>
            <Option>Half Yearly</Option>
            <Option>Quarterly</Option>
            <Option>Monthly</Option>
          </Select>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p>Company</p>
          <br />
          {uniqueCompany?.map((item) => (
            <Checkbox className="filter" onChange={onChange}>
              {item}
            </Checkbox>
          ))}
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p>Features</p>
          <br />
          {uniqueFeature?.map((item) => (
            <Checkbox className="filter" onChange={onChange}>
              {item}
            </Checkbox>
          ))}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Filter;
