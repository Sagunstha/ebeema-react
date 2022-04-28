import React from "react";
import "./contact.css";
import contactinfo from "./ContactData";
import MapContainer from "./Map";
import Recaptcha from "react-google-recaptcha";
import { Form, Input, Button } from "antd";

function Contact() {
  const onFinish = (values) => {
    console.log(values);
  };
  const handleToken = (token) => {
    if (
      (currentForm) => {
        return { ...currentForm, token };
      }
    );
  };
  const handleExpire = () => {
    if (
      (currentForm) => {
        return { ...currentForm, token: null };
      }
    );
  };
  return (
    <div>
      <div className="banner-contact banner">
        <div className="contact_space">
          <h1 className="contact-text">Contact</h1>
        </div>
      </div>
      <div className="main-div">
        <div className="sub-div">
          <div className="left-div">
            {contactinfo.map((info) => {
              return (
                <div className="contact-detail">
                  <div className="contact-container">
                    {info.image}
                    <div className="contact-info">
                      <h4 className="contact-title">{info.title}</h4>
                      <p className="contact-desc">{info.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="right-div">
            <Form name="nest-messages" onFinish={onFinish}>
              <label
                className="contact-value"
                style={{
                  color: "#686868",
                  marginBottom: "-15px",
                }}
              >
                Full Name
              </label>
              <Form.Item name="name">
                <Input
                  style={{
                    padding: "10px 15px",
                  }}
                  placeholder="Type your full name"
                />
              </Form.Item>
              <div className="contact-email-phno">
                <div>
                  <label
                    className="contact-value"
                    style={{ color: "#686868", marginBottom: "-15px" }}
                  >
                    Your e-mail Address
                  </label>
                  <Form.Item name="email">
                    <Input
                      style={{
                        padding: "10px 200px 10px 10px ",

                        marginRight: 40,
                      }}
                      placeholder="Type your email address"
                    />
                  </Form.Item>
                </div>
                <div>
                  <label
                    className="contact-value"
                    style={{ color: "#686868", marginBottom: "-15px" }}
                  >
                    Your Phone Number
                  </label>
                  <Form.Item name="number">
                    <Input
                      style={{
                        padding: "10px 200px 10px 10px ",

                        marginRight: 40,
                      }}
                      placeholder="Type your phone number"
                    />
                  </Form.Item>
                </div>
              </div>

              <label
                className="contact-value"
                style={{
                  color: "#686868",
                  marginBottom: 3,
                }}
              >
                Message
              </label>
              <Form.Item name="message">
                <Input.TextArea
                  style={{
                    height: "150px",
                    boxShadow: " 0 1px 5px rgb(135,206,235)",
                  }}
                  placeholder="Type your message here"
                />
              </Form.Item>
              <div className="contact-captcha">
                <Form.Item
                  name="recaptcha"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Recaptcha
                    sitekey="6LdNw9odAAAAAGPD3DRi120MUwC1NTV-Ewy-t6lj"
                    onChange={handleToken}
                    onExpire={handleExpire}
                  />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  htmlType="submit"
                  style={{
                    height: 40,
                    background: "#3987fb",
                    padding: "0px 110px",
                    float: "right",
                    color: "#fff",
                  }}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <MapContainer />
      </div>
    </div>
  );
}

export default Contact;
