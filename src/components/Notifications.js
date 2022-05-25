import React from "react";
import CustomAvatar from "./CustomAvatar.js";
import { Avatar, Card, Row, Empty } from "antd";
const Notifications = ({ employees }) => {
  return (
    <div>
      <Row style={{ marginBottom: "20px" }}>
        <Card title="Birth date" bordered={true}>
          {employees.length > 0 ? (
            <Avatar.Group>
              {/** Sholud filter on employees and create array with relevant birthday employees */}
              {employees.map((employee) => (
                <CustomAvatar
                  key={`${employee.id}-birthdate`}
                  firstName={employee.first_name}
                  lastName={employee.last_name}
                  date={employee.birthdate}
                />
              ))}
            </Avatar.Group>
          ) : (
            <Empty />
          )}
        </Card>
      </Row>
      <Row>
        <Card title="Join date" bordered={true}>
          {employees.length > 0 ? (
            <Avatar.Group>
              {/** Sholud filter on employees and create array with relevant joindate employees */}
              {employees.map((employee) => (
                <CustomAvatar
                  key={`${employee.id}-joindate`}
                  firstName={employee.first_name}
                  lastName={employee.last_name}
                  date={employee.joinDate}
                />
              ))}
            </Avatar.Group>
          ) : (
            <Empty />
          )}
        </Card>
      </Row>
    </div>
  );
};

export default Notifications;
