import React from "react";
import DataTable from "react-data-table-component";
import data from "../../db.json";
import { columns } from "./Columns";

const Index = () => {
  return (
    <div>
      <DataTable
        title="User Details"
        columns={columns}
        data={data}
        highlightOnHover
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
      />
    </div>
  );
};

export default Index;
