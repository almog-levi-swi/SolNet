export const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
    defaultSortOrder: "descend",
    sorter: (a, b) => (a.first_name > b.first_name ? 1 : -1),
    render: (text) => {
      return <a>{text}</a>;
    },
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    defaultSortOrder: "descend",
    sorter: (a, b) => (a.last_name > b.last_name ? 1 : -1),
    render: (text) => {
      return <a>{text}</a>;
    },
  },
  {
    title: "Birth Date",
    dataIndex: "birthdate",
    sorter: (a, b) => (a.birthdate > b.birthdate ? 1 : -1),
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
    dataIndex: "full_time",
    sorter: (a, b) => (a.full_time > b.full_time ? 1 : -1),
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: (a, b) => (a.address > b.address ? 1 : -1),
  },
];
