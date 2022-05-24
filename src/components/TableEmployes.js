import React, { useState } from "react";
import { Table, Modal, Row, Col } from "antd";

const TableEmployees = ({ employees }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => (a.name > b.name ? 1 : -1),
      render: (text) => {
        return <a>{text}</a>;
      },
    },
    {
      title: "Gender",
      dataIndex: "gender",
      defaultSortOrder: "descend",
      sorter: (a, b) => (a.gender > b.gender ? 1 : -1),
    },
    {
      title: "Birth Date",
      dataIndex: "birthdate",
      sorter: (a, b) => (a.birthdate > b.birthdate ? 1 : -1),
    },
    {
      title: "Join Date",
      dataIndex: "joindate",
      sorter: (a, b) => (a.joindate > b.joindate ? 1 : -1),
    },
    {
      title: "Role",
      dataIndex: "role",
      sorter: (a, b) => (a.role > b.role ? 1 : -1),
    },
    {
      title: "Department",
      dataIndex: "department",
      sorter: (a, b) => (a.department > b.department ? 1 : -1),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => (a.phone > b.phone ? 1 : -1),
    },
    {
      title: "Full Time",
      dataIndex: "student",
      sorter: (a, b) => (a.student > b.student ? 1 : -1),
    },
    {
      title: "Graduation date",
      dataIndex: "graduation",
      sorter: (a, b) => (a.graduation > b.graduation ? 1 : -1),
    },
    {
      title: "Address",
      dataIndex: "address",
      sorter: (a, b) => (a.address > b.address ? 1 : -1),
    },
  ];

  //Modal should be deleted
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

  const [selectedEmploy, setSelectedEmploy] = useState({});

  return (
    <>
      <Modal
        info
        title={selectedEmploy.name}
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
            {selectedEmploy.name?.split(" ")[0] || ""}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmploy.name?.split(" ")[1] || ""}
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
            {selectedEmploy.role}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmploy.department}
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
            {selectedEmploy.birthdate}
          </Col>
          <Col span={6} style={{ fontSize: 16 }}>
            {selectedEmploy.joindate}
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
            {selectedEmploy.shirtsize}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmploy.food}
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
            {selectedEmploy.email}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmploy.phone}
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
            {selectedEmploy.kids > 0
              ? `${selectedEmploy.married} (+${selectedEmploy.kids})`
              : selectedEmploy.married}
          </Col>
          <Col span={12} style={{ fontSize: 16 }}>
            {selectedEmploy.gender}
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
              setSelectedEmploy(record);
            },
          };
        }}
      />
    </>
  );
};

export default TableEmployees;
