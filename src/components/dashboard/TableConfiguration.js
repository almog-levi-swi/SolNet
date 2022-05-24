export const columns = [
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
