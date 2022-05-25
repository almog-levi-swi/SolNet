import React from "react";
import { Form, Divider, Select, Input, DatePicker, Row, Col } from "antd";

function DynamicKids(props) {
  return (
    <Form.List name="fields">
      {(fields) => {
        fields = Array(parseInt(props.kids)).fill({});
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Divider>Kid {index + 1}</Divider>
                <Row justify="center">
                  <Col span={5} offset={3}>
                    <Form.Item
                      name={[index, "name"]}
                      label="Name"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="field name" />
                    </Form.Item>
                  </Col>
                  <Col span={3}>
                    <Form.Item
                      label="Gender"
                      name={[index, "gender"]}
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={5}>
                    <Form.Item
                      name={[index, "birth date"]}
                      label="Birth Date"
                      {...props.birthDateConfig}
                    >
                      <DatePicker />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        );
      }}
    </Form.List>
  );
}

export default DynamicKids;
