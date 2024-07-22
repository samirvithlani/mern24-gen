import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export const Muitable1 = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 22 },
  ];
  return <div>
    <h1>MUI TABLE 1</h1>
    <DataGrid
        rows={rows}
        columns={columns}
    ></DataGrid>

  </div>;
};
