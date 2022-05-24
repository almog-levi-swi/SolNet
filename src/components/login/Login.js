import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "../../context/user-auth-context.js";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const { logIn } = useUserAuth();
  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      await logIn(values.email, values.password);
      navigate("/dashbord");
    } catch (err) {
      console.log(err.message);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <h2>Welcome to Solnet</h2>
      <Form
        name="normal_login"
        style={{ maxWidth: "300px" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a style={{ float: "right" }} href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
