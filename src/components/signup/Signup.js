import DynamicKids from "./DynamicKids.js";
import React, { useState } from "react";

import { Button, Form, Input, Select, DatePicker, Checkbox } from "antd";

const { Option } = Select;
const birthDateConfig = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select your birth date!",
    },
  ],
};

const endDateConfig = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select your End date!",
    },
  ],
};

const joinDateConfig = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Please select your join date!",
    },
  ],
};

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup = () => {
  const [form] = Form.useForm();
  const [kids, setKids] = useState(0);
  const [student, setStudent] = useState(false);
  const onFinish = (values) => {
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="050">050</Option>
        <Option value="052">052</Option>
        <Option value="053">053</Option>
        <Option value="054">054</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "052",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="first name"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please input your first name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="last name"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please input your last name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="birth date" label="Birth Date" {...birthDateConfig}>
        <DatePicker />
      </Form.Item>

      <Form.Item name="join date" label="Join Date" {...joinDateConfig}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="role"
        label="Role"
        rules={[
          {
            required: true,
            message: "Please select role!",
          },
        ]}
      >
        <Select placeholder="select your role">
          <Option value="regular">Regular</Option>
          <Option value="team_leader">Team Leader</Option>
          <Option value="group_leader">Group Leader</Option>
          <Option value="ceo">CEO</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="department"
        label="Department"
        rules={[
          {
            required: true,
            message: "Please select department!",
          },
        ]}
      >
        <Select placeholder="select your department">
          <Option value="r&d">R&D</Option>
          <Option value="automation">Automation</Option>
          <Option value="devops">DevOps</Option>
          <Option value="hr">HR</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="shirt_size"
        label="Shirt Size"
        rules={[
          {
            required: true,
            message: "Please select shirt size!",
          },
        ]}
      >
        <Select placeholder="select your shirt size">
          <Option value="small">S</Option>
          <Option value="medium">M</Option>
          <Option value="large">L</Option>
          <Option value="extra_large">XL</Option>
          <Option value="extra_extra_large">XXL</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="food_preferences"
        label="Food Preferences"
        rules={[
          {
            required: true,
            message: "Please select food preferences!",
          },
        ]}
      >
        <Select placeholder="select your food preferences">
          <Option value="none"> Eat everything</Option>
          <Option value="kosher"> Kosher</Option>
          <Option value="vegetarian">Vegetarian</Option>
          <Option value="vegan">Vegan</Option>
          <Option value="allergic">Allergic</Option>
          <Option value="special">Special</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: "Please input your address!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: "Please select gender!",
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="marrige"
        label="Married?"
        rules={[
          {
            required: true,
            message: "Please select option!",
          },
        ]}
      >
        <Select placeholder="Are you married?">
          <Option value="yes">Yes</Option>
          <Option value="no">No</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="num_of_kids"
        label="Number of kids"
        rules={[
          {
            required: true,
            message: "Please select number of kids!",
          },
        ]}
      >
        <Select
          placeholder="Number of kids?"
          onSelect={(value) => {
            setKids(value);
          }}
        >
          <Option value="0">0</Option>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
        </Select>
      </Form.Item>

      <DynamicKids kids={kids} birthDateConfig={birthDateConfig} />

      <Form.Item
        name="student"
        valuePropName="unchecked"
        wrapperCol={{ offset: 6, span: 10 }}
        onChange={(e) => setStudent(e.target.checked)}
      >
        <Checkbox>Student?</Checkbox>
      </Form.Item>

      {student ? (
        <Form.Item name="end date" label="End Date" {...endDateConfig}>
          <DatePicker />
        </Form.Item>
      ) : null}

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signup;
