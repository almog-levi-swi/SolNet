import React, { useState } from "react";
import { Table, Modal, Row, Col } from "antd";
import { columns } from "./TableConfiguration.js";
import { Colors } from "../../Consts/colors.js";

const TableEmployees = ({ employees }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [selectedEmployee, setselectedEmployee] = useState({});

  return (
    <>
      <h1>Employee Details</h1>
      <Modal
        info
        title={selectedEmployee.name}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            First Name
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Last Name
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.first_name}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.last_name}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            Role
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Department
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.role}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.department}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            Birth date
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Join date
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.birthdate}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.joinDate}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            Shirt size
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Food preferences
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.shirt_size}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.food_preferences}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            Email
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Phone
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.email}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.phone}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, paddingLeft: '4px', borderRadius: '8px 0 0 8px' }}>
            Married
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: Colors.BASE, borderRadius: '0 8px 8px 0' }}>
            Has Children
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16, paddingLeft: '4px' }}>
            {selectedEmployee.kids > 0
              ? `${selectedEmployee.married} (+${selectedEmployee.kids})`
              : selectedEmployee.married}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.has_children}
          </Col>
        </Row>
      </Modal>
      <Table
        columns={columns}
        dataSource={employees}
        size="small"
        onRow={(record) => {
          return {
            onClick: () => {
              showModal();
              setselectedEmployee(record);
            },
          };
        }}
      />
    </>
  );
};

export default TableEmployees;
