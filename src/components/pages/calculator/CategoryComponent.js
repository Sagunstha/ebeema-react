import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "antd";
import "antd/dist/antd.css";

const CategoryComponent = () => {
  const [dataProducts, setdataProducts] = useState([]);
  const { Option } = Select;
  const [categoryvalue, setCategoryValue] = useState("");

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.data) {
      setdataProducts(products?.data?.catagories);
    }
  }, [products]);
  console.log(dataProducts);
  const handleChangeCategory = (option, value) => {
    setCategoryValue(value);
    console.log("value", value);
  };
  return (
    <>
      {
        <Select
          className="dropdown-category"
          placeholder="Select Category"
          onChange={handleChangeCategory}
          name="category"
        >
          {dataProducts?.map((data, index) => (
            <Option key={index} value={data.categoryCode}>
              {data.name}
            </Option>
          ))}
        </Select>
      }
      {/* <div>{categoryvalue}</div> */}
    </>
  );
};

export default CategoryComponent;
