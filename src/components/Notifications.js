import React from "react";
import CustomAvatar from "./CustomAvatar";
import { Avatar, Card, Col, Row, Empty } from "antd";
const Notifications = ({ employees }) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={10}>
        <Col span={8}>
          <Card title="Birth date" bordered={true}>
            {employees.length > 0 ? (
              <Avatar.Group>
                {/** Sholud filter on employees and create array with relevant birthday employees */}
                {employees.map((employee) => (
                  <CustomAvatar
                    key={`${employee.id}-birthdate`}
                    firstName={employee.firstname}
                    lastName={employee.lastname}
                    date={employee.birthdate}
                  />
                ))}
              </Avatar.Group>
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Join date" bordered={true}>
            {employees.length > 0 ? (
              <Avatar.Group>
                {/** Sholud filter on employees and create array with relevant joindate employees */}
                {employees.map((employee) => (
                  <CustomAvatar
                    key={`${employee.id}-joindate`}
                    firstName={employee.firstname}
                    lastName={employee.lastname}
                    date={employee.birthdate}
                  />
                ))}
              </Avatar.Group>
            ) : (
              <Empty />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Notifications;
