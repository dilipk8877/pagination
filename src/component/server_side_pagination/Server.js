import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "./Columns";

const Server = () => {
  const [users, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const counterPerPage = 3;
  console.log(users);
  
  const getUser = () => {
    axios
      .get(
        `https://reqres.in/api/users?page=${page}&per_page=${counterPerPage}&delay=1`
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, [page]);
  return (
    <div>
      <DataTable
        title="User Details"
        columns={columns}
        data={users.data}
        highlightOnHover
        pagination
        paginationServer
        paginationTotalRows={users.total}
        paginationPerPage={counterPerPage}
        paginationComponentOptions={{
          noRowsPerPage: true,
        }}
        onChangePage={(page) => setPage(page)}
      />
    </div>
  );
};

export default Server;
