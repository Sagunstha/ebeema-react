import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

const Filter = ({ age, term, sum, setAge, setTerm, setSum }) => {
  const [form] = Form.useForm();
  const { Option } = Select;
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
          <Checkbox className="filter" onChange={onChange}>
            NLIC Nepal Life Insurance Company
          </Checkbox>
          <br />
          <Checkbox onChange={onChange}>
            LIC Life Insurance Corporation
          </Checkbox>
          <br />
          <Checkbox onChange={onChange}>
            National Life Insurance Company Limited
          </Checkbox>
        </Form.Item>

        <Form.Item style={{ borderBottom: "1px solid #e0e0e0", padding: 15 }}>
          <p>Features</p>
          <br />
          <Checkbox onChange={onChange}>
            Accidental Death Benefits (adb)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="a">
            Term Rider
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="b">
            Premium Waiver Benefit (PWB)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="c">
            PTD/PWB
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="d">
            ADB/PTD/PWB
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="e">
            PTD
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="f">
            Critical Illness (CI)
          </Checkbox>
          <br />
          <Checkbox onChange={onChange} value="g">
            asfdsfdsf
          </Checkbox>
        </Form.Item>

        {/* <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        ></Form.Item> */}
      </Form>
    </div>
  );
};

export default Filter;
