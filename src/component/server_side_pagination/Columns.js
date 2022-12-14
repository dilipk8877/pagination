export const columns = [
    {
        name:"Image",
        cell: row => <img height="30px" width="30px" alt={row.first_name} src={row.avatar} />
    },
    {
      name: "First Name",
      selector: "first_name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
    },
  ];