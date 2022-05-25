import React, { useState } from "react";
import { Table, Modal, Row, Col } from "antd";
import { columns } from "./TableConfiguration.js";

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
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            First Name
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Last Name
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.firstname}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.lastname}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Role
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Department
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.role}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.department}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Birth date
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Join date
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.birthdate}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmployee.joindate}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Shirt size
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Food preferences
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.shirtsize}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.food}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Email
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Phone
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.email}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.phone}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Married
          </Col>
          <Col span={12} style={{ fontSize: 12, backgroundColor: "#DCDCDC" }}>
            Gender
          </Col>
        </Row>
        <Row>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.kids > 0
              ? `${selectedEmployee.married} (+${selectedEmployee.kids})`
              : selectedEmployee.married}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmployee.gender}
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
