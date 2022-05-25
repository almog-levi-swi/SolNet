import DynamicKids from "./DynamicKids.js";
import React, { useState } from "react";
import { insertEmployee } from "../../firebaseDB.js";

import {
  Button,
  Form,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Row,
  Col,
  Layout,
  Divider,
  notification,
} from "antd";

const { Header, Content } = Layout;
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
      offset: 12,
    },
  },
};

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

const Signup = () => {
  const [form] = Form.useForm();
  const [kids, setKids] = useState(0);
  const [student, setStudent] = useState(false);
  const onFinish = (values) => {
    const newEmployee = {
      address: values.address,
      birthdate: {
        dd: values["birth date"].toDate().getDay() + 1,
        mm: values["birth date"].toDate().getMonth(),
        yy: values["birth date"].toDate().getFullYear(),
      },
      department: values.department,
      email: values.email,
      emergency_contact: {
        name: "Keren Singer",
        phone: "05212345",
      },
      first_name: values["first name"],
      food_preferences: values.food_preferences,
      full_time: !values.student,
      has_children: values.num_of_kids === "0",
      is_admin: false,
      joinDate: {
        dd: values["join date"].toDate().getDay() + 1,
        mm: values["join date"].toDate().getMonth(),
        yy: values["join date"].toDate().getFullYear(),
      },
      last_name: values["last name"],
      married: values.marrige,
      password: values.password,
      phone: values.phone,
      role: values.role,
      shirt_size: values.shirt_size,
      study_end_date: {
        dd: values["end date"].toDate().getDay() + 1,
        mm: values["end date"].toDate().getMonth(),
        yy: values["end date"].toDate().getFullYear(),
      },
    };

    insertEmployee(newEmployee)
      .then((_resp) =>
        openNotificationWithIcon(
          "success",
          "New Employee was created successfully",
          `${values["first name"]} ${values["last name"]} was created successfully`
        )
      )
      .catch((_e) =>
        openNotificationWithIcon(
          "error",
          "Failed to create new Employee",
          `There is an error`
        )
      );
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
    <>
      <Divider orientation="center">
        <h1>Sign Up</h1>
      </Divider>
      <Content style={{ margin: "80px" }}>
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
          <Row justify="center">
            <Col span={5}>
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
                <Input
                  placeholder="Your first name"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
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
                <Input
                  placeholder="Your last name"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
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
                <Input
                  placeholder="Your email"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
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
                <Input
                  placeholder="Your address"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
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
                <Input.Password
                  placeholder="Your password"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item
                name="confirm"
                label="Confirm"
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
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password style={{ borderRadius: "8px" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
              <Form.Item
                name="birth date"
                label="Birth Date"
                {...birthDateConfig}
              >
                <DatePicker style={{ borderRadius: "8px" }} />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item name="join date" label="Join Date" {...joinDateConfig}>
                <DatePicker style={{ borderRadius: "8px" }} />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
              <Form.Item
                className="selectWrapper"
                name="department"
                label="Department"
                rules={[
                  {
                    required: true,
                    message: "Please select department!",
                  },
                ]}
              >
                <Select
                  placeholder="select your department"
                  style={{ borderRadius: "8px" }}
                >
                  <Option value="r&d">R&D</Option>
                  <Option value="automation">Automation</Option>
                  <Option value="devops">DevOps</Option>
                  <Option value="hr">HR</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={5}>
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
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
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
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item
                name="food_preferences"
                label="Food"
                rules={[
                  {
                    required: true,
                    message: "Please select food preferences!",
                  },
                ]}
              >
                <Select placeholder="select your food preferences">
                  <Option value="none"> Eats everything</Option>
                  <Option value="kosher"> Kosher</Option>
                  <Option value="vegetarian">Vegetarian</Option>
                  <Option value="vegan">Vegan</Option>
                  <Option value="allergic">Allergic</Option>
                  <Option value="special">Special</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
              <Form.Item
                name="phone"
                label="Phone"
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
                    borderRadius: "8px",
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item
                name="marrige"
                label="Married"
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
            </Col>
          </Row>

          <Row justify="center">
            <Col span={5}>
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
            </Col>
            <Col span={5}></Col>
          </Row>
            <DynamicKids kids={kids} birthDateConfig={birthDateConfig} />

          <Row style={{ marginLeft: '32%'}}>
            <Form.Item
              name="student"
              defaultChecked="unchecked"
              wrapperCol={{ span: 1000 }}
              onChange={(e) => setStudent(e.target.checked)}
            >
              <label>
                Student?
                <Checkbox />
              </label>
            </Form.Item>

            {student ? (
              <Form.Item name="end date" label="End Date">
                <DatePicker />
              </Form.Item>
            ) : null}
          </Row>

          <Form.Item
            {...tailFormItemLayout}
            style={{ width: "68%", margin: "center" }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#ffa5005c",
                fontWeight: "bold",
                width: "120px",
                height: "50px",
                fontSize: "20px",
              }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};

export default Signup;
